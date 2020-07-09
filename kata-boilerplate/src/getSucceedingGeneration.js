function exist(generation, x, y)
{
    return typeof generation[y] !== 'undefined' && typeof generation[y][x] !== 'undefined';
}

function isAlive(generation, x, y)
{
    return generation[y][x] === '*';
}

function getNofAliveNeighbours(generation, x, y)
{
    return [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]].reduce((counter, offset) => {
        return counter + (exist(generation, x + offset[0], y + offset[1]) && isAlive(generation, x + offset[0], y + offset[1]) ? 1 : 0)
    }, 0);
}

function getSucceedingGeneration(initialGenerationConfig, evolveByNGenerations = 1)
{
    return [...Array(evolveByNGenerations)]
        .reduce(
            generation => { // evolving
                return generation.map((row,y) => row.map((cell,x) => {
                    let nofAliveNeighbours = getNofAliveNeighbours(generation, x, y);
                    return cell === '.'
                        ? (nofAliveNeighbours === 3 ? '*' : '.')
                        : (nofAliveNeighbours === 2 || nofAliveNeighbours === 3 ? '*' : '.');
                }));
            },
            initialGenerationConfig.split(/\r?\n/)
                .map(line => line.trim()) // remove irrelevant characters
                .slice(1) // f*** the grid size
                .map(line => line.split(''))
        )
        .map(line => line.join(''))
        .join('\r\n');
}

module.exports = {
    exist,
    isAlive,
    getNofAliveNeighbours,
    getSucceedingGeneration
};
