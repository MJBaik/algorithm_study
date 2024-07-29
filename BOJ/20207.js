// 달력 (G5, 그리디)
// https://www.acmicpc.net/problem/20207

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

class Node {
  constructor(item) {
    this.node = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(item) {
    const newNode = new Node(item);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    const returnValue = this.head.node;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return returnValue;
  }
}

const n = parseInt(input.shift());
const nums = input.map((e) => e.split(" ").map(Number));
nums.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
const calendar = Array(366).fill(0);

for (let [st, ed] of nums) {
  for (let i = st; i <= ed; i++) {
    calendar[i] += 1;
  }
}

let row = 0;
let col = 0;
let ans = 0;

for (let i = 0; i < 366; i++) {
  if (calendar[i] === 0) {
    ans += row * col;
    row = 0;
    col = 0;
  } else {
    row = Math.max(row, calendar[i]);
    col += 1;
  }
}

ans += row * col;

console.log(ans);
