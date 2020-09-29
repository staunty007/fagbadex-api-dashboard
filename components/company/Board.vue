<template>
  <form action="">
    <div class="d-flex justify-content-end">
      <button class="btn btn-info btn-sm rounded-0" @click.prevent="getBoardOfDirectors">Refresh <i
          class="fa fa-spinner"></i></button>
    </div>
    <div class="row" v-if="!pageLoader">
      <!--branches -->
      <div class="col-md-12">
        <hr>
        <div class="d-flex justify-content-between">
          <p class="text-uppercase text-dark font-weight-bold">Board of Directors</p>
          <button type="button" class="btn btn-primary btn-sm rounded-0" @click.prevent="modifyAction('add')">Add New
            Board</button>
        </div>
        <hr>
        <div class="bg-light pl-2 pr-2" v-for="(brd, i) in board" :key="i">
          <div class="form-row">
            <div class="form-group col-md-5">
              <label for="" class="font-weight-bold">Name</label>
              <input type="text" class="form-control form-control-sm square-input" v-model="brd.name">
            </div>
            <div class="form-group col-md-4">
              <label for="" class="font-weight-bold">Position</label>
              <input type="text" class="form-control form-control-sm square-input" v-model="brd.position">
            </div>
            <div class="form-group col-md-1 offset-md-2 pt-2">
              <button class="btn btn-danger rounded-0 btn-sm" @click.prevent="modifyAction(brd.id)"><span
                  class="i fa fa-times"></span></button>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-1 col-form-label font-weight-bold">Bio</label>
            <div class="col-sm-11">
              <input type="text" class="form-control form-control-sm square-input" v-model="brd.bio">
            </div>
          </div>
        </div>
      </div>
      <!--end branches -->
      <div class="col-md-12">
        <button class="btn btn-primary rounded-0 col-md-4" @click.prevent="saveBoard"
          :disabled="board.length < 1">{{ loading ? 'Submitting..': 'Submit' }}</button>
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
    BOARD_OF_DIR_GET,
    BOARD_OF_DIR_CREATE,
    BOARD_OF_DIR_UPDATE,
  } from "@/utils/routes.js"
  export default {
    name: "Board",
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
      this.getBoardOfDirectors()
    },
    data() {
      return {
        loading: false,
        pageLoader: false,
        counter: {
          board: 0
        },
        board: [],
        isUpdated: false,
      }
    },
    methods: {
      modifyAction(args) {
        //console.log(args); return;
        if (args != "add") {
          this.board = this.board.filter(e => e.id != args);
          this.counter.board = this.board.length
          return;
        }
        this.counter.board = this.board.length
        this.board.push({
          id: this.counter.board,
          name: '',
          position: '',
          bio: '',
        });
      },
      async getBoardOfDirectors() {
        this.pageLoader = true
        await this.$axios.get(BOARD_OF_DIR_GET(this.company_id))
          .then((res) => {
            //  console.log(res.data.dataInfo)
            //  return;
            this.pageLoader = false
            if (res.data.dataInfo == null) {
              this.isUpdated = false
              return;
            }

            this.isUpdated = true

            const data = res.data.dataInfo.directors
            const board = data.map((e, i) => {
              return {
                id: i++,
                name: e.name,
                position: e.position,
                bio: e.bio,
              }
            })

            this.board = board

          })
          .catch((err) => {
            console.log(err.response)
          })
      },
      saveBoard() {
        this.loading = true
        const board = JSON.parse(JSON.stringify(this.board)).map(e => {
          return {
            name: e.name,
            position: e.position,
            bio: e.bio,
          }
        });

        const payload = {
          directors: board
        }


        try {
          let resp;
          if (this.isUpdated) {
            resp = this.$axios.put(BOARD_OF_DIR_UPDATE(this.company_id), payload)
          } else {
            resp = this.$axios.post(BOARD_OF_DIR_CREATE(this.company_id), payload)
          }
          resp.then(res => {
            this.loading = false
            console.log(res.data);
            this.getBoardOfDirectors();
          })

          this.$notify(
            "Board of Directors Added",
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
