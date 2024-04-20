import createHtmlElement from "../helperFunction/CreateHtmlElement";
import computerAI from "./ComputerAI";
import renderInformation from "./RenderInformation";

export default function renderCell(gameBoardArray, i, j, player, enemy, renderGameboard) {
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

    if (enemy.getTurn()) {
      if (enemy.attack(player, ...cell.id.split(","))) {
        renderInformation("turn", player);

        if (player.getGameboard().areAllSunk()) renderInformation("win", player, enemy);
        if (enemy.getGameboard().areAllSunk()) renderInformation("win", enemy, player);

        if (player.getNature() === "computer") {
          computerAI().computerAttack(player, enemy);
          renderGameboard(enemy, player);
        } else {
          player.toggleTurn();
          enemy.toggleTurn();
        }
      }
      renderGameboard(player, enemy);
    }
  });
  return cell;
}
