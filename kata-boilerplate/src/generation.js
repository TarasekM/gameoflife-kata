const state = {
    ALIVE: "*",
    DEAD: "."
}

class Generation{
    constructor(initialGenerationConfig){
        this.population = this.mapInitialGenerationConfig(initialGenerationConfig);
    }
    
    mapInitialGenerationConfig(initialGenerationConfig) {
        var mappedInitialGenerationConfig = [...initialGenerationConfig.split("\r\n").slice(1)];
        for (let row = 0; row < mappedInitialGenerationConfig.length; row++){
            mappedInitialGenerationConfig[row] = mappedInitialGenerationConfig[row].split('');
        }
        return mappedInitialGenerationConfig;
    }

    toString(population){
        var output = [...population]

        for (let row = 0; row < output.length; row ++){
            output[row] = output[row].join('');
        }
        output = output.join("\r\n");
        return output;
    }

    getSucceedingGeneration(evolveByNGenerations = 1){
        var succeedingGeneration = Array();
 
        for(let y = 0; y < this.population.length; y++){
            succeedingGeneration.push(Array());
            for(let x = 0; x < this.population[0].length; x++){
                succeedingGeneration[y].push(this.shouldSurvive(x, y) ? state.ALIVE : state.DEAD);
            }
        }
        if(evolveByNGenerations > 1){
            var newInitConf = "\r\n" + this.toString(succeedingGeneration);
            return new Generation(newInitConf).getSucceedingGeneration(evolveByNGenerations - 1);
        }
        return this.toString(succeedingGeneration)
    }
    
    shouldSurvive(x, y){
        var numOfNeighbours = this.getNumOfNeighbours(x, y)
        if (this.isAlive(x, y) === 1 && numOfNeighbours < 2 || numOfNeighbours > 3){
            return false;
        }else if(this.isAlive(x, y) === 1 && numOfNeighbours === 2 || numOfNeighbours === 3){
            return true;
        }else if (this.isAlive(x, y) === 0 && numOfNeighbours === 3){
            return true;
        }
    }

    getNumOfNeighbours(x, y){
        const neighboursOffset = [
            [-1, -1],
            [0, -1],
            [1, -1],
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0]
        ];

        return neighboursOffset.reduce((sum, offset) => {
            return sum + this.isAlive(x + offset[0], y + offset[1]);
        }, 0);

    }

    exists(x, y){
        if(this.population[y] === undefined){
            return false;
        }
        return this.population[y][x] !== undefined;
    }

    isAlive(x, y){
        return (this.exists(x, y) && this.population[y][x] === state.ALIVE ? 1 : 0);
    }
}

module.exports = {
    Generation
}