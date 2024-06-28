// 감시 피하기 (G5, 백트래킹)
// https://www.acmicpc.net/problem/18428

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");

const n = parseInt(input.shift());
input = input.map((e) => e.trim().split(" "));

const arr = Array.from({ length: n }, () => Array(n).fill(0));
const student = [];
const teacher = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] === "S") {
      student.push([i, j]);
      arr[i][j] = -1;
    } else if (input[i][j] === "T") {
      teacher.push([i, j]);
      arr[i][j] = -1;
    }
  }
}

let cnt = 0;
let isNo = false;

for (let i = 0; i < student.length; i++) {
  if (isNo) break;
  let [sy, sx] = student[i];

  for (let j = 0; j < teacher.length; j++) {
    let [ty, tx] = teacher[j];

    if (sy === ty) {
      if (Math.abs(sx - tx) === 1) {
        isNo = true;
        break;
      }
      let flag = false;
      if (sx < tx) {
        for (let k = sx; k < tx; k++) {
          if (arr[sy][k] === -1) continue;
          if (arr[sy][k] > 0) flag = true;
          arr[sy][k]++;
        }
      } else if (sx > tx) {
        for (let k = tx; k < sx; k++) {
          if (arr[sy][k] === -1) continue;
          if (arr[sy][k] > 0) flag = true;
          arr[sy][k]++;
        }
      }
      if (!flag) cnt++;
    }

    if (sx === tx) {
      let flag = false;
      if (Math.abs(sy - ty) === 1) {
        isNo = true;
        break;
      }
      if (sy < ty) {
        for (let k = sy; k < ty; k++) {
          if (arr[k][sx] === -1) continue;
          if (arr[k][sx] > 0) flag = true;
          arr[k][sx]++;
        }
      } else if (sy > ty) {
        for (let k = ty; k < sy; k++) {
          if (arr[k][sx] === -1) continue;
          if (arr[k][sx] > 0) flag = true;
          arr[k][sx]++;
        }
      }

      if (!flag) cnt++;
    }
  }
}

if (isNo) {
  console.log("NO");
} else {
  if (cnt > 3) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
