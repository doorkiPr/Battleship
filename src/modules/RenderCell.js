import createHtmlElement from "../helperFunction/CreateHtmlElement";
import computerAI from "./ComputerAI";
import renderInformation from "./RenderInformation";
// eslint-disable-next-line no-unused-vars
import style from "../styles/cell.css";
import GenerateIcon from "../helperFunction/generateIcon";

export default function renderCell(gameBoardArray, i, j, player, enemy, renderGameboard) {
  const cell = createHtmlElement("div", { id: `${i},${j}`, class: "cell" });
  if (gameBoardArray[i][j]) {
    if (gameBoardArray[i][j] === "missed") cell.appendChild(GenerateIcon().missed);

    if (gameBoardArray[i][j].isHit) {
      cell.classList.add("ship");

      if (gameBoardArray[i][j].ship.isSunk()) {
        cell.appendChild(GenerateIcon().destroyed);
        cell.classList.add(gameBoardArray[i][j].ship.getName().toLowerCase());
      } else cell.appendChild(GenerateIcon().fire);
    }

    if (gameBoardArray[i][j].getName && player.getNature() === "human")
      cell.classList.add(gameBoardArray[i][j].getName().toLowerCase(), "ship");
  }

  cell.addEventListener("click", () => {
    if (player.getGameboard().areAllSunk() || enemy.getGameboard().areAllSunk()) return;

    if (enemy.getTurn()) {
      if (enemy.attack(player, ...cell.id.split(","))) {
        renderInformation("turn", player, enemy);

        if (player.getGameboard().areAllSunk()) renderInformation("win", player, enemy);
        if (enemy.getGameboard().areAllSunk()) renderInformation("win", enemy, player);

        if (player.getNature() === "computer") {
          // if it is the computer's gameboard
          enemy.toggleTurn(); // set off the turn of the enemy (human player)

          setTimeout(() => {
            computerAI().computerAttack(player, enemy);
            renderGameboard(enemy, player);
            renderInformation("turn", enemy, player);
            enemy.toggleTurn(); // set it back on after the computer finished it's play

            if (player.getGameboard().areAllSunk()) renderInformation("win", player, enemy);
            if (enemy.getGameboard().areAllSunk()) renderInformation("win", enemy, player);
          }, 10);
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
