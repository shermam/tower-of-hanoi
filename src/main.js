class Hanoi {
  state = [[8, 7, 6, 5, 4, 3, 2, 1], [], []];

  run() {
    const from = 0; // First tower
    const to = 1; // Second tower
    const aux = 2; // Third tower
    this.move(this.state[from].length, from, to, aux);
  }

  move(n, from, to, aux) {
    if (n === 0) {
      return;
    } else {
      this.move(n - 1, from, aux, to);
      this.makeMove(from, to);
      this.move(n - 1, aux, to, from);
    }
  }

  makeMove(from, to) {
    this.state[to].push(this.state[from].pop() ?? 0);
  }
}

const hanoi = new Hanoi();
hanoi.run();
