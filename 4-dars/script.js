// function sortArray() {
//   arr = [4, false, 33, 44, 2, true, 1, null];
//   const numbers = arr
//     .filter((item) => typeof item === "number")
//     .sort((a, b) => a - b);
//   const others = arr.filter((item) => typeof item !== "number");
//   return { sorted: numbers, others: others };
// }

// console.log(sortArray());

// /**
//  *
//  *
//  *
//  *
//  *
//  *
//  **/

// function sortByType() {
//   arr = ["hello", 1, null, 4, "world", false, 33, 44, 2, true];
//   const numbers = arr
//     .filter((item) => typeof item === "number")
//     .sort((a, b) => a - b);
//   const booleans = arr.filter((item) => typeof item === "boolean");
//   const strings = arr.filter((item) => typeof item === "string");
//   const objects = arr.filter((item) => item === null);

//   return {
//     numbers: numbers,
//     booleans: booleans,
//     strings: strings,
//     others: objects,
//   };
// }

// console.log(sortByType());

// /**
//  *
//  *
//  *
//  *
//  *
//  *
//  **/

// function elementTypes() {
//   arr = [33, 44, 1, null, 4, false];
//   return arr.map((item) => typeof item);
// }
// console.log(elementTypes());

// /**
//  *
//  *
//  *
//  *
//  *
//  *
//  **/

// function increaseForFirstEvenNum() {
//   arr = [1, 4, 5, 2, 33, 1, 8, 22, 44];
//   const firstEven = arr.find((num) => num % 2 === 0);
//   if (firstEven == undefined) return arr;

//   return arr.map((num) => (num % 2 === 0 ? num * firstEven : num));
// }

// console.log(increaseForFirstEvenNum());

// /**
//  *
//  *
//  *
//  *
//  *
//  *
//  **/

// function increasetOddbek() {
//   arr = [2, 55, 21, 44, 5];
//   const lastOddbek = [...arr].reverse().find((num) => num % 2 !== 0);
//   if (lastOddbek == undefined) return arr;
//   return arr.map((num) => (num % 2 !== 0 ? num + lastOddbek : num));
// }
// console.log(increasetOddbek());

// /**
//  *
//  *
//  *
//  *
//  *
//  *
//  *
//  **/

// function swapMinMax() {
//   array = [23, 43, 12, 56, 64, 101];
//   const min = Math.min(...array);
//   const max = Math.max(...array);
//   const maxNumIndex = array.indexOf(max);
//   const minNumIndex = array.indexOf(min);
//   [array[maxNumIndex], array[minNumIndex]] = [
//     array[minNumIndex],
//     array[maxNumIndex],
//   ];
//   return array;
// }
// console.log(swapMinMax());

// /**
//  *
//  *
//  *
//  *
//  *
//  *
//  **/

// function removesDuplicates() {
//   array = [2, 2, 4, 4, 1, 34, 34, 11];
//   return array.filter((item, index) => item !== array[index - 1]);
// }

// console.log(removesDuplicates());

// /**
//  *
//  *
//  *
//  *
//  *
//  *
//  **/

// function removeWhichLessThree() {
//   array = [2, 2, 2, 4, 1, 4, 1, 34, 34, 34, 11];
//   arr = array.filter(
//     (item) => array.filter((thing) => thing === item).length >= 3
//   );
//   return arr;
// }

// console.log(removeWhichLessThree());

// /**
//  *
//  *
//  *
//  *
//  *
//  *
//  **/

// function sumEvenIndixess() {
//   array = [2, 54, 5, 11, 2, 35, 11];
//   return array.reduce((sum, num, index) => {
//     if (num % 2 === 0) {
//       return sum + index;
//     }
//     return sum;
//   }, 0);
// }

// console.log(sumEvenIndixess());

// /**
//  *
//  *
//  *
//  *
//  *
//  *
//  **/
