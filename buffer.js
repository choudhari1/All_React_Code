//const { buffer } = require("stream/consumers");

const buffer = new Buffer.from("pavan","utf-8");

console.log(buffer.toJSON())

buffer.write("coding")
console.log(buffer.toString())