const fs = require("fs");

const input = fs.readFileSync("day-01-part-01-input.txt", "utf8").split(/\n/);

const firstAdventInput = [];
const secondAdventInput = [];

for (let i = 0; i < input.length; i++) {
  const lineArray = input[i].split(" ");
  const formatedArray = lineArray.filter((item) => item.length > 0);

  firstAdventInput.push(Number(formatedArray[0]));
  secondAdventInput.push(Number(formatedArray[1]));
}

const firstSortedArray = firstAdventInput.sort((a, b) => b - a);
const secondSortedArray = secondAdventInput.sort((a, b) => b - a);

let finalResult = 0;

const maxLength = Math.max(firstSortedArray.length, secondSortedArray.length);

for (let i = 0; i < maxLength; i++) {
  const firstValue =
    firstSortedArray[i] !== undefined ? firstSortedArray[i] : 0;
  const secondValue =
    secondSortedArray[i] !== undefined ? secondSortedArray[i] : 0;

  const pairDifference = Math.abs(firstValue - secondValue);
  finalResult += pairDifference;
}
