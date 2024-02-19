/* eslint-disable no-param-reassign */
export default function Gameboard(name) {
  const gameBoardArray = [];
  const receivedCoordinatesArray = [];
  const placedShips = [];
  for (let y = 0; y < 10; y += 1) {
    gameBoardArray.push(new Array(10).fill(null));
  }
  const getName = () => name.toString();
  const getGameboardArray = () => gameBoardArray;
  function placeShip(ship, y, x, axis = "horizontal") {
    if (y < 0 || y > 10 || x < 0 || x > 10) return false;
    if (gameBoardArray[y][x]) return false;
    if (axis === "vertical") {
      if (gameBoardArray[y + ship.getLength() - 1] === undefined) return false; // if ship spans across a cell that is out of limits don't place it
      if (gameBoardArray[y + ship.getLength() - 1][x] !== null) return false; // if ship spans across a cell that is not empty don't place it
      for (let i = 0; i < ship.getLength(); i += 1) {
        gameBoardArray[y + i].splice(x, 1, ship); // itterate through each row , replace element with an index of X by ship object
        placedShips.push(ship);
      }
      return true;
    }

    if (gameBoardArray[y][x + ship.getLength() - 1] !== null) return false; // if ship spans across a cell that is out of limits or contains another ship don't place it
    for (let i = 0; i < ship.getLength(); i += 1) {
      gameBoardArray[y].splice(x + i, 1, ship); // select correct row, itterate through each cell changing the x index replacing each one by ship object
      placedShips.push(ship);
    }
    return true;
  }

  function receiveAttack(y, x) {
    if (y < 0 || y > 10 || x < 0 || x > 10) return false;
    if (receivedCoordinatesArray.find((coordinates) => coordinates.y === y && coordinates.x === x))
      return false; // check if coordinates exist in array
    if (gameBoardArray[y][x] === "missed") return false;
    receivedCoordinatesArray.push({ y, x });
    if (!gameBoardArray[y][x]) gameBoardArray[y].splice(x, 1, "missed");
    if (gameBoardArray[y][x] !== "missed") {
      gameBoardArray[y][x].hit();
      gameBoardArray[y].splice(x, 1, { isHit: true, ship: gameBoardArray[y][x] });
    }
    return true;
  }

  function areAllSunk() {
    return placedShips.every((ship) => ship.isSunk() === true);
  }

  return {
    getGameboardArray,
    getName,
    placeShip,
    receiveAttack,
    areAllSunk,
  };
}
