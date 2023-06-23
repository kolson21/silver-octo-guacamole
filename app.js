
const os = require('node:os');

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

// console.log('Total Memory: ' + totalMemory)

// Template string
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)