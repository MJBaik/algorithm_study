// N번째 큰 수(S2, 우선순위큐)
// https://www.acmicpc.net/problem/2075

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class PriorityQueue {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  getParent(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeft(idx) {
    return idx * 2 + 1;
  }
  getRight(idx) {
    return idx * 2 + 2;
  }

  heappush(item) {
    this.heap.push(item);
    this.size++;
    let now = this.size - 1;

    while (now > 0) {
      let parent = this.getParent(now);

      if (this.heap[now] < this.heap[parent]) {
        let temp = this.heap[now];
        this.heap[now] = this.heap[parent];
        this.heap[parent] = temp;
      } else return;
      now = parent;
    }
  }

  heappop() {
    if (this.size === 0) return undefined;
    const ret = this.heap[0];
    this.size--;
    if (this.size === 0) {
      this.heap = [];
      return ret;
    }
    this.heap[0] = this.heap.pop();
    let now = 0;
    while (this.getLeft(now) < this.size) {
      let left = this.getLeft(now);
      let right = this.getRight(now);
      let smaller =
        right < this.size && this.heap[right] < this.heap[left] ? right : left;

      if (this.heap[now] > this.heap[smaller]) {
        let temp = this.heap[now];
        this.heap[now] = this.heap[smaller];
        this.heap[smaller] = temp;
      } else break;
      now = smaller;
    }
    return ret;
  }
}

let n = 0;
let count = -1;
const pq = new PriorityQueue();

rl.on("line", (line) => {
  if (count === -1) {
    count = parseInt(line);
    n = count;
    return;
  }

  line.split(" ").forEach((e) => {
    pq.heappush(parseInt(e));
    if (pq.size > n) pq.heappop();
  });
  count--;
  if (count === 0) rl.close();
}).on("close", () => {
  console.log(pq.heappop());
});
