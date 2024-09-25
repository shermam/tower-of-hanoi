export async function render(hanoi) {
  const hanoiElement = document.querySelector("#hanoi");
  if (!hanoiElement) throw new Error("Element not found");
  hanoiElement.innerHTML = JSON.stringify(hanoi, null, 2);
  await new Promise((resolve) => {
    document.addEventListener("keydown", resolve);
  });
}
