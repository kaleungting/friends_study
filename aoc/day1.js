const fs = require("fs").promises;

const parseLines = async () => {
  const data = await fs.readFile("./input", { encoding: "utf-8" });
  return data.split("\n");
};

let find2020 = async () => {
  let lines = await parseLines();
  let numbers = lines.map(Number);
  let tracker = {};

  for (let num of numbers) {
    if (tracker[2020 - num] === true) {
      return num * (2020 - num);
    }

    tracker[num] = true;
  }
};

find2020().then(console.log);


let findThree = async () => {
    let lines = await parseLines();
    let numbers = lines.map(Number);

    numbers.sort((a,b) => a-b);
    for (let i = 0; i < numbers.length; i++){
        let num = numbers[i];
        let l = i + 1;
        let r = numbers.length - 1;
        let diff = 2020 - num;

        while (l < r){
            if (num + numbers[l] + numbers[r] === 2020){
                return num * numbers[l] * numbers[r];
            }
        }

    }
}