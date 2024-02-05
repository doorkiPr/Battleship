import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";

test("returns the correct gameboard name", () => {
  expect(new Gameboard("player1").getName()).toBe("player1");
});
test("returns the correct gameboard name when passed numbers instead of strings", () => {
  expect(new Gameboard(25).getName()).toBe("25");
});

test("returns the correct number of cells in the gameBoard array", () => {
  let cellCount = 0;
  new Gameboard().getGameboardArray().forEach((row) => {
    cellCount += row.length;
  });
  expect(cellCount).toBe(100);
});

test("returns ship when placed in the gameboard", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Carrier");

  testGameboard.placeShip(myShip, 1, 2);

  expect(testGameboard.getGameboardArray()[1][2]).toBe(myShip);
});
