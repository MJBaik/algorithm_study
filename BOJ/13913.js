// 숨바꼭질 4 (G4, BFS)
// https://www.acmicpc.net/problem/13913

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");

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
    if (this.size === null) this.tail = null;
    return returnValue;
  }
}

const [st, ed] = input.shift().split(" ").map(Number);

const visited = Array(200001).fill([Infinity, Infinity]);
visited[st] = [0, -1];

function move(st) {
  let q = new Queue();
  q.push([st, 0]);

  while (q.size > 0) {
    const [now, len] = q.popleft();
    if (now === ed) return;

    let sg = now * 2;
    let p1 = now + 1;
    let m1 = now - 1;

    if (sg < 200001 && visited[sg][0] > len + 1) {
      visited[sg] = [len + 1, now];
      q.push([sg, len + 1]);
    }
    if (p1 < 200001 && visited[p1][0] > len + 1) {
      visited[p1] = [len + 1, now];
      q.push([p1, len + 1]);
    }
    if (m1 >= 0 && visited[m1][0] > len + 1) {
      visited[m1] = [len + 1, now];
      q.push([m1, len + 1]);
    }
  }
  return;
}

move(st);
let answer = [ed];

let [len, idx] = visited[ed];

for (let i = 0; i < visited[ed][0]; i++) {
  answer.push(idx);
  if (idx === -1) break;
  [len, idx] = visited[idx];
}

answer = answer.reverse();

console.log(`${answer.length - 1}\n${answer.join(" ")}`);
