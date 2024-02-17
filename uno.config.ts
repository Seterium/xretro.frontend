import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [],

  presets: [
    presetUno({
      prefix: 'uno-',
      variablePrefix: 'uno-',
    }),
    presetIcons({
      scale: 1,
    }),
  ],
})
