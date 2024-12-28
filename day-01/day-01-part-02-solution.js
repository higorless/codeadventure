const fs = require("fs");

const input = fs.readFileSync("day-01-part-02-input.txt", "utf8").split(/\n/);

const firstAdventInput = [];
const secondAdventInput = [];

for (let i = 0; i < input.length; i++) {
  const lineArray = input[i].split(" ");
  const formatedArray = lineArray.filter((item) => item.length > 0);

  firstAdventInput.push(Number(formatedArray[0]));
  secondAdventInput.push(Number(formatedArray[1]));
}

const duplicatesDict = {};

for (let i = 0; i < firstAdventInput.length; i++) {
  const controller = firstAdventInput[i];

  for (let j = 0; j < secondAdventInput.length; j++) {
    if (controller === secondAdventInput[j]) {
      if (!duplicatesDict[secondAdventInput[j]]) {
        duplicatesDict[secondAdventInput[j]] = 1;
      } else {
        duplicatesDict[secondAdventInput[j]] += 1;
      }
    }
  }
}

let finalResult = 0;

for (let [key, value] of Object.entries(duplicatesDict)) {
  finalResult += key * value;
}

console.log(finalResult);
