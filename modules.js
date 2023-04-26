const xyz=require('./people')
const {people} =require('./people')

console.log("Test1",xyz)
console.log("Test2",people)

const os=require('os')

console.log(os.platform(),os.homedir())