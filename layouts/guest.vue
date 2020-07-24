<template>
  <div class="hk-wrapper">
      <nuxt />
  </div>
</template>

<script>
  export default {
    methods: {
      initToast() {
        $.toast({
          heading: 'Well done!',
          text: '<p>You have successfully completed level 1.</p><button class="btn btn-primary btn-sm mt-10">Play again</button>',
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
     // this.initToast()
    }
  }

</script>
