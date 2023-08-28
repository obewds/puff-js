// ./src/index.ts

// import types from lib files
import type { GenerateVvAnchorVue } from './generators/vv-anchor-vue.js'

// export types from lib files
export type { GenerateVvAnchorVue }

// export imported lib methods as renamed defaults
export { default as generateVvAnchorVue } from './generators/vv-anchor-vue.js'
