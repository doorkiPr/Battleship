import createHtmlElement from "../helperFunction/CreateHtmlElement";
import renderInformation from "./RenderInformation";

export default function renderCell(gameBoardArray, i, j, player, enemy) {
  const cell = createHtmlElement("div", { id: `${i},${j}`, class: "cell" });
  if (gameBoardArray[i][j]) {
    if (gameBoardArray[i][j] === "missed") cell.textContent = "X";
    if (gameBoardArray[i][j].isHit) {
      if (gameBoardArray[i][j].ship.isSunk()) cell.textContent = "sunk";
      else cell.textContent = "hit";
    }
    if (gameBoardArray[i][j].getName) cell.textContent = gameBoardArray[i][j].getName();
  }
  cell.addEventListener("click", () => {
    if (player.getGameboard().areAllSunk() || enemy.getGameboard().areAllSunk()) return;
    if (!player.getTurn()) {
      if (enemy.attack(player, ...cell.id.split(","))) {
        if (player.getGameboard().areAllSunk()) renderInformation("win", player, enemy);
        if (enemy.getGameboard().areAllSunk()) renderInformation("win", enemy, player);
        if (enemy.getTurn()) renderInformation("turn", player);

        player.toggleTurn();
        enemy.toggleTurn();
      }
    }
  });
  return cell;
}
