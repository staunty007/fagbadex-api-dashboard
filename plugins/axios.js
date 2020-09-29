export default function ({ $axios, store }) {
    //const cred = { user: 'admin@fagbadexnigeriaapi.com', secret: 'fagbadexnigeriaapi'};
    $axios.onRequest(config => {
      // config.headers.common['authuser'] = cred.user
      // config.headers.common['authsecret'] = cred.secret
      config.headers.common['authuser'] = store.state.dfu.email
      config.headers.common['authsecret'] = store.state.dfu.password
    })
  }