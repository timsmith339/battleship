import Map from "./Map";
import Tile from "./Tile"

export default class Board {
    private map: Map;
    private playerX: number;
    private playerY: number;

    constructor(map: Map) {
        this.map = map
    }

    getTiles(fromX: number, fromY: number, toX: number, toY: number): Tile[][] {
        const mapData = this.map.getRange(fromX, fromY, toX, toY);
        const tiles: Tile[][] = mapData.map(x => {
            const row: Tile[] = x.map(y => {
                return new Tile(y);
            })
            return row;
        })
        return tiles;
    }
}
