// ACM Craft (G3, 위상정렬)
// https://www.acmicpc.net/problem/1005

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
    const node = new Node(item);
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;
    const ret = this.head.node;
    this.head = this.head.next;
    this.size--;
    return ret;
  }
}

const t = parseInt(input.shift());
let p = 0;
const ans = [];

for (let tc = 0; tc < t; tc++) {
  const [n, k] = input[p].split(" ").map(Number);
  const cost = input[p + 1].split(" ").map(Number);
  const nums = input.slice(p + 2, p + 2 + k);
  const w = parseInt(input[p + 2 + k]);
  p += 3 + k;
  const parents = Array.from({ length: n + 1 }, () => []);
  const price = Array(n + 1).fill(0);
  const visited = Array(n + 1).fill(false);

  function bfs(now) {
    if (parents[now].length === 0) return cost[now - 1];
    let max = 0;

    for (let ea of parents[now]) {
      if (!visited[ea]) {
        price[ea] = bfs(ea);
        visited[ea] = true;
      }
      max = Math.max(max, price[ea]);
    }

    return max + cost[now - 1];
  }

  nums.forEach((ea) => {
    const [p, c] = ea.split(" ").map(Number);
    parents[c].push(p);
  });

  price[w] = bfs(w);

  ans.push(price[w]);
}

console.log(ans.join("\n"));
