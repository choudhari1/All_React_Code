let arr = [7,20,2,7,8,-2];

let minarry = arr[0]
console.log(minarry)
for(var i = 0 ; i<arr.length; i++){
    if(arr[i]>minarry){
        minarry = arr[i]
    }
    
}

console.log(minarry)