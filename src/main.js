import { render } from "./render.js";

class Hanoi {
  moveCount = 0;
  state = [[8, 7, 6, 5, 4, 3, 2, 1], [], []];

  constructor(render) {
    this.render = render;
  }

  async run() {
    const from = 0; // First tower
    const to = 1; // Second tower
    const aux = 2; // Third tower
    await this.move(this.state[from].length, from, to, aux);
  }

  async move(n, from, to, aux) {
    if (n === 0) return;
    await this.move(n - 1, from, aux, to);
    await this.makeMove(from, to);
    await this.move(n - 1, aux, to, from);
  }

  async makeMove(from, to) {
    this.state[to].push(this.state[from].pop() ?? 0);
    this.moveCount++;
    await this.render(this);
  }
}

(async () => {
  const hanoi = new Hanoi(render);
  await render(hanoi);
  hanoi.run();
})();
