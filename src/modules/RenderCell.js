import createHtmlElement from "../helperFunction/CreateHtmlElement";

export default function renderCell(gameBoardArray, i, j, player, enemy) {
  const cell = createHtmlElement("div", { id: `${i},${j}`, class: "cell" });
  if (gameBoardArray[i][j]) {
    if (gameBoardArray[i][j] === "missed") cell.textContent = "X";
    if (gameBoardArray[i][j].isHit) cell.textContent = "hit";
    if (gameBoardArray[i][j].getName) cell.textContent = gameBoardArray[i][j].getName();
  }
  cell.addEventListener("click", () => {
    if (!player.getTurn()) {
      if (enemy.attack(player, ...cell.id.split(","))) {
        player.toggleTurn();
        enemy.toggleTurn();
      }
    }
  });
  return cell;
}
