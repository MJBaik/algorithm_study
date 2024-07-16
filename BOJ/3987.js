// 보이저 1호 (G5, 시뮬레이션)
// https://www.acmicpc.net/problem/3987
// 런타임 발생시 readFileSync 값 바꿔볼 것..

let input = require("fs")
  .readFileSync(0, "utf-8")
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
    return;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    const ret = this.head.node;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return ret;
  }
}

const [n, m] = input.shift().split(" ").map(Number);
const space = input.splice(0, n).map((e) => e.split(""));
const [pr, pc] = input
  .shift()
  .split(" ")
  .map((e) => Number(e) - 1);
const mode = ["U", "R", "D", "L"];

function turn(dir, item) {
  if (item === "/") {
    switch (dir) {
      case 0:
        return 1;
      case 1:
        return 0;
      case 2:
        return 3;
      case 3:
        return 2;
      default:
        return dir;
    }
  } else {
    switch (dir) {
      case 0:
        return 3;
      case 1:
        return 2;
      case 2:
        return 1;
      case 3:
        return 0;
      default:
        return dir;
    }
  }
}

function move() {
  const q = new Queue();
  q.enqueue([pr, pc, 0, 1, 0]);
  q.enqueue([pr, pc, 1, 1, 1]);
  q.enqueue([pr, pc, 2, 1, 2]);
  q.enqueue([pr, pc, 3, 1, 3]);

  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  let mc = 0;
  let md = 0;

  while (q.size > 0) {
    if (q.size === 0) break;
    let [y, x, dir, cnt, mode] = q.dequeue();

    if (cnt > mc) {
      mc = cnt;
      md = mode;
    }

    let ny = y + dy[dir];
    let nx = x + dx[dir];

    if (ny === pr && nx === pc && dir === mode) {
      mc = "Voyager";
      md = mode;
      break;
    }

    if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
    if (space[ny][nx] === "C") continue;

    if (space[ny][nx] !== ".") dir = turn(dir, space[ny][nx]);
    q.enqueue([ny, nx, dir, cnt + 1, mode]);
  }

  return [md, mc];
}

const [md, mc] = move();

console.log(`${mode[md]}\n${mc}`);
