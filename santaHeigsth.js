/* SANTA'S SLEIGH

We're making the finaladjusments to Santa's sleigh!

As you alreasy know, the sled is flying and we are adjusting the motor fo that it makes parabolas
as optimal as possible. For this, the jump must always be upwars and, from the highest point,
it must always go downwards...

Our trusted mechanic, Alexander, who has a great Tesla, has explained to us that the jumps
can be seen as arrays... and that we just have to make sure that the numbers go up and down correctly.
 He also warns us that we will only pass arrays of at least three positions.

 Make an algorithm that receives in the console a text with values (separated vy commas)
 and prints *true* in the console if the values go up and down strictly, otherwise it prints *false*.

 EXAMPLE:

 Input: "0,3,2,1" // Up and down strictly
 Output: true

 Input: "1,2,3" // Only go up
 Output: false

*/

// ANSWERS

// 1. Proving examples above
const code_one = list => {
    //explit list and convert to num
    const split = list.split(",").map(str => +str)
    console.log(`Array ${split}`)
    return split[2] > split[1] ? console.log('false') : console.log('true')
}
 
code_one("0,3,2,1")

// 2. Code for any sequences

const code_two = list => {
    const split = list.split(",").map(str => +str)
    let state = false;
    for (let i = 0; i < split.length; i++){
        if (split[i] < split[i - 1]){
            state = true
        }else {
            state = false
        }
    }
    console.log(`Array ${split}`)
    console.log(state)
}
 
code_two("0,1,2,3,4,5,6,7,8,7,6")