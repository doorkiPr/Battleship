// eslint-disable-next-line no-unused-vars
import gameboardStyle from "../styles/gameboard.css";
import renderCell from "./RenderCell";

export default function renderGameboard(player, playerNature, enemy) {
  const gameboardContainer = document.querySelector(`#${playerNature}`);
  const gameBoardArray = player.getGameboard().getGameboardArray();

  for (let i = 0; i < gameBoardArray.length; i += 1) {
    for (let j = 0; j < gameBoardArray.length; j += 1) {
      const cell = renderCell(gameBoardArray, i, j, player, enemy);
      cell.addEventListener("click", () => {
        gameboardContainer.innerHTML = "";
        renderGameboard(player, playerNature, enemy);
      });
      gameboardContainer.appendChild(cell);
    }
  }
}
