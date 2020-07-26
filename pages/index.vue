<template>
  <!-- Main Content -->
  <div class="hk-pg-wrapper hk-auth-wrapper">
    <header class="d-flex justify-content-end align-items-center">
      <div class="btn-group btn-group-sm d-none">
        <a href="#" class="btn btn-outline-secondary">Help</a>
        <a href="#" class="btn btn-outline-secondary">About Us</a>
      </div>
    </header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12 pa-0">
          <div class="auth-form-wrap pt-xl-0 pt-70">
            <div class="auth-form w-xl-30 w-lg-55 w-sm-75 w-100">
              <nuxt-link class="auth-brand text-center d-block mb-20" to="/app">Fagbadex</nuxt-link>
              <form>
                <h1 class="display-4 text-center mb-10">Welcome Back :)</h1>
                <p class="text-center mb-30">Sign in and access fagbadex reports dashboard.</p>
                <div
                  class="alert alert-danger"
                  v-if="loginError"
                >Error Logging In, Please Check your credentials</div>
                <div class="form-group">
                  <input
                    class="form-control"
                    v-model="emailAddress"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      class="form-control"
                      v-model="passwordText"
                      placeholder="Password"
                      type="password"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <span class="feather-icon">
                          <i data-feather="eye-off"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="custom-control custom-checkbox mb-25">
                  <input class="custom-control-input" id="same-address" type="checkbox" checked />
                  <label class="custom-control-label font-14" for="same-address">Keep me logged in</label>
                </div>
                <button class="btn btn-primary btn-block" @click.prevent="loginUser">Login</button>
                <p class="font-14 text-center mt-15">Having trouble logging in?</p>
                <div class="option-sep">-</div>
                <p class="text-center">Contact the admin</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Main Content -->
</template>

<script>
export default {
  layout: "guest",
  data() {
    return {
      emailAddress: "",
      passwordText: "",
      loginError: false,
    };
  },
  methods: {
    async loginUser() {
      let emailAddress = this.emailAddress.toLowerCase();
      let passwordText = this.passwordText.toLowerCase();

      const { name, email, password } = await this.$store.getters[
        "getDefaultUser"
      ];

      if (emailAddress == email && passwordText == password) {
        await this.$store.dispatch("login", {
          name,
          email,
          password,
        });
        this.$router.push("/app");
      } else {
        this.loginError = true;
        setTimeout(() => (this.loginError = false), 2000);
        return;
      }
    },
  },
};
</script>

<style>
</style>
