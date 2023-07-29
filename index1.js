const pizza =  require("./pizza");
const drink = require('./drinks')
const pizaaemitter = new pizza(0);
const drinker = new drink()
pizaaemitter.on("order",(size,topping)=>{
    console.log("preparibg",size,topping)
    drinker.compdrink(size)
})

pizaaemitter.order("large","corn")
pizaaemitter.display()