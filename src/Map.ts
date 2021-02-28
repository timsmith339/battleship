export default class Map {
    private tiles: Number[][];
    
    constructor(mapData: string) {
        this.tiles = JSON.parse(mapData);
    }

    public get(x: number, y: number): Number {
        return this.tiles[x][y];
    }

    public getRange(fromX: number, fromY: number, toX: number, toY: number): Number[][] {
        let newTiles: Number[][] = [];
        for (let x = fromX; x <= toX; x++) {
            newTiles.push(this.tiles[x].slice(fromY, toY+1));
        }
        return newTiles;
    }
}

