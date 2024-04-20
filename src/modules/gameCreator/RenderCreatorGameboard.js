/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-unused-vars
import gameboardStyle from "../../styles/gameboard.css";
import createHtmlElement from "../../helperFunction/CreateHtmlElement";
import Ship from "../Ship";
import renderShipTable from "./RenderShipTable";
import renderGameboard from "../RenderGameboard";

export default function RenderCreatorGameboard(
  player,
  computer,
  shipsArray,
  getSelectedShip,
  dialog,
  updateSelectedShip
) {
  const gameboardWrapper = createHtmlElement("div", { id: "creationGameboardWrapper" });
  const gameboardContainer = createHtmlElement("div", { id: `creationGameboard`, class: "gameBoard" });
  const buttonWrapper = createHtmlElement("div", { id: "creationButtonWrapper" });
  const toggleAxis = createHtmlElement("button", { id: "toggleAxisBtn", class: "button" });
  const startGameBtn = createHtmlElement("button", { id: "startGameBtn", class: "button" });

  toggleAxis.textContent = "horizontal axis";
  startGameBtn.textContent = "Start Game";

  let axis = "horizontal";

  toggleAxis.addEventListener("click", () => {
    axis = axis === "horizontal" ? "vertical" : "horizontal";
    toggleAxis.textContent = `${axis} axis`;
  });

  startGameBtn.addEventListener("click", () => {
    renderGameboard(player, computer);
    renderGameboard(computer, player);
    dialog.close();
  });
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
          player.getGameboard().placeShip(Ship(getSelectedShip()), i, j, axis)
        ) {
          shipsArray[foundIndex].quantity -= 1;
          gameboardWrapper.remove();
          document.querySelector("#shipTable").remove();
          RenderCreatorGameboard(player, computer, shipsArray, getSelectedShip, dialog, updateSelectedShip);
        }
      });

      gameboardContainer.appendChild(cell);
    }
  }
  buttonWrapper.appendChild(toggleAxis);
  buttonWrapper.appendChild(startGameBtn);
  gameboardWrapper.appendChild(gameboardContainer);
  gameboardWrapper.appendChild(buttonWrapper);
  dialog.appendChild(gameboardWrapper);
}
