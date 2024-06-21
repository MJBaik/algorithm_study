// 프린터 큐 (S3, 시뮬레이션)
// https://www.acmicpc.net/problem/1966

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
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

  push(item) {
    const newNode = new Node(item);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  popleft() {
    if (this.size === 0) return undefined;
    const returnValue = this.head.node;
    this.head = this.head.next;
    this.size--;
    return returnValue;
  }
}

let t = Number(input.shift());

for (tc = 0; tc < t; tc++) {
  let [n, now] = input.shift().split(" ").map(Number);
  let arr = input.shift().split(" ").map(Number);
  let answer = 0;

  const q = new Queue();

  for (item of arr) {
    q.push(item);
  }
  arr.sort((a, b) => b - a);

  while (q.size > 0) {
    let temp = q.popleft();
    if (arr[0] === temp && now === 0) {
      answer++;
      break;
    } else if (arr[0] === temp) {
      answer++;
      now--;
      arr.shift();
    } else {
      q.push(temp);
      now--;
      if (now === -1) now = q.size - 1;
    }
  }

  console.log(answer);
}
