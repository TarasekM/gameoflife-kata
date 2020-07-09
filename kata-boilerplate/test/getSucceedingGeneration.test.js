const fs = require('fs');
const { exist, isAlive, getNofAliveNeighbours, getSucceedingGeneration } = require('../src/getSucceedingGeneration.js');

test('if exist function check the cell existence', () => {
    expect(exist([['.','.'],['.','*']], 1, 1)).toBeTruthy();
    expect(exist([['.','.'],['.','*']], 2, 1)).toBeFalsy();
});

test('if isAlive function check the cell pzazz', () => {
    expect(isAlive([['.','.'],['.','*']], 1, 1)).toBeTruthy();
    expect(isAlive([['.','.'],['.','*']], 0, 1)).toBeFalsy();
});

test('if getNofAliveNeighbours function returns the correct number of alive neighbours', () => {
    expect(getNofAliveNeighbours([['.','.'],['.','*']], 1, 1)).toBe(0);
    expect(getNofAliveNeighbours([['.','.'],['.','*']], 0, 1)).toBe(1);
});

test.each([
    [fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8'), fs.readFileSync(__dirname + '/examples/example01-output.txt', 'utf8'), 1],
    [fs.readFileSync(__dirname + '/examples/example02-input.txt', 'utf8'), fs.readFileSync(__dirname + '/examples/example02-output.txt', 'utf8'), 2],
    [fs.readFileSync(__dirname + '/examples/example03-input.txt', 'utf8'), fs.readFileSync(__dirname + '/examples/example03-output.txt', 'utf8'), 11],
])('if the second generation is valid', (initialGenerationConfig, expectedOutput, evolveByNGenerations) => {
    let output = getSucceedingGeneration(initialGenerationConfig, evolveByNGenerations);
    console.log(output);
    expect(output).toBe(expectedOutput);
});
