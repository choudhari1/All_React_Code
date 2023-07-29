const EventEmitter = require('events');

class PizzaShop extends EventEmitter {
    constructor(no){
        super();
        this.orderno = no
    }

    order(size,topping){
        this.orderno++;
        this.emit("order", size,topping);
    }

    display(){
        console.log('orderno',this.orderno)
    }
}

module.exports  = PizzaShop;