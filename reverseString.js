// 4. Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
//'word'   =>  'drow'
const getStringReverse = value => {
    return value.split("").reverse().join("")
}

console.log('Reverse String')
console.log( getStringReverse('world'))