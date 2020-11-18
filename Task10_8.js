let arr = new Map()
arr.set ('1', 'Number')
arr.set ('2', 'String')
arr.set ('3', 'Null')
arr.set ('4', 'Undefined')
arr.set ('5', 'NaN')
arr.set ('asd', 'Object')




for (let key of arr.keys()){
    console.log (`Ключ - ${key}, значение - ${arr.get(key)}`)
}