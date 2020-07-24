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
  import Header from '@/components/Header'
  import Sidebar from '@/components/Sidebar'
  export default {
    components: {
      Header,
      Sidebar
    },
    methods: {
      initToast() {
        $.toast({
          heading: 'Welcome!',
          text: '<p>You have successfully Logged In.</p>',
          position: 'top-right',
          loaderBg: '#ab26aa',
          class: 'jq-toast-primary',
          hideAfter: 3500,
          stack: 6,
          showHideTransition: 'fade'
        });
      }
    },
    mounted() {
      //this.initToast()
    }
  }

</script>
