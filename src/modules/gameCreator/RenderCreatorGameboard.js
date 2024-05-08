/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-unused-vars
import gameboardStyle from "../../styles/gameboard.css";
import createHtmlElement from "../../helperFunction/CreateHtmlElement";
import Ship from "../Ship";
import renderShipTable from "./RenderShipTable";
import renderGameboard from "../RenderGameboard";

export default function RenderCreatorGameboard(
  playerOne,
  playerTwo,
  shipsArray,
  getSelectedShip,
  dialog,
  updateSelectedShip
) {
  const wrapper = createHtmlElement("div", { id: "gameCreatorWrapper" });
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
    renderGameboard(playerOne, playerTwo);
    renderGameboard(playerTwo, playerOne);
    dialog.close();
  });

  const gameboard = playerOne.getGameboard().getGameboardArray();
  renderShipTable(shipsArray, updateSelectedShip, wrapper);

  for (let i = 0; i < gameboard.length; i += 1) {
    for (let j = 0; j < gameboard.length; j += 1) {
      const cell = createHtmlElement("div", { id: `${i},${j}`, class: "cell" });

      if (gameboard[i][j]) cell.classList.add(gameboard[i][j].getName().toLowerCase(), "ship");

      cell.addEventListener("click", () => {
        const foundIndex = shipsArray.findIndex((ship) => ship.name === getSelectedShip());

        if (
          getSelectedShip() && // first check is selected ship is not null
          shipsArray[foundIndex].quantity && // then check if the quantity is above zero then place the ship
          playerOne.getGameboard().placeShip(Ship(getSelectedShip()), i, j, axis)
        ) {
          shipsArray[foundIndex].quantity -= 1;
          gameboardWrapper.remove();
          document.querySelector("#shipTable").remove();
          RenderCreatorGameboard(
            playerOne,
            playerTwo,
            shipsArray,
            getSelectedShip,
            dialog,
            updateSelectedShip
          );
        }
      });

      gameboardContainer.appendChild(cell);
    }
  }
  buttonWrapper.appendChild(toggleAxis);
  buttonWrapper.appendChild(startGameBtn);
  gameboardWrapper.appendChild(gameboardContainer);
  gameboardWrapper.appendChild(buttonWrapper);
  wrapper.appendChild(gameboardWrapper);
  dialog.appendChild(wrapper);
}
