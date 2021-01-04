<template>
  <div v-if="company_id">
    <div class="row mb-1">
      <div class="col-md-5">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item ">
              <a class="nav-link rounded-0 text-uppercase" id="pills-home-tab" data-toggle="pill" href="#"
                :class="{ active: section.one }" @click.prevent="displayView('one')">Tab 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link rounded-0 text-uppercase" id="pills-profile-tab" data-toggle="pill" href="#"
                :class="{ active: section.two }" @click.prevent="displayView('two')">Tab 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link rounded-0 text-uppercase" id="pills-contact-tab" data-toggle="pill" href="#"
                :class="{ active: section.three }" @click.prevent="displayView('three')">Tab 3</a>
            </li>
          </ul>
      </div>
      <div class="col-md-2 offset-md-5">
        <button class="btn btn-info btn-sm btn-block rounded-0 ml-auto" @click.prevent="getCompanyProfile">
          Refresh <i class="fa fa-spinner"></i>
        </button>
      </div>
    </div>
    <form>
      <div v-if="!pageLoader">
        <div class="row" v-if="section.one">
          <div class="col-md-12">
            <hr>
            <div class="">
              <p class="text-uppercase text-dark font-weight-bold">Background</p>
              <div class="form-group">
                <textarea name="" class="form-control" id="" cols="30" rows="5" v-model="form.background"></textarea>
              </div>
            </div>
          </div>
          <!--branches -->
          <div class="col-md-12">
            <hr>
            <div class="d-flex justify-content-between">
              <p class="text-uppercase text-dark font-weight-bold">Branches</p>
              <button type="button" class="btn btn-primary btn-sm rounded-0" @click.prevent="modifyAction('add', 'branches')">Add
                Branch</button>
            </div>
            <hr>
            <div class="form-group row" v-for="(branch, i) in form.branches" :key="i">
              <label for="inputText" class="col-sm-2 col-form-label">Branch</label>
              <div class="col-sm-9">
                <input type="text" class="form-control form-control-sm square-input input-branch" v-model="branch.value"
                  :id="branch.id">
              </div>
              <button class="btn btn-danger btn-sm rounded-0" @click.prevent="modifyAction(branch.id, 'branches')"><i
                  class="fa fa-times"></i></button>
            </div>
          </div>
          <!--end branches -->

          <!--subsidiaries -->
          <div class="col-md-12">
            <hr>
            <div class="d-flex justify-content-between">
              <p class="text-uppercase text-dark font-weight-bold">Subsidiaries</p>
              <button type="button" class="btn btn-primary btn-sm rounded-0"
                @click.prevent="modifyAction('add', 'subsidiaries')">Add
                Subsidiaries</button>
            </div>
            <hr>
            <div class="form-group row" v-for="(subs, i) in form.subsidiaries" :key="i">
              <label for="inputText" class="col-sm-2 col-form-label">Subs.</label>
              <div class="col-sm-9">
                <input type="text" class="form-control form-control-sm square-input input-subs" v-model="subs.value"
                  :id="subs.id">
              </div>
              <button class="btn btn-danger btn-sm rounded-0" @click.prevent="modifyAction(subs.id, 'subsidiaries')"><i
                  class="fa fa-times"></i></button>
            </div>
          </div>

          <!--end subsidiaries -->

          <!--partners -->
          <div class="col-md-12">
            <hr>
            <div class="d-flex justify-content-between">
              <p class="text-uppercase text-dark font-weight-bold">Partners</p>
              <button type="button" class="btn btn-primary btn-sm rounded-0" @click.prevent="modifyAction('add', 'partners')">Add
                Partners</button>
            </div>
            <hr>
            <div class="form-group row" v-for="(partner, i) in form.partners" :key="i">
              <label for="inputText" class="col-sm-2 col-form-label">Partner.</label>
              <div class="col-sm-9">
                <input type="text" class="form-control form-control-sm square-input input-partner" v-model="partner.value"
                  :id="partner.id">
              </div>
              <button class="btn btn-danger btn-sm rounded-0" @click.prevent="modifyAction(partner.id, 'partners')"><i
                  class="fa fa-times"></i></button>
            </div>
          </div>

          <!--end partners -->

          <!--mergers -->
          <div class="col-md-12">
            <hr>
            <div class="d-flex justify-content-between">
              <p class="text-uppercase text-dark font-weight-bold">Mergers</p>
              <button type="button" class="btn btn-primary btn-sm rounded-0" @click.prevent="modifyAction('add', 'mergers')">Add
                Merger.</button>
            </div>
            <hr>
            <div class="form-group row" v-for="(merger, i) in form.mergers" :key="i">
              <label for="inputText" class="col-sm-2 col-form-label">Merger.</label>
              <div class="col-sm-9">
                <input type="text" class="form-control form-control-sm square-input input-merger" v-model="merger.value"
                  :id="merger.id">
              </div>
              <button class="btn btn-danger btn-sm rounded-0" @click.prevent="modifyAction(merger.id, 'mergers')"><i
                  class="fa fa-times"></i></button>
            </div>
          </div>

          <!--end mergers -->

        </div>
        <div class="row" v-if="section.two">

          <!--focus -->
          <div class="col-md-12">
            <hr>
            <div class="d-flex justify-content-between">
              <p class="text-uppercase text-dark font-weight-bold">Business Focus</p>
              <button type="button" class="btn btn-primary btn-sm rounded-0"
                @click.prevent="modifyAction('add', 'businessFocus')">Add
                Business Focus.</button>
            </div>
            <hr>
            <div class="form-group row" v-for="(focus, i) in form.businessFocus" :key="i">
              <label for="inputText" class="col-sm-2 col-form-label">Focus.</label>
              <div class="col-sm-9">
                <input type="text" class="form-control form-control-sm square-input input-focus" v-model="focus.value"
                  :id="focus.id">
              </div>
              <button class="btn btn-danger btn-sm rounded-0" @click.prevent="modifyAction(focus.id, 'businessFocus')"><i
                  class="fa fa-times"></i></button>
            </div>
          </div>

          <!--end focus -->

          <!--startegy -->
          <div class="col-md-12">
            <hr>
            <div class="d-flex justify-content-between">
              <p class="text-uppercase text-dark font-weight-bold">Strategy Business Unit</p>
              <button type="button" class="btn btn-primary btn-sm rounded-0"
                @click.prevent="modifyAction('add', 'strategyBusinessUnits')">Add Strategy.</button>
            </div>
            <hr>
            <div class="form-group row" v-for="(strategy, i) in form.strategyBusinessUnits" :key="i">
              <label for="inputText" class="col-sm-2 col-form-label">Strategy.</label>
              <div class="col-sm-9">
                <input type="text" class="form-control form-control-sm square-input input-strategy"
                  v-model="strategy.value" :id="strategy.id">
              </div>
              <button class="btn btn-danger btn-sm rounded-0"
                @click.prevent="modifyAction(strategy.id, 'strategyBusinessUnits')"><i class="fa fa-times"></i></button>
            </div>
          </div>

          <!--end strategry -->

          <!--vision -->
          <div class="col-md-12">
            <hr>
            <div class="d-flex justify-content-between">
              <p class="text-uppercase text-dark font-weight-bold">Vision</p>
              <button type="button" class="btn btn-primary btn-sm rounded-0" @click.prevent="modifyAction('add', 'vision')">Add
                Vision.</button>
            </div>
            <hr>
            <div class="form-group row" v-for="(v, i) in form.vision" :key="i">
              <label for="inputText" class="col-sm-2 col-form-label">Vision.</label>
              <div class="col-sm-9">
                <input type="text" class="form-control form-control-sm square-input input-v" v-model="v.value" :id="v.id">
              </div>
              <button class="btn btn-danger btn-sm rounded-0" @click.prevent="modifyAction(v.id, 'vision')"><i
                  class="fa fa-times"></i></button>
            </div>
          </div>

          <!--end vision -->

          <!--mission -->
          <div class="col-md-12">
            <hr>
            <div class="d-flex justify-content-between">
              <p class="text-uppercase text-dark font-weight-bold">Mission</p>
              <button type="button" class="btn btn-primary btn-sm rounded-0" @click.prevent="modifyAction('add', 'mission')">Add
                Mission.</button>
            </div>
            <hr>
            <div class="form-group row" v-for="(m, i) in form.mission" :key="i">
              <label for="inputText" class="col-sm-2 col-form-label">mission.</label>
              <div class="col-sm-9">
                <input type="text" class="form-control form-control-sm square-input input-m" v-model="m.value" :id="m.id">
              </div>
              <button class="btn btn-danger btn-sm rounded-0" @click.prevent="modifyAction(m.id, 'mission')"><i
                  class="fa fa-times"></i></button>
            </div>
          </div>

          <!--end mission -->
        </div>
        <div class="row" v-if="section.three">

          <!--core -->
          <div class="col-md-12">
            <hr>
            <div class="d-flex justify-content-between">
              <p class="text-uppercase text-dark font-weight-bold">Core Values</p>
              <button type="button" class="btn btn-primary btn-sm rounded-0" @click.prevent="modifyAction('add', 'coreValues')">Add
                Core Values.</button>
            </div>
            <hr>
            <div class="form-group row" v-for="(val, i) in form.coreValues" :key="i">
              <label for="inputText" class="col-sm-2 col-form-label">Value.</label>
              <div class="col-sm-9">
                <input type="text" class="form-control form-control-sm square-input input-val" v-model="val.value"
                  :id="val.id">
              </div>
              <button class="btn btn-danger btn-sm rounded-0" @click.prevent="modifyAction(val.id, 'coreValues')"><i
                  class="fa fa-times"></i></button>
            </div>
          </div>

          <!--end core -->
          <!--customer -->
          <div class="col-md-12">
            <hr>
            <div class="d-flex justify-content-between">
              <p class="text-uppercase text-dark font-weight-bold">Customer Types</p>
              <button type="button" class="btn btn-primary btn-sm rounded-0"
                @click.prevent="modifyAction('add', 'customerTypes')">Add Customer Type.</button>
            </div>
            <hr>
            <div class="form-group row" v-for="(types, i) in form.customerTypes" :key="i">
              <label for="inputText" class="col-sm-2 col-form-label">Types.</label>
              <div class="col-sm-9">
                <input type="text" class="form-control form-control-sm square-input input-types" v-model="types.value"
                  :id="types.id">
              </div>
              <button class="btn btn-danger btn-sm rounded-0" @click.prevent="modifyAction(types.id, 'customerTypes')"><i
                  class="fa fa-times"></i></button>
            </div>
          </div>

          <!--end customer -->
          <!--perform -->
          <div class="col-md-12">
            <hr>
            <div class="d-flex justify-content-between">
              <p class="text-uppercase text-dark font-weight-bold">Performance Ranking</p>
              <button type="button" class="btn btn-primary btn-sm rounded-0"
                @click.prevent="modifyAction('add', 'performanceRanking')">Add Performance.</button>
            </div>
            <hr>
            <div class="form-group row" v-for="(perform, i) in form.performanceRanking" :key="i">
              <label for="inputText" class="col-sm-2 col-form-label">Peformance.</label>
              <div class="col-sm-9">
                <input type="text" class="form-control form-control-sm square-input input-perform" v-model="perform.value"
                  :id="perform.id">
              </div>
              <button class="btn btn-danger btn-sm rounded-0"
                @click.prevent="modifyAction(perform.id, 'performanceRanking')"><i class="fa fa-times"></i></button>
            </div>
          </div>

          <!--end perform -->
          <!--perform -->
          <div class="col-md-12">
            <hr>
            <div class="d-flex justify-content-between">
              <p class="text-uppercase text-dark font-weight-bold">Physical Visit</p>
              <button type="button" class="btn btn-primary btn-sm rounded-0"
                @click.prevent="modifyAction('add', 'physicalVisit')">Add Visit.</button>
            </div>
            <hr>
            <div class="form-group row" v-for="(visit, i) in form.physicalVisit" :key="i">
              <label for="inputText" class="col-sm-2 col-form-label">Visit.</label>
              <div class="col-sm-9">
                <input type="text" class="form-control form-control-sm square-input input-visit" v-model="visit.value"
                  :id="visit.id">
              </div>
              <button class="btn btn-danger btn-sm rounded-0" @click.prevent="modifyAction(visit.id, 'physicalVisit')"><i
                  class="fa fa-times"></i></button>
            </div>
          </div>

          <!--end perform -->


          <div class="col-md-3">
            <button class="btn btn-primary btn-block rounded-0 text-uppercase"
              @click.prevent="saveCompanyProfile">{{ loading ? 'Submitting...' : 'Submit' }}</button>
          </div>
        </div>
      </div>
      <div v-if="pageLoader"> 
        <span class="d-flex justify-content-center pt-5">
          <i class="fa fa-spinner fa-spin fa-5x text-primary"></i>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
  import {
    COMPANY_PROFILE,
    COMPANY_PROFILE_UPDATE,
    GET_COMPANY_PROFILE
  } from "@/utils/routes.js"
  export default {
    name: "Profile",
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
    data() {
      return {
        loading: false,
        updateProfile: false,
        pageLoader: false,
        section: {
          one: true,
          two: false,
          three: false,
        },
        counter: {
          branches: 0,
          subsidiaries: 0,
          partners: 0,
          mergers: 0,
          businessFocus: 0,
          strategyBusinessUnits: 0,
          vision: 0,
          mission: 0,
          coreValues: 0,
          customerTypes: 0,
          performanceRanking: 0,
          physicalVisit: 0
        },
        form: {
          branches: [],
          subsidiaries: [],
          partners: [],
          mergers: [],
          businessFocus: [],
          strategyBusinessUnits: [],
          vision: [],
          mission: [],
          coreValues: [],
          customerTypes: [],
          performanceRanking: [],
          physicalVisit: [],
          background: ""
        }
      }
    },
    created() {
      if (this.company_id != "") {
        this.getCompanyProfile()
      }
    },
    methods: {
      modifyAction(args, dataName) {
        console.log(args, dataName);
        if (args != "add") {
          this.form[dataName] = this.form[dataName].filter(e => e.id != args);
          this.counter[dataName] = this.form[dataName].length
          return;
        }
        this.counter[dataName] = this.counter[dataName] + 1
        this.form[dataName].push({
          id: `${dataName+this.counter[dataName]}`,
          value: '',
        });
      },
      displayView(view) {
        const viewData = this.section
        const newSection = Object.keys(viewData).forEach(function (key) {
          viewData[key] = false
        });
        this.section[view] = true
      },
      async getCompanyProfile() {
        this.pageLoader = true
        await this.$axios.get(GET_COMPANY_PROFILE(this.company_id))
          .then((res) => {
           // console.log(res.data)

            this.pageLoader = false

            if (res.data.length < 1) {
              this.updateProfile = false
              return;
            }

            this.updateProfile = true
            const profile = {};
            //console.log(data[0])
            const newData = res.data[0];

            // console.log(newData)
             const background = JSON.parse(JSON.stringify(newData.background));

              delete(newData.background)
              delete(newData._id)
              delete(newData.companyId)
              delete(newData.__v)


            for (var key in newData) {
              profile[key] = newData[key].length < 1 ? [] : (newData[key]).map((e, i) => {
                return {
                  id: i++,
                  value: e
                }
              })
            }
            
            profile.background = background
            this.form = profile

          })
          .catch((err) => {
            console.log(err)
          })
      },
       saveCompanyProfile() {
        //console.log(this.company_id);return;
        const payload = {
          branches: this.form.branches.length > 0 ? this.form.branches.map(e => e.value) : [],
          subsidiaries: this.form.subsidiaries.length > 0 ? this.form.subsidiaries.map(e => e.value) : [],
          partners: this.form.partners.length > 0 ? this.form.partners.map(e => e.value) : [],
          mergers: this.form.mergers.length > 0 ? this.form.mergers.map(e => e.value) : [],
          businessFocus: this.form.businessFocus.length > 0 ? this.form.businessFocus.map(e => e.value) : [],
          vision: this.form.vision.length > 0 ? this.form.vision.map(e => e.value) : [],
          mission: this.form.mission.length > 0 ? this.form.mission.map(e => e.value) : [],
          coreValues: this.form.coreValues.length > 0 ? this.form.coreValues.map(e => e.value) : [],
          customerTypes: this.form.customerTypes.length > 0 ? this.form.customerTypes.map(e => e.value) : [],
          performanceRanking: this.form.performanceRanking.length > 0 ? this.form.performanceRanking.map(e => e
            .value) : [],
          physicalVisit: this.form.physicalVisit.length > 0 ? this.form.physicalVisit.map(e => e.value) : [],
          background: this.form.background
        }
        // console.log(payload); return;
        this.loading = true
        try {
          let resp;
          if (this.updateProfile) {
            resp =  this.$axios.put(COMPANY_PROFILE_UPDATE(this.company_id), payload)
          } else {
            resp =  this.$axios.post(COMPANY_PROFILE(this.company_id), payload)
          }
          resp.then(res => {
            this.loading = false
            console.log(res.data);
          })
          this.$notify(
            "Company Profile Added",
            "top-right",
            "primary"
          );
          this.getCompanyProfile();

        } catch (err) {
          this.loading = false
          console.log(err.response)
        }

      },

    }
  }

</script>

<style>

</style>
