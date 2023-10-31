// ./scripts/generateCliMjsVersions.mjs

import fs from 'fs-extra'
import chalk from 'chalk'

// TODO: this needs to dynamically read the dir's and then generate this files array... because it's too easy to forget to add new configs/palettes to this array manually!

const files = [
    'index',
    'generators/vv-anchor-vue',
    'helpers/cwd',
]

function processFileForMjsUseSync(filePath) {

    let srcFile = './dist/' + filePath + '.js'
    let destFile = './dist/' + filePath + '.mjs'
    
    var fileData = fs.readFileSync(srcFile, 'utf-8')

    var updatedData = fileData.replace(/\.js';/gm, ".mjs';")

    fs.writeFileSync(destFile, updatedData, 'utf-8')

    console.log(chalk.green.bold(chalk.white('*\\o/*') + ' The Puff.js CLI ' + destFile + ' file created! ' + chalk.white('*\\o/*')))

}

for (let i=0; i < files.length; i++) {
    
    processFileForMjsUseSync(files[i])

}

console.log(' ')
