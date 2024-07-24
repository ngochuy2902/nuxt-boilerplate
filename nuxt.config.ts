export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',

  runtimeConfig: {
    public: {
      baseApiUrl: '',
    },
  },

  modules: ['@nuxt/eslint', "@nuxtjs/i18n", "vuetify-nuxt-module"],
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'single',
        commaDangle: 'always-multiline',
      },
    },
  },
  i18n: {
    locales: [
      { code: 'vi', file: 'vi.json', name: 'Tiếng Việt' },
      { code: 'en', file: 'en.json', name: 'English' }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'vi',
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts',
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
});
