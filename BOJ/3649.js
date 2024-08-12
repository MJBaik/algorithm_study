// 로봇 프로젝트 (G5, 이분탐색)
// https://www.acmicpc.net/problem/3649

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(n, x, nums) {
  nums.sort((a, b) => a - b);

  let st = 0;
  let ed = x - 1;
  let flag = false;

  while (st < ed) {
    let sum = nums[st] + nums[ed];

    if (sum > n) {
      ed--;
    } else if (sum < n) {
      st++;
    } else if (sum === n) {
      flag = true;
      return `yes ${nums[st]} ${nums[ed]}`;
    }
  }
  return "danger";
}

rl.on("line", (line) => {
  line.split(" ").forEach((e) => {
    input.push(Number(e));
  });
}).on("close", () => {
  const answer = [];

  let tc = 0;

  while (tc < input.length) {
    let N = input[tc] * 10000000;
    let X = input[tc + 1];
    let number = input.slice(tc + 2, tc + 2 + X).map(Number);

    const ret = solution(N, X, number);
    answer.push(ret);
    tc += 2 + X;
  }

  console.log(answer.join("\n"));
});
