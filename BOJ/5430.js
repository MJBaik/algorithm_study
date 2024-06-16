// https://www.acmicpc.net/problem/5430

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let [t, ...input] = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

let returnValue = [];

for (let tc = 0; tc < t; tc++) {
  let [command, len, arr] = input.splice(0, 3);
  command = command.split("");
  arr = arr
    .replace(/[\[\]\,]/g, " ")
    .trim()
    .split(" ")
    .map(Number);

  let reversed = false;
  let l_point = 0;
  let r_point = len - 1;
  let answer = [];

  for (com of command) {
    if (com === "R") {
      reversed = !reversed;
    } else if (com === "D") {
      if (reversed) {
        if (r_point < 0 || r_point < l_point) {
          answer.push("error");
          break;
        }
        arr[r_point] = "*";
        r_point--;
      } else {
        if (l_point >= len || r_point < l_point) {
          answer.push("error");
          break;
        }
        arr[l_point] = "*";
        l_point++;
      }
    }
  }

  if (answer.length > 0) {
    returnValue.push(answer);
    continue;
  }

  if (reversed) {
    for (let i = len - 1; i > -1; i--) {
      if (arr[i] !== "*") answer.push(arr[i]);
    }
  } else {
    for (let i = 0; i < len; i++) {
      if (arr[i] !== "*") answer.push(arr[i]);
    }
  }

  returnValue.push(answer);
}

returnValue = returnValue.map((e) => {
  if (e[0] === "error") {
    return "error";
  } else {
    return `[${e.join(",")}]`;
  }
});

console.log(returnValue.join("\n"));
