let value = +prompt('Enter variable')
// console.log(value)
// console.log(typeof(value))
console.log(typeof(value))

 if (Number.isInteger(value))
 {
    if (isNaN(value)) {
        console.log('Is not a number')
    }
    else if(value === 0){
        console.log("Вы  ввели 0")
    }
    else if (value%2 == 0) {
        console.log("Число четное")
    }
    else {
        console.log("Число нечетное")
    }
 }
 else {
     console.log("Упс, кажется, вы ошиблись")
 }

 // Всё верно. Код можно чуточку упростить и избавиться от одной строчки :) выше показала