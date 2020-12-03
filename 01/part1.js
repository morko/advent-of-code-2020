const fs = require("fs").promises;

const wantedSum = 2020;

async function main() {
  let data = await fs.readFile("./data.txt", { encoding: "utf-8" });
  data = data
    .split("\n")
    .map((n) => +n)
    .sort((a, b) => a - b);

  let startIndex = 0;
  let endIndex = data.length - 1;

  while (startIndex < endIndex) {
    const a = data[startIndex];
    const b = data[endIndex];

    if (a + b === wantedSum) {
      console.log(`${a} + ${b} = ${wantedSum}`);
      console.log(`${a} * ${b} = ${a * b}`);
      break;
    }

    if (a + b < wantedSum) {
      startIndex++;
    }

    if (a + b > wantedSum) {
      endIndex--;
    }
  }
}

main();
