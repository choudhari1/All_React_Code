// let vowel = ['a','e','i','o','u']
// let char = 'ht'
// let isvowel = false
// for(var i = 0; i<vowel.length;i++){
//     if(char[i] === vowel[i]){
//         isvowel = true   
//     }
// }

// if(isvowel){
// //     console.log('given char is vowel')
// // }else{
// //     console.log("not a vaowel")
// // }

// let vowel = ['a','e','i','o','u']
// let string = 'xxxx'

// let count = 0
// for (var i = 0; i<string.length; i++){
//     var char = string[i].toLowerCase()
//     if(vowel.includes(char)===char){
//         console.log(char)
//         count++
//     }
// }

// console.log(count)

function consonants(str) {
    var countConsonants = 0;
  
    for (var i = 0; i < str.length; i++) {
  
      if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" &&
        str[i] !== "o" && str[i] !== "u") {
        countConsonants++;
        console.log(str[i])
      }
    }
    return (countConsonants);
  }
  console.log(consonants("pavann"));
