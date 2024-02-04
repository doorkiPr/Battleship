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
