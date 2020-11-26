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

// 1 и 2 варианты предпочтительнее, т.к. метод map преднзначен для решения других задач: он создает новый массив на основе исходного. Для простого перебора достаточно цикла или метода forEach