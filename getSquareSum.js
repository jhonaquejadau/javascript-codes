/* SQUEARE CHALLENGE: 

    * Complete the square sum function so that it squares each number passed into it and then sums the results together.
    For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

const getSquareSum = array => {
    return array.map(num => num**2).reduce((num,index) => num + index, 0)
}
console.log('Squere Number Array')
console.log( getSquareSum([1,2,2]))