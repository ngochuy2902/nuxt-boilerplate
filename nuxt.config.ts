export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',

  runtimeConfig: {
    public: {
      baseApiUrl: '',
    },
  },

  modules: ['@nuxt/eslint', "@nuxtjs/i18n"],
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
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
  }
});
