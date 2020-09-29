<template>
  <div>
    <div class="hk-wrapper hk-vertical-nav">
      <Header />
      <Sidebar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    Header,
    Sidebar,
  },
  middleware: "auth",
  methods: {
    initToast() {
    },
  },
  mounted() {
    //this.initToast()
  },
};
</script>

