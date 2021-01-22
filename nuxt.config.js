const webpack = require("webpack");

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Narendra Ram | Freelance Full Stack Designer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Official website of Narendra Ram | UX UI Designer | Frontend Developer | Freelancer' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo.png' }
    ],
    script: [
    ],
  },
  router: {
    base: '/'
  },
  // Enable this for production build
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    { src: "~/assets/style.scss" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/node_modules/jquery/dist/jquery.min.js", ssr: false },
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.min.js", ssr: false },
    { src: "~/node_modules/holderjs/holder.min.js", ssr: false },
    { src: "~/plugins/client-only.client.js", ssr: false },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    vendor: ['jquery'],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })]
  },
}