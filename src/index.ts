// ./src/index.ts

// import types from lib files
import type { GenerateVvAnchorVueOptions } from './generators/vv-anchor-vue.js'

// export types from lib files
export type { GenerateVvAnchorVueOptions }

// export imported lib methods as renamed defaults
export { default as generateVvAnchorVue } from './generators/vv-anchor-vue.js'
