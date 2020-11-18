
let str = "Hello"
let array = str.split("")
let modifyStr = array.reverse()
let resultOne = modifyStr.join("")
// console.log(array)
// console.log(modifyStr)
console.log(resultOne)

/////////////////////////////////////////////

let resultTwo=""
for ( let i = str.length-1; i >= 0; i--){
     resultTwo +=  str[i]
    // console.log(i)
    // console.log(str[i])
    //console.log(result)
}
console.log(resultTwo)