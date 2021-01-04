<template>
  <!-- Main Content -->
  <div class="hk-pg-wrapper vh-100">
    <!-- Breadcrumb -->
    <nav class="hk-breadcrumb" aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-light bg-transparent">
        <li class="breadcrumb-item"><a href="#">Orders</a></li>
        <li class="breadcrumb-item active" aria-current="page">All Orders</li>
        <li class="ml-auto">

        </li>
      </ol>
    </nav>
    <!-- /Breadcrumb -->

    <!-- Container -->
    <div class="container-fluid">

      <!-- Row -->
      <div class="row">
        <div class="col-xl-12">
          <section class="hk-sec-wrapper">
            <div class="row">
              <div class="col-md-3">
                <h5 class="hk-sec-title">All Orders</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <table class="table table-striped table-bordered table-responsive">
                  <thead>
                    <tr>
                      <th scope="col" class="text-uppercase font-weight-bold">S/N</th>
                      <th scope="col" class="text-uppercase font-weight-bold">Company Name</th>
                      <th scope="col" class="text-uppercase font-weight-bold">ReportCode</th>
                      <th scope="col" class="text-uppercase font-weight-bold">Report Type</th>
                      <th scope="col" class="text-uppercase font-weight-bold">Report Status</th>
                      <th scope="col" class="text-uppercase font-weight-bold">ReportUrgent</th>
                      <th scope="col" class="text-uppercase font-weight-bold">Remark</th>
                      <th scope="col" class="text-uppercase font-weight-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(order, i) in orders" :key="i">
                      <th scope="row">{{ i + 1}}</th>
                      <td>{{ order.companyName}}</td>
                      <td>{{ order.reportCode}}</td>
                      <td>{{ types[`${order.reportType}`-1]}}</td>
                      <td>{{ status[`${order.status}`-1]}}</td>
                      <td>{{ order.reportUrgent}}</td>
                      <td style="display: flex;flex-direction: column;">
                        <small v-for="(p, i) in parseRemark(order.remark)" :key="i">
                          <span class="font-weight-bold text-uppercase">{{ p.key }} :</span>
                          <span>{{ p.val }}</span>
                        </small>
                      </td>
                      <td>
                        <button class="btn btn-info" @click="openOrder(order)">Update <i
                            class="fa fa-pencil"></i></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
      <!-- /Row -->
    </div>
    <!-- /Container -->

    <div class="modal fade" id="openUpdate" data-backdrop="static" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">UPDATE ORDER <small
                class="text-primary font-weight-bold">{{ form.reportCode }}</small></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">

            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-row">
                <div class="form-group col-md-10">
                  <label for="">Company ID</label>
                  <input type="text" class="form-control" readonly v-model="form.companyId">
                </div>
              </div>

              <div class="form-row">

                <div class="form-group col-md-6">
                  <label for="inputStatus">Status</label>
                  <select id="inputStatus" class="form-control" v-model="form.status">
                    <option value="1">The report is done</option>
                    <option value="2">The report has been canceled</option>
                    <option value="3">The report has been updated</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputType">Type</label>
                  <select id="inputType" class="form-control" v-model="form.type">
                    <option value="1">Initial Report</option>
                    <option value="2">Question Report</option>
                    <option value="3">Monitoring Report</option>
                    <option value="4">UTL Report</option>
                  </select>
                </div>
              </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="modal=false">Close</button>
            <button type="button" class="btn btn-primary"
              @click.prevent="updateOrder">{{ loading ? 'Updating....' : 'Update Order' }}</button>
          </div>
        </div>
      </div>
    </div>



  </div>
  <!-- /Main Content -->
</template>

<script>
  import {
    ORDERS,
    ORDER_UPDATE
  } from "@/utils/routes";
  export default {
    data() {
      return {
        loading: false,
        modal: false,
        orders: "",
        form: {
          companyId: '',
          reportCode: '',
          status: '',
          type: ''
        },
        types: [
          'Initial Report',
          'Question Report',
          'Monitoring Report',
          'UTL Report'
        ],
        status:[
          'The report is done',
          'The report has been canceled',
          'The report has been updated'
        ]
      }
    },
    watch: {
      modal(v) {
        if (v) {
          $('#openUpdate').modal('show')
        } else {
          $('#openUpdate').modal('hide')
          this.form = {
            companyId: '',
            reportCode: '',
            status: '',
            type: ''
          }
        }
      }
    },
    methods: {
      async getOrders() {
        await this.$axios.get(ORDERS)
          .then((res) => {
            const response = res.data.dataInfo
            this.orders = response
            console.log(response)
          })
          .catch(err => {
            console.log(err)
          })
      },
      openOrder(order) {
        this.form.companyId = order.companyId
        this.form.reportCode = order.reportCode
        this.modal = true
        console.log(order)
      },
      updateOrder() {
        this.loading = true
        this.$axios.put(ORDER_UPDATE, this.form)
          .then((res) => {
            this.loading = false
            this.getOrders();
            this.$notify(
              "Order Updated",
              "top-right",
              "primary"
            );
            this.modal = false
          })
          .catch((err) => {
            this.loading = false
            console.log(err.response.data)
          })
      },
      parseRemark(obj) {
        const data = JSON.parse(obj)
        const arr = [];
        Object.keys(data).forEach(function (key) {
          arr.push({
            key: key.toUpperCase(),
            val: (data[key]).toUpperCase()
          })
          // arr.push(key.toUpperCase() +': '+ (data[key]).toUpperCase());
        });
        return arr
      }
    },
    mounted() {
      this.getOrders();

    }
  }

</script>

<style scoped>
  .remark-text {
    display: flex;
    flex-direction: column;
  }
</style>
