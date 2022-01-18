// This document serves a compendium of the exercises I have completed while reading through the Eloquent Javascript Book
// To save space and for ease, I am going to compile all 'simple' exercises in one file and just comment them out. 
// The first will be my attempt and the second will be the model solution if I want to keep track of it. If I cheat on a question
// I will make it obvious with the use of "FAILED".

//-------------------------------------------
//THE BASICS
//-------------------------------------------

//Looping a triangle
// let string = "#";
// for (let counter = 0; counter < 6; counter++) {
//     console.log(string);
//     string = string + "#";
// }
//-------------------------------------------
// for (let line = "#"; line.length < 8; line += "#")   can define string and such in the for loop
//   console.log(line);

//FizzBuzz
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 == 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz");
//     }
//     else console.log(i);
// }

// Chessboard
// let size = 8
// output = ""
// for (let j = 0; j <= size - 1 / 2; j++) {
//     output += " ";
//     output += "#";
// }

// for (let i = 0; i <= size - 1; i++) {
//     console.log(output + i);
// }
// ###################   SECOND ATTEMPT    ###################
// let size = 5
// for (let i = 0; i < size; i++) {
//     outputString = ""
//     if (i % 2 == 0) {
//         for (let i = 0; i < size; i++) {
//             outputString += " "
//             outputString += "#"

//         }
//         console.log(outputString)
//     }
//     else if (i % 2 !== 0) {
//         for (let i = 0; i < size; i++) {
//             outputString += "#"
//             outputString += " "

//         }
//         console.log(outputString)
//     }
// }

// Min
console.log(min(2, 3))

function min(x, y) {
    if (x > y) return y;
    else return x;
}

