const moveCountElement = document.querySelector("#move-count");
const container = document.querySelector("div#canvas-container");
const canvas = document.createElement("canvas");
container?.appendChild(canvas);
const ctx = canvas.getContext("2d");

export async function render(hanoi) {
  if (!moveCountElement) return;
  if (!ctx) return;

  moveCountElement.innerHTML = hanoi.moveCount;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  const discCount = hanoi.state.flat().length;
  const discHeight = canvas.height / discCount;
  const maxDiscWidth = canvas.width / hanoi.state.length;
  for (let i = 0; i < hanoi.state.length; i++) {
    const tower = hanoi.state[i];
    for (let j = 0; j < tower.length; j++) {
      const discNumber = tower[j];
      ctx.rect(
        maxDiscWidth * i,
        j * discHeight,
        (maxDiscWidth / discCount) * discNumber,
        discHeight
      );
    }
  }
  ctx.fill();
  ctx.closePath();

  await new Promise((resolve) => {
    document.addEventListener("keydown", resolve);
  });
}
