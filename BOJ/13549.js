// 숨바꼭질 3 (BFS)
// https://www.acmicpc.net/problem/13549

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
    const ret = this.head.node;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return ret;
  }
}

const [n, m] = input.shift().split(" ").map(Number);
const visited = Array(200001).fill(Infinity);
visited[n] = 0;

function bfs(num) {
  let q = new Queue();
  q.enqueue([num, 0]);

  while (q.size > 0) {
    let [now, cnt] = q.dequeue();

    if (now * 2 < 200001 && visited[now * 2] > cnt) {
      visited[now * 2] = cnt;
      q.enqueue([now * 2, cnt]);
    }
    if (now + 1 < 200001 && visited[now + 1] > cnt + 1) {
      visited[now + 1] = cnt + 1;
      q.enqueue([now + 1, cnt + 1]);
    }
    if (now - 1 >= 0 && visited[now - 1] > cnt + 1) {
      visited[now - 1] = cnt + 1;
      q.enqueue([now - 1, cnt + 1]);
    }
  }
  return;
}

bfs(n);

console.log(visited[m]);
