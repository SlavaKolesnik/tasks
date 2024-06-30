const fs = require('fs')
const path = require('path')
const pug = require('pug')

const pugFilePath = 'index.pug'
const outputHtmlFilePath = path.join(__dirname, 'Compiled-HTML', 'index.html')

try {
    let html = pug.renderFile(pugFilePath)
    fs.writeFileSync(outputHtmlFilePath, html)
    console.log(`Successfully compiled ${pugFilePath} to ${outputHtmlFilePath}`)
} catch (err) {
    console.error(`Error compiling ${pugFilePath}:`, err)
}
