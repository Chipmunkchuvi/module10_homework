let x = 1
if (typeof x == "number"){
    console.log(x + " is number")
}
else if(typeof x == 'string'){
    console.log(x + " is string")
}
else if (typeof x == 'boolean'){
    console.log(x + " is Boolean")
}
else {
    console.log("Тип x не определён")
}

// Не совсем верно, т.к. Number.isInteger проверяет, целое число или нет. Т.е. в текущем варианте дробные числа не будут распознаваться как числа, что не соответствует действительности. Для проверки на число можно использовать typeof, как и в остальных случаях