import Gameboard from "../modules/Gameboard";
import Player from "../modules/Player";
import Ship from "../modules/Ship";

test("player returns correct name ", () => {
  const player1 = Player("playerOne", Gameboard);
  expect(player1.getName()).toBe("playerOne");
});
test("player returns correct nature ", () => {
  const player1 = Player("playerOne", Gameboard);
  expect(player1.getNature()).toBe("human");
});
test("player returns correct name ", () => {
  const player1 = Player("playerOne", Gameboard, false, "computer");
  expect(player1.getNature()).toBe("computer");
});

test("valid attack returns true ", () => {
  const player1 = Player("playerOne", Gameboard);
  const player2 = Player("playerTwo", Gameboard);
  player2.getGameboard().placeShip(Ship("Destroyer"), 0, 0, "vertical");
  expect(player1.attack(player2, 1, 0)).toBe(true);
});
test("invalid attack returns false ", () => {
  const player1 = Player("playerOne", Gameboard);
  const player2 = Player("playerTwo", Gameboard);
  player2.getGameboard().placeShip(Ship("Destroyer"), 0, 0, "vertical");
  player1.attack(player2, 0, 0);
  expect(player1.attack(player2, 0, 0)).toBe(false);
});
test("invalid attack returns false (out of bound) ", () => {
  const player1 = Player("playerOne", Gameboard);
  const player2 = Player("playerTwo", Gameboard);
  player2.getGameboard().placeShip(Ship("Destroyer"), 0, 0, "vertical");
  player1.attack(player2, 0, 0);
  expect(player1.attack(player2, 11, 0)).toBe(false);
});

test("hasWon returns true after sinking all enemy ships ", () => {
  const player1 = Player("playerOne", Gameboard);
  const player2 = Player("playerTwo", Gameboard);
  player2.getGameboard().placeShip(Ship("Destroyer"), 0, 0, "vertical");
  player1.attack(player2, 0, 0);
  player1.attack(player2, 1, 0);

  expect(player1.hasWon(player2)).toBe(true);
});
test("hasWon returns false if enemy ships aren't all sunk ", () => {
  const player1 = Player("playerOne", Gameboard);
  const player2 = Player("playerTwo", Gameboard);
  player2.getGameboard().placeShip(Ship("Destroyer"), 0, 0, "vertical");
  player2.getGameboard().placeShip(Ship("Destroyer"), 5, 2, "vertical");
  player1.attack(player2, 0, 0);
  player1.attack(player2, 1, 0);

  expect(player1.hasWon(player2)).toBe(false);
});
test("turn returns correct value", () => {
  const player1 = Player("playerOne", Gameboard);
  const player2 = Player("playerTwo", Gameboard, false);

  expect(player1.getTurn()).toBe(true);
  expect(player2.getTurn()).toBe(false);
});
test("turn returns correct value when toggled", () => {
  const player1 = Player("playerOne", Gameboard);
  player1.toggleTurn();
  expect(player1.getTurn()).toBe(false);
});
