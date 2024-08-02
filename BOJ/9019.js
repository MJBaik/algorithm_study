// DSLR (G4, BFS)
// https://www.acmicpc.net/problem/9019

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
    const ret = this.head.node;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return ret;
  }
}

const t = parseInt(input.shift());

function bfs(st, target) {
  const visited = Array(10000).fill(0);
  const q = new Queue();
  q.push([st, ""]);
  visited[st] = 1;

  while (q.size > 0) {
    const [now, order] = q.popleft();
    if (now === target) return order;

    let temp_d = (now * 2) % 10000;
    let temp_s = now > 0 ? now - 1 : 9999;
    let temp_l = (() => {
      let nowToString = now.toString().padStart(4, "0");
      let first = nowToString[0];
      nowToString = nowToString.substring(1, 4);
      return Number(nowToString + first);
    })();
    let temp_r = (() => {
      let nowToString = now.toString().padStart(4, "0");
      let last = nowToString[3];
      nowToString = nowToString.substring(0, 3);
      return Number(last + nowToString);
    })();

    if (visited[temp_d] === 0) {
      visited[temp_d] = 1;
      q.push([temp_d, order + "D"]);
    }
    if (visited[temp_s] === 0) {
      visited[temp_s] = 1;
      q.push([temp_s, order + "S"]);
    }
    if (visited[temp_l] === 0) {
      visited[temp_l] = 1;
      q.push([temp_l, order + "L"]);
    }
    if (visited[temp_r] === 0) {
      visited[temp_r] = 1;
      q.push([temp_r, order + "R"]);
    }
  }
  return -1;
}

const answer = [];

for (let tc = 0; tc < t; tc++) {
  const [st, ed] = input[tc].split(" ").map(Number);
  const ret = bfs(st, ed);
  answer.push(ret);
}

console.log(answer.join("\n"));
