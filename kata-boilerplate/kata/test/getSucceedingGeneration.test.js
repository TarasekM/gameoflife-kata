const fs = require('fs');
const {Generation} = require('../src/generation.js');

test.each([
    [fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8'), fs.readFileSync(__dirname + '/examples/example01-output.txt', 'utf8')],
])('if the second generation is valid', (initialGenerationConfig, expectedOutput) => {
    expect(new Generation(initialGenerationConfig).getSucceedingGeneration(1)).toBe(expectedOutput);
});

test.each([
    [fs.readFileSync(__dirname + '/examples/example03-input.txt', 'utf8'), fs.readFileSync(__dirname + '/examples/example03-output.txt', 'utf8')],
])('if the second generation is valid', (initialGenerationConfig, expectedOutput) => {
    expect(new Generation(initialGenerationConfig).getSucceedingGeneration(11)).toBe(expectedOutput);
});