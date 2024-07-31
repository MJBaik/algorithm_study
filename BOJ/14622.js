// 소수 게임 (G4, 에라토스테네스의 체)
// https://www.acmicpc.net/problem/14622

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

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

const n = parseInt(input.shift());
const prime = Array(5000001).fill(1);

prime[0] = 0;
prime[1] = 0;

const half = Math.floor(Math.sqrt(5000001));

for (let i = 0; i < half; i++) {
  if (!prime[i]) continue;
  for (let j = i + i; j < 5000001; j += i) {
    prime[j] = 0;
  }
}

const dw = new PriorityQueue();
const ks = new PriorityQueue();
let dw_s = 0;
let ks_s = 0;

function check_score(num, type) {
  if (prime[num] === 1) {
    prime[num] = -1;
    if (type === "d") {
      dw.heappush(num);
      if (dw.size > 3) dw.heappop();
    } else if (type === "k") {
      ks.heappush(num);
      if (ks.size > 3) ks.heappop();
    }
  } else if (prime[num] === 0) {
    if (type === "d") {
      if (ks.size >= 3) {
        let temp = ks.heappop();
        ks_s += temp;
        ks.heappush(temp);
      } else {
        ks_s += 1000;
      }
    } else if (type === "k") {
      if (dw.size >= 3) {
        let temp = dw.heappop();
        dw_s += temp;
        dw.heappush(temp);
      } else {
        dw_s += 1000;
      }
    }
  } else if (prime[num] === -1) {
    if (type === "d") dw_s -= 1000;
    if (type === "k") ks_s -= 1000;
  }
}

input.forEach((each) => {
  const [d, k] = each.split(" ").map(Number);

  check_score(d, "d");
  check_score(k, "k");
});

if (dw_s > ks_s) {
  console.log("소수의 신 갓대웅");
} else if (dw_s < ks_s) {
  console.log("소수 마스터 갓규성");
} else {
  console.log("우열을 가릴 수 없음");
}
