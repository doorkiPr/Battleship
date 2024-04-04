// eslint-disable-next-line no-unused-vars
import gameboardStyle from "../../styles/gameboard.css";
import createHtmlElement from "../../helperFunction/CreateHtmlElement";
import Ship from "../Ship";

export default function RenderCreatorGameboard(player, shipsArray, getSelectedShip, dialog) {
  const gameboardContainer = createHtmlElement("div", { id: `creationGameboard`, class: "gameBoard" });
  const gameBoardArray = player.getGameboard().getGameboardArray();

  for (let i = 0; i < gameBoardArray.length; i += 1) {
    for (let j = 0; j < gameBoardArray.length; j += 1) {
      const cell = createHtmlElement("div", { id: `${i},${j}`, class: "cell" });
      if (gameBoardArray[i][j]) cell.textContent = gameBoardArray[i][j].getName();
      cell.addEventListener("click", () => {
        player.getGameboard().placeShip(Ship(getSelectedShip()), i, j);
        gameboardContainer.remove();
        RenderCreatorGameboard(player, shipsArray, getSelectedShip, dialog);
      });
      gameboardContainer.appendChild(cell);
    }
  }
  dialog.appendChild(gameboardContainer);
}
