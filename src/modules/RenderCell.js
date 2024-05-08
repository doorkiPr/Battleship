import createHtmlElement from "../helperFunction/CreateHtmlElement";
import computerAI from "./ComputerAI";
import renderInformation from "./RenderInformation";
// eslint-disable-next-line no-unused-vars
import style from "../styles/cell.css";
import GenerateIcon from "../helperFunction/generateIcon";

export default function renderCell(gameBoardArray, i, j, player, enemy, renderGameboard) {
  const cell = createHtmlElement("div", { id: `${i},${j}`, class: "cell" });

  function isGameFinished() {
    return player.getGameboard().areAllSunk() || enemy.getGameboard().areAllSunk();
  }

  function handleTurnInformation() {
    renderInformation("turn", player, enemy);

    if (player.getGameboard().areAllSunk()) renderInformation("win", player, enemy);
    if (enemy.getGameboard().areAllSunk()) renderInformation("win", enemy, player);
  }

  function playComputerTurn() {
    // if it is the computer's gameboard
    enemy.toggleTurn(); // set off the turn of the enemy (human player)

    setTimeout(() => {
      computerAI().computerAttack(player, enemy);
      renderGameboard(enemy, player);
      renderInformation("turn", enemy, player);
      enemy.toggleTurn(); // set it back on after the computer finished it's play

      if (player.getGameboard().areAllSunk()) renderInformation("win", player, enemy);
      if (enemy.getGameboard().areAllSunk()) renderInformation("win", enemy, player);
    }, 400);
  }

  function handleEnemyTurn() {
    if (enemy.attack(player, ...cell.id.split(","))) {
      handleTurnInformation();

      if (player.getNature() === "computer") {
        playComputerTurn();
      } else {
        player.toggleTurn();
        enemy.toggleTurn();
      }
    }
  }

  cell.addEventListener("click", () => {
    if (isGameFinished()) return;

    if (enemy.getTurn()) {
      handleEnemyTurn();
      renderGameboard(player, enemy);
    }
  });

  const gameboardCell = gameBoardArray[i][j];

  if (gameboardCell) {
    if (gameboardCell.isHit) {
      cell.classList.add("ship");

      if (gameboardCell.ship.isSunk()) {
        cell.appendChild(GenerateIcon().destroyed);

        cell.classList.add(gameboardCell.ship.getName().toLowerCase());
      } else cell.appendChild(GenerateIcon().fire);

      return cell;
    }

    if (gameboardCell === "missed") {
      cell.appendChild(GenerateIcon().missed);
      return cell;
    }

    if (player.getNature() === "human") {
      cell.classList.add(gameboardCell.getName().toLowerCase(), "ship");
      return cell;
    }
  }
  return cell;
}
