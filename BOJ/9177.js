// 단어섞기 (DP)
// https://www.acmicpc.net/problem/9177

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());

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
    const node = new Node(item);
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
    return;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    const ret = this.head.node;
    this.size--;
    this.head = this.head.next;
    if (this.size === 0) {
      this.tail = null;
    }
    return ret;
  }
}

function comapare(a, b, target) {
  const q = new Queue();
  q.enqueue([0, 0, 0, ""]);
  let visited = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );

  while (q.size > 0) {
    const [p1, p2, p3, now] = q.dequeue();
    if (p3 === target.length && now === target) {
      return true;
    }

    if (p1 < a.length && visited[p1 + 1][p2] === 0 && a[p1] === target[p3]) {
      visited[p1 + 1][p2] = 1;
      q.enqueue([p1 + 1, p2, p3 + 1, now + a[p1]]);
    }
    if (p2 < b.length && visited[p1][p2 + 1] === 0 && b[p2] === target[p3]) {
      visited[p1][p2 + 1] = 1;
      q.enqueue([p1, p2 + 1, p3 + 1, now + b[p2]]);
    }
  }

  return false;
}

const answer = [];

input.forEach((e, i) => {
  const [a, b, target] = e.split(" ");
  const ret = comapare(a, b, target);

  answer.push(`Data set ${i + 1}: ${ret ? "yes" : "no"}`);
});

console.log(answer.join("\n"));
