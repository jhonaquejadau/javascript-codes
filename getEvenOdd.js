// Get even or odd number from an array

const getEvenNumberArray = (array = [], even = false) => {
    return array.filter(element => even === true ? element % 2 === 0 : element % 2 === 1)
}

console.log('Even || Odd From Array')
console.log( getEvenNumberArray([1,2,5,3,4,6], true))