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

  const colors = new Map();
  for (let i = 1; i <= discCount; i++) {
    const red = Math.floor((255 / discCount) * i);
    const green = Math.floor(255 - (255 / discCount) * i);
    colors.set(
      i,
      `#${red.toString(16).padStart(2, "0")}${green
        .toString(16)
        .padStart(2, "0")}00`
    );
  }

  for (let i = 0; i < hanoi.state.length; i++) {
    const tower = hanoi.state[i];
    for (let j = 0; j < tower.length; j++) {
      const discNumber = tower[j];
      ctx.fillStyle = colors.get(discNumber);
      ctx.fillRect(
        maxDiscWidth * i,
        canvas.height - (j + 1) * discHeight,
        (maxDiscWidth / discCount) * discNumber,
        discHeight
      );
    }
  }
  ctx.closePath();

  await new Promise((resolve) => {
    document.addEventListener("keydown", resolve);
  });
}
