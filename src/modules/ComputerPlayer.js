import Gameboard from "./Gameboard";
import Player from "./Player";
import Ship from "./Ship";

export default function getComputerPlayer(shipsArray) {
  const computerPlayer = Player("computer", Gameboard, false);

  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  // use a loop that keeps placing ships randomly while ship placement is legal for every ship
  function placeComputerShips() {
    function place(name) {
      if (!computerPlayer.getGameboard().placeShip(Ship(name), getRandomNumber(), getRandomNumber()))
        place(name);
    }

    shipsArray.forEach((ship) => {
      for (let i = 0; i < ship.quantity; i += 1) {
        place(ship.name);
      }
      // loop quantity ammount of time
    });
  }

  placeComputerShips();
  return computerPlayer;
}
