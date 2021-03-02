export default class Map {
    private tiles : number[][];

    constructor() {
        // 18 tiles wide
        // 15 tiles tall
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

    public get(x : number, y : number): number {
        return this.tiles[x][y];
    }


    // public getRange(fromX : number, fromY : number, toX : number, toY : number): number[][]{
    public getRange(from : Point, to : Point): number[][]{
        const length = this.tiles[0].length;
        const height = this.tiles.length;

        const maxX = Math.min(height - 1, to.x);
        const maxY = Math.min(length - 1, to.y);

        let newTiles: number[][] = [];
        for (let x = from.x; x <= maxX; x++) {
            const tile = this.tiles[x].slice(from.y, maxY + 1);
            newTiles.push(tile);
        }
        return newTiles;
    }
}
export class Point {
    x: number;
    y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
