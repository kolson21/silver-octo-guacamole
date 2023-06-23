// Always use asynchronous methods
const fs = require('node:fs')

const files = fs.readdirSync('./')
console.log(files)

fs.readdir('$', function(err, files) {
    if (err) console.log('Error', err)
    else console.log('Result', files)
})