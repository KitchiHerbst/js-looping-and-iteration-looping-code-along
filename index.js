// Code your solutions in this file


function writeCards(array, string) {
    let new_array = []
    for (let i = 0; i < array.length; i++) {
      new_array.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return new_array
} 

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num --
    }
}
//     for (let i = num; num > 0; num--) {
//         console.log(num)
//     }
