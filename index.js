// import {a,b} from './number.mjs'

// a("pavan",b)

const data = require('./data.json');

console.log(data)

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("order-pizza",(size,flavour)=>{
    console.log("your pizza of size" ,size,"with flovour",flavour,"is being prepared ")
})

emitter.emit("order-pizza","large","corn")

