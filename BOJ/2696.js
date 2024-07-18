// 중앙값 구하기 (G2, 정렬)
// https://www.acmicpc.net/problem/2696

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const t = parseInt(input.shift());
const answer = [];

for (let tc = 0; tc < t; tc++) {
  const m = parseInt(input.shift());
  const nums = input.splice(0, Math.floor(m / 10) + 1).reduce((acc, cur) => {
    return [...acc, ...cur.split(" ").map(Number)];
  }, []);
  const arr = [];
  let mid = [];
  let p = 0;

  answer.push((m + 1) / 2);

  while (p < m) {
    arr.push(nums[p]);
    p++;

    let temp = arr.length - 1;

    while (temp > 0) {
      if (arr[temp] < arr[temp - 1]) {
        [arr[temp - 1], arr[temp]] = [arr[temp], arr[temp - 1]];
      } else break;
      temp--;
    }

    if (p % 2 === 1) {
      mid.push(arr[Math.floor(p / 2)]);
      if (mid.length === 10) {
        answer.push(mid.join(" "));
        mid = [];
      }
    }
  }

  answer.push(mid.join(" "));
}

console.log(answer.join("\n"));
