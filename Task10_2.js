let x = 1
if (Number.isInteger(x)){
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