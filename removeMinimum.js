// 5. REMOVE MINIMUN

// I'll solve this challenges with two differents ways

const removeMinimun = array => {
    // const min = [...array].sort((a,b) => a > b ? 1 : -1)[0]
    // const lowers = [...array].filter(num => num === min)
    // const newArray = [...array].filter(num => num !== min)
    // return lowers.length > 1 ? newArray.concat(lowers[0]) : newArray
    const indexOfMin = array.indexOf(Math.min(...array))
    return [...array.slice(0, indexOfMin),...array.slice(indexOfMin + 1)]
}

console.log('minimun of array')
console.log(removeMinimun([2,2,1,2,1]))