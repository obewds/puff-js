// ./build/makeEntryPoints.mjs

import fs from 'fs-extra'


// make an index.cjs file

const content = `// ./dist/index.cjs

require = require('esm')(module)
module.exports = require('./index.js')
`

fs.outputFileSync(process.env.INIT_CWD + '/dist/index.cjs', content, { flag: 'w+' })


// make an index.mjs file

var tsIndexFile = fs.readFileSync(process.env.INIT_CWD + '/dist/index.js', 'utf8')

fs.outputFileSync(process.env.INIT_CWD + '/dist/index.mjs', tsIndexFile, { flag: 'w+' })