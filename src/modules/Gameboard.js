/* eslint-disable no-param-reassign */
export default function Gameboard(name) {
  const gameBoard = [];
  const receivedCoordinates = [];
  const placedShips = [];
  for (let y = 0; y < 10; y += 1) {
    gameBoard.push(new Array(10).fill(null));
  }
  const getName = () => name.toString();
  const getGameboardArray = () => gameBoard;

  function placeShip(ship, y, x, axis = "horizontal") {
    if (y < 0 || y > 10 || x < 0 || x > 10) return false;

    if (axis === "vertical") {
      const isOutOfBoundVertical = y + ship.getLength() > gameBoard.length;
      if (isOutOfBoundVertical) return false;

      for (let i = 0; i < ship.getLength(); i += 1) {
        const isCellOccupied = gameBoard[y + i][x] !== null;
        if (isCellOccupied) return false;
      }

      for (let i = 0; i < ship.getLength(); i += 1) {
        gameBoard[y + i].splice(x, 1, ship);
        placedShips.push(ship);
      }
      return true;
    }

    const isOutOfBoundHorizontal = x + ship.getLength() > gameBoard[y].length;
    if (isOutOfBoundHorizontal) return false;

    for (let i = 0; i < ship.getLength(); i += 1) {
      const isCellOccupied = gameBoard[y][x + i] !== null;
      if (isCellOccupied) return false;
    }

    for (let i = 0; i < ship.getLength(); i += 1) {
      gameBoard[y].splice(x + i, 1, ship);
      placedShips.push(ship);
    }
    return true;
  }

  function receiveAttack(y, x) {
    if (y < 0 || y > 10 || x < 0 || x > 10) return false;

    const cell = gameBoard[y][x];
    if (receivedCoordinates.some((coordinates) => coordinates.y === y && coordinates.x === x)) return false; // check if coordinates exist in array
    if (cell === "missed") return false;

    receivedCoordinates.push({ y, x });

    if (!cell) {
      gameBoard[y].splice(x, 1, "missed");
      return true;
    }
    if (cell !== "missed") {
      cell.hit();
      gameBoard[y].splice(x, 1, { isHit: true, ship: cell });
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
