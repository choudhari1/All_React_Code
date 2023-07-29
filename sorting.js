let number = [1,2,4,5,7,3]

let temp

for (var i = 0;i<number.length;i++){
    for (var j=0;j<number.length;j++){
        if(number[j]>number[j+1]){
            temp = number[j]
            number[j] = number[j+1]
            number[j+1]= temp
        }
    }
}

console.log(number)