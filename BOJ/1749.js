// 점수따먹기 (G4, 누적합)
// https://www.acmicpc.net/problem/1749

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
input = input.map((e) => e.split(" ").map(Number));
let max = -Infinity;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let temp = input[i][j];

    if (i > 0 && j > 0) {
      temp -= input[i - 1][j - 1];
    }
    if (i > 0) {
      temp += input[i - 1][j];
    }
    if (j > 0) {
      temp += input[i][j - 1];
    }

    max = Math.max(input[i][j], temp, max);
    input[i][j] = temp;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let sum = input[i][j];
    for (let k = 0; k <= i; k++) {
      for (let q = 0; q <= j; q++) {
        if (i === k && j === q) continue;

        let t1 = i !== k ? sum - input[k][j] : -Infinity;
        let t2 = j !== q ? sum - input[i][q] : -Infinity;
        let t3 =
          i !== k && j !== q
            ? sum - input[k][j] - input[i][q] + input[k][q]
            : -Infinity;

        max = Math.max(max, t1, t2, t3);
      }
    }
  }
}

console.log(max);
