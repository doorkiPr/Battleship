/* eslint-disable no-new */
import Ship from "../modules/Ship";

test("returns the correct name ", () => {
  expect(new Ship("Carrier").getName()).toBe("Carrier");
});

test("returns the correct length ", () => {
  expect(new Ship("Carrier").getLength()).toBe(5);
});
test("returns the correct length ", () => {
  expect(new Ship("Battleship").getLength()).toBe(4);
});
test("returns the correct length ", () => {
  expect(new Ship("Cruiser").getLength()).toBe(3);
});
test("returns the correct length ", () => {
  expect(new Ship("Submarine").getLength()).toBe(3);
});
test("returns the correct length ", () => {
  expect(new Ship("Destroyer").getLength()).toBe(2);
});

test("Throws Error if argument is a wrong name", () => {
  expect(() => {
    new Ship("Caravane");
  }).toThrow("Name isn't valid");
});
test("Throws Error if no argument is passed ", () => {
  expect(() => {
    new Ship();
  }).toThrow("Name isn't valid");
});
test("Throws Error if argument is not a string ", () => {
  expect(() => {
    new Ship(5);
  }).toThrow("Name isn't valid");
});

test("returns the correct hitPoints ", () => {
  expect(new Ship("Destroyer").getHitPoints()).toBe(2);
});

test("returns the correct hitPoints after being hit once ", () => {
  const testShip = new Ship("Destroyer");
  testShip.hit();
  expect(testShip.getHitPoints()).toBe(1);
});
test("returns the correct hitPoints after being hit multiple Times ", () => {
  const testShip = new Ship("Carrier");
  testShip.hit();
  testShip.hit();
  testShip.hit();
  expect(testShip.getHitPoints()).toBe(2);
});
test("returns the correct hitPoints after being hit until no hitPoints are left ", () => {
  const testShip = new Ship("Destroyer");
  testShip.hit();
  testShip.hit();
  expect(testShip.getHitPoints()).toBe(0);
});
test("throws an Error if you try to hit the ship after reaching 0 hitPoints ", () => {
  const testShip = new Ship("Destroyer");
  expect(() => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
  }).toThrow("Ship is already at 0 hitpoints");
});

test("returns true when ship hitPoints reach 0 ", () => {
  const testShip = new Ship("Destroyer");
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
test("returns false if ship hitPoints haven't reached 0 ", () => {
  const testShip = new Ship("Destroyer");
  testShip.hit();
  expect(testShip.isSunk()).toBe(false);
});
