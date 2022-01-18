/// This file is a store of all exercises completed over the course of completing the udemy course: The Complete JavaScript Course 2021: From Zero to Expert!


// PART 1 - THE FUNDAMENTALS To save me watching all these lecture I've just blastedthrough the questions to see what i've missed

// ############################   Practice Questions ####################################

// const country = "England"
// const isIsland = true
// const population = 60000000
// let language;

// console.log(country, isIsland, population, language)
// console.log(typeof country)
// console.log(typeof isIsland)
// console.log(typeof population)
// console.log(typeof language)

// let halfPop = population / 2
// let halfPop1 = halfPop + 1
// const avPop = 33000000
// const overAv = avPop > population
// let description = country + " is where I live, the population is " + population

// console.log(halfPop)
// console.log(halfPop1)
// console.log(avPop)
// console.log(overAv)
// console.log(description)
// console.log(`New string ${country} and ${population - 5000}`)


// console.log('9' + '7')
// console.log('13' + '7' + 20)
// console.log('123' > 57)
// console.log('123' < 57)


// ######################################################################################
//Exercises on fundamentals seems to be wasting quite abit of time. Until I get further on I'll stick
//to the challenges
// ######################################################################################


// ############################   Coding Challenge 1 ####################################

// markMass = 78
// markHeight = 1.69
// johnMass = 92
// johnHeight = 1.95

// function BMI(mass, height) {
//     return (mass) / (height ** 2)
// }
// markBMI = BMI(markMass, markHeight)
// johnBMI = BMI(johnMass, johnHeight)
// markMore = markBMI > johnBMI

// console.log(markBMI, johnBMI, markMore)

// CORRECT : 27.309968138370508 24.194608809993426 true


// ############################   Coding Challenge 2 ####################################
// Improving and adapting previous 

// markMass = 78
// markHeight = 1.69
// johnMass = 110
// johnHeight = 1.95

// function BMI(mass, height) {
//     return (mass) / (height ** 2)
// }
// markBMI = BMI(markMass, markHeight).toPrecision(4)
// johnBMI = BMI(johnMass, johnHeight).toPrecision(4)
// markMore = markBMI > johnBMI

// console.log(markBMI, johnBMI, markMore)

// if (markMore) {
//     console.log("Mark has higher BMI.")
// }
// else console.log("John has higher BMI.")

// console.log(`Mark's BMI is ${markBMI}, and Johns is ${johnBMI}`)

// CORRECT : 
// 27.31 28.93 false
// John has higher BMI.
// Mark's BMI is 27.31, and Johns is 28.93

// ############################   Coding Challenge 3 ####################################
// Swimming team point calculator

// let dolphinsScore = [100, 108, 95];
// let koalasScore = [100, 96, 80];

// function Average(array) {
//     return (array.reduce((a, b) => a + b, 0) / 3).toFixed(0);
// }

// let dolphinsAv = Number(Average(dolphinsScore));     // Note: toFixed returns a string so the check was failing
// let koalasAv = Number(Average(koalasScore));         // have to strongly type the output of the string so the check
// let check = dolphinsAv >= 100
// let check2 = dolphinsAv > koalasAv
// console.log(dolphinsAv);
// console.log(koalasAv);


// if (dolphinsAv > koalasAv && dolphinsAv >= 100) {
//     console.log("The win goes to the dolphins.");
// }
// else if (koalasAv > dolphinsAv && koalasAv >= 100) {
//     console.log("The win goes to the koalas.");
// }
// else if (dolphinsAv == koalasAv && dolphinsAv >= 100 && koalasAv >= 100) {
//     console.log("It's a draw!!");
// }
// else console.log("No one wins :(")

// ############################   Coding Challenge 4 ####################################

// let baseCost = 100
// let percentage = (baseCost >= 50 && baseCost <= 300 ? 0.15 : 0.20) // Ternary operator used instead of if statement
// let tip = baseCost * percentage

// console.log(`The base cost was ${baseCost}, the tip was ${tip} and the total was ${baseCost + tip}`)

// ############################   Coding Challenge 5 ####################################

// let dolphinsScore = [400, 108, 95];
// let koalasScore = [100, 96, 80];

// const Average = (array) => {
//     return (array.reduce((a, b) => a + b, 0) / 3).toFixed(0);
// }

// const Check_Winner = (scrore1, score2) => {
//     if (scrore1 > score2 && scrore1 / score2 >= 2) {
//         console.log(`The win goes to the dolphins. (${scrore1} vs ${score2})`);
//     }
//     else if (score2 > scrore1 && score2 / scrore1 >= 2) {
//         console.log(`The win goes to the koalas. (${score2} vs ${scrore1})`);
//     }
//     else {
//         console.log("No one wins!")
//     }
// }

// let dolphinsAv = Number(Average(dolphinsScore));     // Note: toFixed returns a string so the check was failing
// let koalasAv = Number(Average(koalasScore));
// // have to strongly type the output of the string so the check
// let check = dolphinsAv >= 100
// let check2 = dolphinsAv > koalasAv

// Check_Winner(dolphinsAv, koalasAv)

// ############################   Coding Challenge 6 ####################################

// function calcTip(value) {
//     if (value >= 50 && value <= 300) {
//         tip = value * 0.15;
//         return tip;
//     }
//     else {
//         tip = value * 0.2;
//         return tip;
//     }
// }

// bills = [125, 555, 44];
// tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// ############################   Coding Challenge 7 ####################################

