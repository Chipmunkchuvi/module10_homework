let arr = [1,2,3,4,5,"qwe","asd","zxc"]
console.log(arr.length)
for (let i=0; i<arr.length; i++){
    console.log(arr[i])
    let x = arr[i]
}

///////////////////////////////////////////

 arr.forEach(function(item){
     console.log(item)
 })

///////////////////////////////////////////


let result = arr.map(function(item){
    return console.log(item)
})