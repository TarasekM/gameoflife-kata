const fs = require('fs');
const {Generation} = require('../src/generation.js');

const testData = fs.readFileSync(__dirname + '/examples/example02-input.txt', 'utf8');


test("test if cell is alive", () => {
    var generation = new Generation(testData);
    expect(generation.isAlive(-1, -1)).toBe(0);
});

test("test if cell is alive", () => {
    var generation = new Generation(testData);
    expect(generation.isAlive(0, 0)).toBe(1);
});

test("test if cell is alive", () => {
    var generation = new Generation(testData);
    expect(generation.isAlive(1, 0)).toBe(0);
});

test("test if cell is alive", () => {
    var generation = new Generation(testData);
    expect(generation.isAlive(10, 10)).toBe(0);
});

test("Number of neighbours is 0", () => {
    var generation = new Generation(testData);
    expect(generation.getNumOfNeighbours(0, 0)).toBe(0);
});

test("Number of neighbours is 1", () => {
    var generation = new Generation(testData);
    expect(generation.getNumOfNeighbours(2, 3)).toBe(1);
});

test("Number of neighbours is 2", () => {
    var generation = new Generation(testData);
    expect(generation.getNumOfNeighbours(2, 1)).toBe(2);
});

test("Number of neighbours is 4", () => {
    var generation = new Generation(testData);
    expect(generation.getNumOfNeighbours(3, 1)).toBe(4);
});

test("Number of neighbours is 5", () => {
    var generation = new Generation(testData);
    expect(generation.getNumOfNeighbours(4, 2)).toBe(5);
});

