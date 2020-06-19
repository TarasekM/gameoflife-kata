# Game of Life Kata 

## About

The Kata is about writing a function that calculates 
the next generation of Conway’s Game of Life.
We strongly encourage creating Unit tests alongside
the code! Tests are an essential part of making Kata(s)
on Coding Dojo Silesia events.

## Problem description

The below paragraphs includes a concise description
of Game of Life, you can find more information
by clicking references at the end of this readme.

You start with a two dimensional grid of cells, where
each cell is either alive or dead. In this version of
the problem, the grid is finite, and no life can exist
off the edges.

When calculating the next generation of the grid, follow
these rules:

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.

You should write a program that can accept an arbitrary
grid of cells (as string input), and will output a similar grid
showing the next generation (as returned string output).

## Input & output

The input string looks like this:
4 8
........
....*...
...**...
........

The output should look like this:
........
...**...
...**...
........

## Boilerplate

We prepared some files to boost up the initial phase of
this Kata. This includes:
- src/getSucceedingGeneration.js
// ^-- put your extraordinary solution here
- test/getSucceedingGeneration.test
// ^-- put your even more extraordinary Unit tests here

We propose a testing library which is Jest (included as an npm
dependency), you can run it easily by command: npm test.

## Suggested Test Cases

Make sure you have enough coverage of edge cases - where
there are births and deaths at the edge of the grid.

## References

- [https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
