/**
 * {@link https://nuxt.com/docs/api/nuxt-config}
 */
export default defineNuxtConfig({
  css: [],

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: 'any' },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-32х32.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-16x16.png',
          sizes: '16x16',
        },
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content: 'XRetro',
        },
      ],
    },
  },

  ssr: false,

  devServer: {
    port: 4000,
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  devtools: {
    enabled: true,
  },

  features: {
    inlineStyles: false,
  },
})
