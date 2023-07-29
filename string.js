var data = "labal";
var strin1= ''
var strin2 = ''
//const data1 = ()=>{
for (var i = data.length-1 ;i >= 0 ; i--){
       strin1 = strin1 + data[i]
}

    
//}
//onst data2 = () =>{ 
for (var i = 0 ; i < data.length ; i++){
    strin2 = strin2 + data[i]
}


console.log(strin1)
console.log(strin2)


if(strin1 === strin2){
    console.log("it is palindrome")
}
else{
    console.log("it is not palindrome")
}
// for(var i = 0 ; i<strin1.length ;i++ ){
//     for(var j= 0 ;j<strin2.length; j++){
//         if(strin1[i] === strin2[j]){
//             console.log("it is palindrome")
//         }
//         else{
//             console.log("it is not palindrome")
//         }
//     }
// }

