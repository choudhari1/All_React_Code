const { captureRejectionSymbol } = require("events");
const fs = require("fs");

// const content = fs.readFileSync("./file.txt","utf-8")

// console.log(content)
//let fileData; 
console.log("1st")

 fs.readFile("./file.txt","utf-8",(err,data)=>{
    if(err){
        console.log('pathis not coorect',err);
        return;
     }
      console.log(data)    
})

for(var i  = 0 ;i<100000;i++){
    console.log(i)
}

// function processData(content){
//     console.log(content)
// }

// const readAbleStream = fs.createReadStream("./file.txt",{
//     encoding:"utf-8",
//     highWaterMark:2
// });

// const writeAbleStream = fs.createWriteStream("./f2.txt");

// // readAbleStream.on("data",(chunk)=>{
// // console.log(chunk);
// // writeAbleStream.write(chunk)
// // })

// readAbleStream.pipe(writeAbleStream)