export default class Map {
    private tiles: number[][];

    constructor() {
        let mapData = `[
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 1, 1, 1],
            [1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]`;
        this.tiles = JSON.parse(mapData);
    }
    // constructor(mapData: string) {
    //     this.tiles = JSON.parse(mapData);
    // }

    public get(x: number, y: number): number {
        return this.tiles[x][y];
    }

    public getRange(fromX: number, fromY: number, toX: number, toY: number): number[][] {
        let newTiles: number[][] = [];
        for (let x = fromX; x <= toX; x++) {
            newTiles.push(this.tiles[x].slice(fromY, toY + 1));
        }
        return newTiles;
    }
}

