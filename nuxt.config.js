export default {
	mode: 'spa',
	/*
  ** Headers of the page
  */
	head: {
		title: 'Fagbadex | Dashboard  ',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: '/main/vendors4/vectormap/jquery-jvectormap-2.0.3.css'
			},
			{
				rel: 'stylesheet',
				href: '/main/vendors4/jquery-toggles/css/toggles.css'
			},
			{
				rel: 'stylesheet',
				href: '/main/vendors4/jquery-toggles/css/themes/toggles-light.css'
			},
			{
				rel: 'stylesheet',
				href: '/main/vendors4/jquery-toast-plugin/main/jquery.toast.min.css'
			},
			{
				rel: 'stylesheet',
				href: '/main/vendors4/daterangepicker/daterangepicker.css'
			},
			{
				rel: 'stylesheet',
				href: '/main/css/style.css'
			}
		],
		script: [
			{
				src: '/main/vendors4/jquery/main/jquery.min.js'
			},
			{
				src: '/main/vendors4/bootstrap/main/js/bootstrap.min.js'
			},
			{
				src: '/main/vendors4/popper.js/main/umd/popper.min.js'
			},
			{
				src: '/main/js/jquery.slimscroll.js'
			},
			{
				src: '/main/js/dropdown-bootstrap-extended.js'
			},
			{
				src: 'https://unpkg.com/feather-icons'
			},
			{
				src: 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js'
			},
			{
				src: '/main/vendors4/jquery-toggles/toggles.min.js'
			},
			{
				src: '/main/js/toggle-data.js'
			},
			{
				src: '/main/vendors4/raphael/raphael.min.js'
			},
			{
				src: '/main/vendors4/morris.js/morris.min.js'
			},
			{
				src: '/main/vendors4/echarts/main/echarts-en.min.js'
			},
			{
				src: '/main/vendors4/jquery.sparkline/main/jquery.sparkline.min.js'
			},
			{
				src: '/main/vendors4/jquery-toast-plugin/main/jquery.toast.min.js'
			},
			{
				src: '/main/vendors4/moment/min/moment.min.js'
			},
			{
				src: '/main/vendors4/daterangepicker/daterangepicker.js'
			},
			{
				src: '/main/js/daterangepicker-data.js'
			},
			{
				src: '/main/js/init.js'
			},
			{
				src: '/main/js/dashboard-data.js'
			}
		]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },
	/*
  ** Global CSS
  */
	css: [],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [
		'~/plugins/axios',
		{ src: '~/plugins/vue-good-table', ssr: false },
		{ src: '~/plugins/persisted.js', ssr: false },
		{ src: '~/plugins/notify.js', ssr: false },
	],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [],
	/*
  ** Nuxt.js modules
  */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv'
	],
	/*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
	axios: {
		baseURL: 'https://fagbadexapi.com'
		//baseURL: 'https://ba4dd4823e77.ngrok.io'
	},
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	}
};
