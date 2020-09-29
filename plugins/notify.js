export default (context, inject) => {
    const notify = (msg, position, color) =>  $.toast({
        heading: "Fagbadex!",
        text: `<p>${msg}.</p>`,
        position: `${position}`,
        loaderBg: "#ab26aa",
        class: `jq-toast-${color}`,
        hideAfter: 3500,
        stack: 6,
        showHideTransition: "fade",
      });
    // Inject $hello(msg) in Vue, context and store.
    inject('notify', notify)
    // For Nuxt <= 2.12, also add 👇
    context.$notify = notify
  }