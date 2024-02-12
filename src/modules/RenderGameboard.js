import createHtmlElement from "../helperFunction/CreateHtmlElement";
// eslint-disable-next-line no-unused-vars
import gameboardStyle from "../styles/gameboard.css";

export default function renderGameboard(gameBoardArray, player) {
  const gameboardContainer = document.querySelector(`#${player}`);
  for (let i = 0; i < gameBoardArray.length; i += 1) {
    for (let j = 0; j < gameBoardArray[i].length; j += 1) {
      const cell = createHtmlElement("div", { id: `${i},${j}`, class: "cell" });
      gameboardContainer.appendChild(cell);
    }
  }
}
