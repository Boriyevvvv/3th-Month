// function findTwoBigNumbers(arr) {
//     let first = arr[0] > arr[1] ? arr[0] : arr[1]
//     let second = arr[0] > arr[1] ? arr[1] : arr[0]

//     for (let i = 2; i < arr.length; i++) {
//       if (arr[i] > first) {
//         second = first
//         first = arr[i]
//       } else if (arr[i] > second && arr[i] !== first) {
//         second = arr[i]
//       }
//     }
//     return [first, second]
//   }
//   console.log(findTwoBigNumbers([30, 8, 20, 7]));







//  function twoBigNumbersMultiplication(arr) {
//   let max1 = arr[0] > arr[1] ? arr[0] : arr[1]
//   let max2 = arr[0] > arr[1] ? arr[1] : arr[0]

//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > max1) {
//       max2 = max1
//       max1 = arr[i]
//     } else if (arr[i] > max2 && arr[i] !== max1) {
//       max2 = arr[i]
//     }
//   }
//   return max1 * max2
// }

// console.log(twoBigNumbersMultiplication([1, 10, 1, 8, 7]));









//   function Palindrom(word) {
//     return word === word.split('').reverse().join('');
//   }

//   console.log(Palindrom('aka'));
//   console.log(Palindrom('bro'));









//   function BinarySystem(num) {
//     return num.toString(2)
//   }
//   console.log(BinarySystem(10));









//   function swapArrayElements(array, index1, index2) {
//     [array[index1], array[index2]] = [array[index2], array[index1]];
//     return array;
//   }

//   console.log(swapArrayElements([1, 2, 3, 4], 1, 2));









//   function anagram(string1, string2) {
//     const sortString = (str) => str.split('').sort().join('');
//     return sortString(string1) === sortString(string2);
//   }

//   console.log(anagram('listen', 'silent'));
//   console.log(anagram('hello', 'world'));










// function SubArraymi(arr) {
//   let maxFirst = arr[0]
//   let maxSecond = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     maxSecond= Math.max(arr[i], maxSecond + arr[i]);
//     maxFirst = Math.max(maxFirst, maxSecond)
//   }
//   return maxFirst
// }
// console.log(SubArraymi([-2, 1, -3, 4, 2, 1, -5, 4]));











// function yigindiTop(arr, tengligi) {
//     for (let i = 0; i < arr.length; i++) { 
//         for (let im = i + 1; im < arr.length; im++) { 
//             if (arr[i] + arr[im] === tengligi) { 
//                 return [arr[i], arr[im]];
//             }
//         }
//     }
//     return null
// }

// const sonlar = [5, 9, 11, 15]
// const tengligi = 26;
// const natija = yigindiTop(sonlar, tengligi)

// if (natija) {
//     console.log(`Topilgan elementlar: ${natija[0]} va ${natija[1]}`);
// } else {
//     console.log('Bunday elementlar topilmadi.');
// }









//   function PositivesAndNegatives(arr) {
//     let positiveYigidni = 0
//     let negativeYigindi = 0
//     arr = [1, -2, 3, -4, 5]
//     for (let num of arr) {
//       if (num > 0) {
//         positiveYigidni += num;
//       } else {
//         negativeYigindi += num;
//       }
//     }
//     return { positiveYigidni, negativeYigindi }
//   }
  
//   const result = PositivesAndNegatives([1, -2, 3, -4, 5])
//   console.log(`Positive sum: ${result.positiveYigidni}, negative sum: ${result.negativeYigindi}`);
  