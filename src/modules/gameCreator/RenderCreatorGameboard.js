/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-unused-vars
import gameboardStyle from "../../styles/gameboard.css";
import createHtmlElement from "../../helperFunction/CreateHtmlElement";
import Ship from "../Ship";
import renderShipTable from "./RenderShipTable";

export default function RenderCreatorGameboard(
  player,
  shipsArray,
  getSelectedShip,
  dialog,
  updateSelectedShip
) {
  const gameboardContainer = createHtmlElement("div", { id: `creationGameboard`, class: "gameBoard" });
  const gameBoardArray = player.getGameboard().getGameboardArray();
  renderShipTable(shipsArray, updateSelectedShip, dialog);

  for (let i = 0; i < gameBoardArray.length; i += 1) {
    for (let j = 0; j < gameBoardArray.length; j += 1) {
      const cell = createHtmlElement("div", { id: `${i},${j}`, class: "cell" });

      if (gameBoardArray[i][j]) cell.textContent = gameBoardArray[i][j].getName();

      cell.addEventListener("click", () => {
        const foundIndex = shipsArray.findIndex((ship) => ship.name === getSelectedShip());

        if (
          getSelectedShip() && // first check is selected ship is not null
          shipsArray[foundIndex].quantity && // then check if the quantity is above zero then place the ship
          player.getGameboard().placeShip(Ship(getSelectedShip()), i, j)
        ) {
          shipsArray[foundIndex].quantity -= 1;
          gameboardContainer.remove();
          document.querySelector("#shipTable").remove();
          RenderCreatorGameboard(player, shipsArray, getSelectedShip, dialog, updateSelectedShip);
        }
      });

      gameboardContainer.appendChild(cell);
    }
  }
  dialog.appendChild(gameboardContainer);
}
