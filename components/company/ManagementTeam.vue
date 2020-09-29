<template>
  <form action="">
    <div class="d-flex justify-content-end">
      <button class="btn btn-info btn-sm rounded-0" @click.prevent="getManagementTeams">Refresh <i
          class="fa fa-spinner"></i></button>
    </div>
    <div class="row" v-if="!pageLoader">
      <!--branches -->
      <div class="col-md-12">
        <hr>
        <div class="d-flex justify-content-between">
          <p class="text-uppercase text-dark font-weight-bold">Management Team</p>
          <button type="button" class="btn btn-primary btn-sm rounded-0" @click.prevent="modifyAction('add')">Add New
            teams</button>
        </div>
        <hr>
        <div class="bg-light pl-2 pr-2 mb-2" v-for="(team, i) in teams" :key="i">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="" class="font-weight-bold">Name</label>
              <input type="text" class="form-control form-control-sm square-input" v-model="team.name">
            </div>
            <div class="form-group col-md-4">
              <label for="" class="font-weight-bold">Position</label>
              <input type="text" class="form-control form-control-sm square-input" v-model="team.position">
            </div>
            <div class="form-group col-md-1 offset-md-1 pt-2">
              <button class="btn btn-danger rounded-0 btn-sm" @click.prevent="modifyAction(team.id)"><span
                  class="i fa fa-times"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--end branches -->
      <div class="col-md-12">
        <button class="btn btn-primary rounded-0 col-md-4" @click.prevent="saveTeams"
          :disabled="teams.length < 1">{{ loading ? 'Submitting..': 'Submit' }}</button>
      </div>
    </div>
    <div v-if="pageLoader">
      <span class="d-flex justify-content-center pt-5">
        <i class="fa fa-spinner fa-spin fa-5x text-primary"></i>
      </span>
    </div>
  </form>
</template>

<script>
  import {
    MGT_TEAMS_GET,
    MGT_TEAMS_CREATE,
    MGT_TEAMS_UPDATE,
  } from "@/utils/routes.js"
  export default {
    name: "ManagementTeam",
    props: {
      company_id: {
        type: String,
        required: true,
        validator(value) {
          const newValue = value.trim()
          if (newValue < 1) {
            return false
          }
          return true;
        }
      }
    },
    created() {
      this.getManagementTeams()
    },
    data() {
      return {
        loading: false,
        pageLoader: false,
        counter: {
          teams: 0
        },
        teams: [],
        isUpdated: false,
      }
    },
    methods: {
      modifyAction(args) {
        //console.log(args); return;
        if (args != "add") {
          this.teams = this.teams.filter(e => e.id != args);
          this.counter.teams = this.teams.length
          return;
        }
        this.counter.teams = this.teams.length
        this.teams.push({
          id: this.counter.teams,
          name: '',
          position: '',
        });
      },
      async getManagementTeams() {
        this.pageLoader = true
        await this.$axios.get(MGT_TEAMS_GET(this.company_id))
          .then((res) => {
            //  console.log(res.data.dataInfo)
            //  return;
            this.pageLoader = false
            if (res.data.dataInfo == null) {
              this.isUpdated = false
              return;
            }

            this.isUpdated = true

            const data = res.data.dataInfo.teams
            const teams = data.map((e, i) => {
              return {
                id: i++,
                name: e.name,
                position: e.position,
              }
            })

            this.teams = teams

          })
          .catch((err) => {
            console.log(err.response)
          })
      },
      saveTeams() {
        this.loading = true
        const teams = JSON.parse(JSON.stringify(this.teams)).map(e => {
          return {
            name: e.name,
            position: e.position
          }
        });

        const payload = {
          teams: teams
        }


        try {
          let resp;
          if (this.isUpdated) {
            resp = this.$axios.put(MGT_TEAMS_UPDATE(this.company_id), payload)
          } else {
            resp = this.$axios.post(MGT_TEAMS_CREATE(this.company_id), payload)
          }
          resp.then(res => {
            this.loading = false
            console.log(res.data);
            this.getManagementTeams();
          })

          this.$notify(
            "Management Team Added",
            "top-right",
            "primary"
          );


        } catch (err) {
          this.loading = false
          console.log(err.response)
        }
      },
    },
    mounted() {
      //this.modifyAction("add")
    }
  }

</script>

<style>

</style>
