/** KATA 01 ⮕
***
*** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
***
**/


console.log('%cKATA 01 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const mainElement = document.querySelector('main')
const kata1heading = document.createElement('h1')

let counter1 = 1
while (counter1 <= 20) {
  console.log(counter1)
  kata1heading.append(counter1 +', ' )
  counter1 += 1
}
mainElement.append('Kata 1')
mainElement.append(kata1heading)



/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/
console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') // These console.logs are just to help make the console log better organized and more readable
// let counter2a = 1
// while (counter2a <= 20) {
//   if (counter2a % 2 === 0)
//   console.log(counter2a)
//   kata2heading.append(counter2a)
//   counter2a += 1
// }
const kata2heading  = document.createElement('h1')
let counter2b = 2
while (counter2b <= 20) {
  console.log(counter2b)
  kata2heading.append(counter2b +', ')
  counter2b += 2
}
mainElement.append('kata 2')
mainElement.append(kata2heading)
/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/
// const kata3heading  = document.createElement('h1')

console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
// let counter3a = 1
// while (counter3a < 20) {
//   if (counter3a % 2 !== 0)
//   console.log(counter3a)
//   kata3heading.append(counter3a)

//   counter3a += 1
// }

const kata3heading  = document.createElement('h1')

let counter3b = 1
while (counter3b < 20) {
  console.log(counter3b)
  kata3heading.append(counter3b +', ')

  counter3b += 2
}
mainElement.append('kata 3')
mainElement.append(kata3heading)
/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/
const kata4heading  = document.createElement('h1')

console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let counter4 = 5
while (counter4 <= 100) {
console.log(counter4)
kata4heading.append(counter4 +', ')

counter4 += 5
}
mainElement.append('kata 4')
mainElement.append(kata4heading)
/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/
const kata5heading  = document.createElement('h1')

console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let counter5a = 1
while (counter5a <= 10) {
  console.log(counter5a * counter5a)
  kata5heading.append(counter5a * counter5a +', ')

  counter5a += 1
}
mainElement.append('kata 5')
mainElement.append(kata5heading)
// let counter5b = 1
// while (counter5b <= 100) {
//   const isSquare = Number.isInteger(Math.sqrt(counter5b));
//   if (isSquare) {
//   console.log(counter5b)
//   }
//   counter5b += 1
// }
/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/
const kata6heading  = document.createElement('h1')

console.log('%cKATA 06 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let counter6 = 20
while (counter6 >= 1) {
  console.log(counter6)
  kata6heading.append(counter6 +', ')

  counter6 -= 1
}
mainElement.append('kata 6')
mainElement.append(kata6heading)
/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/
const kata7heading  = document.createElement('h1')

console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let counter7 = 20
while (counter7 >= 1) {
  if (counter7 % 2 === 0) {
  console.log(counter7)
  kata7heading.append(counter7 +', ')

  }
  counter7 -= 1
}
mainElement.append('kata 7')
mainElement.append(kata7heading)
/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/
const kata8heading  = document.createElement('h1')

console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let counter8 = 20
while (counter8 >= 1) {
  if (counter8 % 2 !== 0) {
  console.log(counter8)
  kata8heading.append(counter8 +', ')

  }
  counter8 -= 1
}
mainElement.append('kata 8')
mainElement.append(kata8heading)
/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/
const kata9heading  = document.createElement('h1')

console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let counter9 = 100
while (counter9 >= 1) {
  console.log(counter9)
  kata9heading.append(counter9  +', ')
  counter9 -= 5
}
mainElement.append('kata 9')
mainElement.append(kata9heading)
/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/
const kata10heading  = document.createElement('h1')

console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let counter10 = 100
while (counter10 >= 1) {
  const isSquare = Number.isInteger(Math.sqrt(counter10));
  if (isSquare) {
  console.log(counter10)
  kata10heading.append(counter10 +', ')

  }
  counter10 -= 1
}
mainElement.append('kata 10')
mainElement.append(kata10heading)


// Kata 11
const kata11heading  = document.createElement('h1')

const sampleArray =[ 469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
                     456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
for (let index = 0; index < sampleArray.length; index ++ ){
    kata11heading.append(sampleArray[index] +', ')  
}
 
mainElement.append('Kata 11')
mainElement.append(kata11heading)

// Kata 12
// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)

const kata12heading  = document.createElement('h1')

for (let index = 0; index < sampleArray.length; index ++){
    if (sampleArray[index] % 2 ===0) {
        kata12heading.append(sampleArray[index] +', ')  

    }
}
mainElement.append('Kata 12')
mainElement.append(kata12heading)


// kata 13
// Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
const kata13heading  = document.createElement('h1')

for (let index = 0; index < sampleArray.length; index ++){
    if (sampleArray[index] % 2 !==0) {
        kata13heading.append(sampleArray[index] +', ')  

    }
}
mainElement.append('Kata 13')
mainElement.append(kata13heading)

// Kata 14

// Display the square of each element in sampleArray. (219961, 570025, …, 222784)

const kata14heading  = document.createElement('h1')
for (let index = 0; index < sampleArray.length; index ++){
    
        kata14heading.append(sampleArray[index] *sampleArray[index] +', ')  

    
}

mainElement.append('Kata 14')
mainElement.append(kata14heading)


// Kata 15
// Display the sum of all the numbers from 1 to 20.

const kata15heading  = document.createElement('h1')

let sum = 0
for (let index = 0; index <= 20; index++ ){
    sum += index
    kata15heading.append(sum + ', ')
}

mainElement.append('Kata 15')
mainElement.append(kata15heading)

// Kata 16
// Display the sum of all the elements in sampleArray.
const kata16heading  = document.createElement('h1')
let sumSampleArray = 0
for (let index = 0; index < sampleArray.length; index++ ){
    sumSampleArray += sampleArray[index]
   
}

kata16heading.append(sumSampleArray)
mainElement.append('Kata 16')
mainElement.append(kata16heading)

// kata 17
// Display the smallest element in sampleArray.
const kata17heading  = document.createElement('h1')
  let currentElement = 0
  let smallIndex = sampleArray[currentElement]
   while (currentElement <= sampleArray.length){
       if (sampleArray[currentElement] < smallIndex ) {
           smallIndex = sampleArray [currentElement]
       }
       currentElement += 1
   }
   
kata17heading.append(smallIndex)
mainElement.append('Kata 17')
mainElement.append(kata17heading)


// kata 18
// Display the largest element in sampleArray.
const kata18heading  = document.createElement('h1')
let index = 0
let largestIndex = 0
while ( index <= sampleArray.length){
    if (sampleArray[index] > largestIndex){
        largestIndex =  sampleArray[index]

    }
      index += 1
}
kata18heading.append(largestIndex)
mainElement.append('Kata 18')
mainElement.append(kata18heading)


