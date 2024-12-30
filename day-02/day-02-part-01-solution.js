// const fs = require("fs");

// const input = fs.readFileSync("day-02-part-01-input.txt", "utf8").split(/\n/);

// const fullArray = input.map((item) => {
//   return item.split(" ");
// });

// const resultsDict = {
//   safe: 0,
//   unsafe: 0,
// };

// for (let i = 0; i < fullArray.length; i++) {
//   if (fullArray[i][0] - fullArray[i][fullArray[i].length - 1] < 0) {
//     const increasingDifferenceObject = {
//       increasingDifferenceArray: [],
//       originalArray: fullArray[i],
//     };

//     for (let j = 0; j < fullArray[i].length - 1; j++) {
//       const increasingNumberDifference =
//         Number(fullArray[i][j]) - Number(fullArray[i][j + 1]);

//       increasingDifferenceObject.increasingDifferenceArray.push(
//         increasingNumberDifference
//       );
//     }

//     for (
//       let k = 0;
//       k < increasingDifferenceObject.increasingDifferenceArray.length;
//       k++
//     ) {
//       switch (true) {
//         case increasingDifferenceObject.increasingDifferenceArray.includes(-5):
//           resultsDict.unsafe += 1;
//           break;
//         case increasingDifferenceObject.increasingDifferenceArray.some(
//           (item) => item > 0
//         ):

//           resultsDict.unsafe += 1;
//           break;
//         case increasingDifferenceObject.increasingDifferenceArray.every(
//           (item) => item === -1 || item === -2 || item === -3
//         ):
//           resultsDict.safe += 1;
//           break;
//       }
//     }
//   } else {
//     const decreasingDifferenceArray = [];

//     for (let j = 0; j < fullArray[i].length - 1; j++) {
//       const decreasingNumbersDifference =
//         Number(fullArray[i][j]) - Number(fullArray[i][j + 1]);

//       decreasingDifferenceArray.push(Math.abs(decreasingNumbersDifference));
//     }

//     for (let k = 0; k < decreasingDifferenceArray.length; k++) {
//       switch (true) {
//         case decreasingDifferenceArray.every(
//           (item) => item === 1 || item === 2
//         ):
//           resultsDict.safe += 1;
//           break;
//         case decreasingDifferenceArray.includes(4):
//           resultsDict.unsafe += 1;
//           break;
//         case decreasingDifferenceArray.includes(0):
//           resultsDict.unsafe += 1;
//           break;
//       }
//     }
//   }
// }

// console.log(resultsDict);

const fs = require("fs");

const input = fs.readFileSync("day-02-part-01-input.txt", "utf8").split(/\n/);

const fullArray = input.map((item) => {
  return item.split(" ").map(Number); // Convertendo os valores para números diretamente
});

const resultsDict = {
  safe: 0,
  unsafe: 0,
};

for (let i = 0; i < fullArray.length; i++) {
  const differences = [];

  for (let j = 0; j < fullArray[i].length - 1; j++) {
    differences.push(fullArray[i][j + 1] - fullArray[i][j]);
  }

  switch (true) {
    case differences.includes(0):
      resultsDict.unsafe += 1;
      break;
    case differences.includes(4) || differences.includes(-4):
      resultsDict.unsafe += 1;
      break;
    case differences.some((diff) => diff > 3 || diff < -3):
      resultsDict.unsafe += 1;
      break;
    case differences.every((diff) => diff === 1 || diff === 2 || diff === 3) ||
      differences.every((diff) => diff === -1 || diff === -2 || diff === -3):
      resultsDict.safe += 1;
      break;
    default:
      resultsDict.unsafe += 1;
  }
}

console.log(resultsDict);
