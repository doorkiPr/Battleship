/* eslint-disable no-param-reassign */
export default function Gameboard(name) {
  const gameBoardArray = [];
  for (let y = 0; y < 10; y += 1) {
    gameBoardArray.push(new Array(10).fill(null));
  }
  const getName = () => name.toString();
  const getGameboardArray = () => gameBoardArray;

  function placeShip(ship, y, x, axis = "horizontal") {
    if (gameBoardArray[y][x]) return;

    if (axis === "vertical") {
      if (gameBoardArray[y + ship.getLength() - 1] === undefined) return; // if ship spans across a cell that is out of limits don't place it
      if (gameBoardArray[y + ship.getLength() - 1][x] !== null) return; // if ship spans across a cell that is not empty don't place it
      for (let i = 0; i < ship.getLength(); i += 1) {
        gameBoardArray[y + i].splice(x, 1, ship); // itterate through each row , replace element with an index of X by ship object
      }
      return;
    }

    if (gameBoardArray[y][x + ship.getLength() - 1] !== null) return; // if ship spans across a cell that is out of limits or contains another ship don't place it
    for (let i = 0; i < ship.getLength(); i += 1) {
      gameBoardArray[y].splice(x + i, 1, ship); // select correct row, itterate through each cell changing the x index replacing each one by ship object
    }
  }

  return {
    getGameboardArray,
    getName,
    placeShip,
  };
}
