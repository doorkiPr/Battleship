import createHtmlElement from "../helperFunction/CreateHtmlElement";

export default function renderCell(gameBoardArray, i, j) {
  const cell = createHtmlElement("div", { id: `${i},${j}`, class: "cell" });
  if (gameBoardArray[i][j]) {
    if (gameBoardArray[i][j] === "missed") cell.textContent = "X";
    if (gameBoardArray[i][j].isHit) cell.textContent = "hit";
    if (gameBoardArray[i][j].getName) cell.textContent = gameBoardArray[i][j].getName();
  }
  return cell;
}
