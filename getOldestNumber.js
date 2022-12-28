// Get oldest number in array
/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]

*/

const getOldestNumberArray = array => {

    // ONE POSSIBLE SOLUTION
    // array.sort((a,b) => a > b ? 1 : -1)
    // const max = [array[array.length - 1], array[array.length - 2]] 
    // return max.sort((a,b) => a < b ? -1 : 1 )

    return array.sort((first, second) => first - second).slice(-2)
}

console.log('Oldest Number From Array')
console.log(getOldestNumberArray([2,4,5,7,8,20,12,45,34]))