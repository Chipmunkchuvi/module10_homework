let arr = [1,2,3,4,5,6,7,8,9,0,"asd","qwe", null, undefined, "25", true, false, NaN]
// let arr = [1,1,1,1,1,1,1,1,1]
// let arr = [2,2,2,2,2,2,2,2,2]
let even = 0
let odd = 0
let zero = 0
for (let i = 0; i<arr.length; i++){
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
        if (arr[i]%2 === 1 ){
            odd++
        }
        else if(arr[i] === 0){
            zero++
        }
        else even++
    }
}
console.log ("Четные " + even)
console.log("Нечетные " + odd)
console.log("Нули " +zero)

// Не совсем верно, т.к. проверка на typeof стоит в неправильном месте и поэтому не отсеивает все лишние значения. Кроме того, не хватает проверки на NaN. Выше исправила на верный вариант

// let arr1 = new Map([
//     ['even',''],
//     ['odd',''],
//     ['zero','']
// ])
// arr1.set('even',even)
// arr1.set('odd',odd)
// arr1.set('zero',zero)

// arr1.forEach(function(value,key){
//     console.log( key +' = ' + value)
// })

// Достаточно обычного вывода в консоль :) использовать Map для вывода - избыточно)