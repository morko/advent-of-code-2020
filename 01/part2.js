const fs = require("fs").promises;

const wantedSum = 2020;

async function main() {
  let data = await fs.readFile("./data.txt", { encoding: "utf-8" });
  data = data
    .split("\n")
    .map((n) => +n)
    .sort((a, b) => a - b);
  
  let aIndex = 0;

  while (aIndex < data.length - 2) {

    let bIndex = aIndex + 1;
    let cIndex = data.length - 1;

    while (bIndex < cIndex) {
      const a = data[aIndex];
      const b = data[bIndex];
      const c = data[cIndex];

      if (a + b + c === wantedSum) {
        console.log(`${a} + ${b} + ${c} = ${wantedSum}`);
        console.log(`${a} * ${b} * ${c} = ${a * b * c}`);
        break;
      }

      if (a + b + c < wantedSum) {
        bIndex++;
      }

      if (a + b + c > wantedSum) {
        cIndex--;
      }
    }

    aIndex++;
  }
}

main();
