export default function ({ $axios, store }) {
    $axios.onRequest(config => {
      config.headers.common['authuser'] = store.state.dfu.email
      config.headers.common['authsecret'] = store.state.dfu.password
    })
  }