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

test("returns ship when placed in the gameboard", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Destroyer");

  testGameboard.placeShip(myShip, 0, 2, "vertical");

  expect(testGameboard.getGameboardArray()[0][2]).toBe(myShip);
});
test("make sure the ship spans across the gameboard depending on it's length", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Destroyer");

  testGameboard.placeShip(myShip, 1, 2);

  expect(testGameboard.getGameboardArray()[1][2]).toBe(myShip);
  expect(testGameboard.getGameboardArray()[1][3]).toBe(myShip);
});
test("make sure the ship dosen't span more then it's length", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Destroyer");

  testGameboard.placeShip(myShip, 1, 2);
  expect(testGameboard.getGameboardArray()[1][4]).toBe(null);
});
test("make sure the ship spans across the gameboard depending on it's length in the VERTICAL axis", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Destroyer");

  testGameboard.placeShip(myShip, 0, 2, "vertical");

  expect(testGameboard.getGameboardArray()[0][2]).toBe(myShip);
  expect(testGameboard.getGameboardArray()[1][2]).toBe(myShip);
});
test("make sure the ship spans across the gameboard depending on it's length in the VERTICAL axis", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Cruiser");

  testGameboard.placeShip(myShip, 3, 0, "vertical");

  expect(testGameboard.getGameboardArray()[3][0]).toBe(myShip);
  expect(testGameboard.getGameboardArray()[4][0]).toBe(myShip);
  expect(testGameboard.getGameboardArray()[5][0]).toBe(myShip);
});
test("make sure the ship dosen't span more then it's length in the VERTICAL axis", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Cruiser");

  testGameboard.placeShip(myShip, 3, 0, "vertical");
  expect(testGameboard.getGameboardArray()[6][0]).toBe(null);
});
test("ship only spans in VERTICAL axis", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Cruiser");

  testGameboard.placeShip(myShip, 3, 0, "vertical");
  expect(testGameboard.getGameboardArray()[3][0]).toBe(myShip);
  expect(testGameboard.getGameboardArray()[4][0]).toBe(myShip);
  expect(testGameboard.getGameboardArray()[5][0]).toBe(myShip);
  expect(testGameboard.getGameboardArray()[3][1]).toBe(null);
});
test("ship only spans in HORIZONTAL axis", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Cruiser");

  testGameboard.placeShip(myShip, 3, 0);
  expect(testGameboard.getGameboardArray()[3][0]).toBe(myShip);
  expect(testGameboard.getGameboardArray()[3][1]).toBe(myShip);
  expect(testGameboard.getGameboardArray()[3][2]).toBe(myShip);
  expect(testGameboard.getGameboardArray()[4][0]).toBe(null);
});

test("don't place ship if there's no place in the gameArray", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Destroyer");

  testGameboard.placeShip(myShip, 1, 9);
  expect(testGameboard.getGameboardArray()[1][9]).toBe(null);
});
test("don't place ship if there's no place in the gameArray", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Carrier");

  testGameboard.placeShip(myShip, 1, 6);
  expect(testGameboard.getGameboardArray()[1][6]).toBe(null);
});
test("don't place ship if there's no place in the gameArray on Verticl Axis", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Destroyer");

  testGameboard.placeShip(myShip, 9, 3, "vertical");
  expect(testGameboard.getGameboardArray()[9][3]).toBe(null);
});
test("don't place ship if there's no place in the gameArray on Vertical Axis", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Carrier");

  testGameboard.placeShip(myShip, 6, 2, "vertical");
  expect(testGameboard.getGameboardArray()[6][2]).toBe(null);
});
test("ignore second ship  if it's gonna span into first ship", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Carrier");
  const anotherShip = new Ship("Destroyer");

  testGameboard.placeShip(myShip, 1, 5);
  testGameboard.placeShip(anotherShip, 1, 4);
  expect(testGameboard.getGameboardArray()[1][4]).toBe(null);
});
test("ignore second ship  if it's gonna span into first ship on Vertical Axis", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Carrier");
  const anotherShip = new Ship("Destroyer");

  testGameboard.placeShip(myShip, 1, 5);
  testGameboard.placeShip(anotherShip, 1, 7, "vertical");
  expect(testGameboard.getGameboardArray()[2][7]).toBe(null);
});

test("ignores second ship if it's placed on the same coordinates as the first one", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Carrier");
  const secondShip = new Ship("Submarine");

  testGameboard.placeShip(myShip, 1, 2);
  testGameboard.placeShip(secondShip, 1, 2);

  expect(testGameboard.getGameboardArray()[1][2]).toBe(myShip);
});

test("ship returns correct hitpoints after being hit", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Carrier");
  testGameboard.placeShip(myShip, 1, 2);
  testGameboard.receiveAttack(1, 2);

  expect(testGameboard.getGameboardArray()[1][2].getHitPoints()).toBe(4);
});
test("ship returns correct hitpoints after being hit multiple times", () => {
  const testGameboard = new Gameboard("testing");
  const myShip = new Ship("Carrier");
  testGameboard.placeShip(myShip, 1, 2);
  testGameboard.receiveAttack(1, 2);
  testGameboard.receiveAttack(1, 3);
  testGameboard.receiveAttack(1, 4);
  expect(testGameboard.getGameboardArray()[1][2].getHitPoints()).toBe(2);
});
