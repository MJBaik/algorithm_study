// 선 긋기(G5, 정렬)
// https://www.acmicpc.net/problem/2170

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());
input = input.map((e) => e.split(" ").map(Number));
input.sort((a, b) => a[0] - b[0]);

const checked = [];
let count = 0;

for (let [st, ed] of input) {
  let flag = true;
  for (let idx in checked) {
    let [cst, ced] = checked[idx];
    if (st >= cst && st < ced) {
      if (ed <= ced) {
        ed = ced;
      } else {
        checked[idx][1] = ed;
      }
      flag = false;
    } else if (st < cst) {
      if (ed > cst && ed <= ced) {
        ed = cst;
      } else if (ed > ced) {
        checked[idx][0] = st;
      }
      flag = false;
    }
  }
  if (flag) checked.push([st, ed]);

  if (ed < st) continue;
}

for (let i in checked) {
  let [st, ed] = checked[i];
  count += ed - st;
}

console.log(count);
