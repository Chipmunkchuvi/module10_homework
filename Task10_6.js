let arr1 = []
let arr = [1,1,1,1]
for ( let i = 0; i < arr.length; i++){
    for ( let j=i+1; j <arr.length; j++){
        let y = arr[j]
        if (arr[i]===arr[j]){
            arr1.push (true)
        }
        else {
            arr1.push (false)
        }
    }
}
let result = arr1.reduce(function(previousValue,initialValue){
        return previousValue&&initialValue
}
)
console.log(result)

/////////////////////////////////////////////////////////////
let result1
result = arr.reduce(function (previousValue,initialValue,index){
                // console.log("previousValue = " + previousValue)
                // console.log("initialValue = " + initialValue)
                // console.log("index " + index)
                if(initialValue === previousValue){
                    result1 = true
                    return initialValue
                }
                else {
                    result1 = false
                    return previousValue
                }
}
)
console.log(result1)

// Решения верные, но оба не оптимальные, очень много избыточных действий. Ниже написала более простое решение

let array = [1, 1, 1, 2];
let isEqual = true;

for (let i = 1; i < array.length; i++) {
  if (array[0] !== array[i]) {
    isEqual = false;
    break;
  }
}

console.log(isEqual);