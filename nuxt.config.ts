// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  imports: {
    dirs: ['stores'],
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    'nuxt-svgo',
    'nuxt-typed-router',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],
  css: ['~/assets/styles/main.css'],
  svgo: {
    global: false,
    autoImportPath: './assets/svg/',
    defaultImport: 'component',
  },
  i18n: {
    // TODO update to production domain
    // baseUrl: 'https://my-nuxt-app.com'
    locales: [
      {
        code: 'pl',
        file: 'pl.yml',
        iso: 'pl',
      },
      {
        code: 'en',
        file: 'en.yml',
        iso: 'en-US',
      },
    ],
    defaultLocale: 'pl',
    lazy: true,
    langDir: 'locale/',
  },
  components: [
    {
      path: '~/components',
      // import components as it is, do not include folder name
      // https://nuxt.com/docs/guide/directory-structure/components
      pathPrefix: false,
    },
  ],
  extends: [
    // https://github.com/harlan-zw/nuxt-seo-kit
    'nuxt-seo-kit',
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      siteName: 'Kamil Beda resume',
      // TODO proper description
      siteDescription: 'This is my online resume',
      language: 'pl-PL', // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  linkChecker: {
    failOn404: true,
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Lexend: [400, 500, 600, 700],
    },
  },
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
})
