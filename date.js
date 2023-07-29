// const https = require('node:https')

// const server =  https.createServer((req,res)=>{
//     res.writeHead(200,{"content-tyoe":"plain/text"})
//     res.end("hello http")
// })

// server.listen(4000)
// https.

var x=10

function call(){
    if(false){
        var x = 7
    }
    console.log('inside fn',x)
}
console.log('outside fn',x)
call()