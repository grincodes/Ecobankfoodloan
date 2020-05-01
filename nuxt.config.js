
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
 css: [{ src: '~/assets/main.scss', lang: 'scss' },{src:'~/assets/spacing.css'}],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    '@nuxtjs/apollo',
  ],
  /*
  ** Nuxt.js modules
  */

 apollo:{
  clientConfigs:{
    default:{
      
      httpEndpoint: "http://localhost:3000/graphql",
      // httpEndpoint: "http://fudapserver.herokuapp.com/graphql",
      // wss:"wss://http://fudapserver.herokuapp.com/"
      wss:"wss:/localhost:3000/graphql"
    }
  }
},

  modules: [
      '@nuxtjs/style-resources',
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { css: true, materialDesignIcons: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  styleResources:{
    scss:['~/assets/main.scss']
  },
  /*
  ** Build configuration
  */

 auth: {
    
  // redirect: {
  //   callback: '/callback',
  // },
  plugins:['~plugins/auth.js', { src: '~/plugins/axios', ssr: true }],
  strategies: {
    local: {
      endpoints: {
        login: { url: '/api/login', method: 'post', propertyName: 'token.accessToken' },
        // logout: { url: '/api/auth/logout', method: 'post' },
        logout: false,
        user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
      },
      // tokenRequired: true,
      // tokenType: 'bearer'
      // autoFetchUser: true
    },

    localRefresh: {
      _scheme: 'refresh',
      token: {
        property: 'token.accessToken',
        maxAge: 15
      },
      refreshToken: {
        property: 'token.refreshToken',
        data: 'refreshToken',
        maxAge: false
      },
      clientId: {
        property: 'token.clientId',
        data: 'clientId'
      },
      grantType: {
        data: 'grantType'
      },
      autoRefresh: true
    },
   
     
   
    auth0: {
      domain: 'fudap-domain.auth0.com',
      clientId: 'zh0DNVcWSbk6ht0EWzyIrKi6aB5zu92N'
    },
    facebook: {
      endpoints: {
        userInfo: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday'
      },
      clientId: '665428297556938',
      scope: ['public_profile', 'email', 'user_birthday']
    },
    google: {
      client_id: '53902685266-v7le2o3aaunk9f4sngf39ubk7v24gp3t.apps.googleusercontent.com',
      user:false,
      // redirect_uri:'/createProfile'
    },

  }
},


  build: {
    loaders:{
      sass:{
        prependData:"@import '~bulma/sass/utilities/_all.sass;"
      }
    },
    extend (config, ctx) {
    },
    postcss: {
      
      preset: {
        features: {
          customProperties: false
        }
      }
    },
   
  }
}
