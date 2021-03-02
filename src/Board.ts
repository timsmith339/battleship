import Config from "./Config";
import Map, { Point } from "./Map";
import Tile from "./Tile"
import TileFactory from "./TileFactory";

export default class Board {
    private map : Map;
    private playerX : number;
    private playerY : number;
    private boardWidth : number;
    private boardHeight : number;

    private getTilesWide(): number {
        return this.boardWidth / Config.TILEWIDTH;
    }

    constructor(map : Map, boardWidth : number, boardHeight : number) {
        this.map = map
        this.boardHeight = boardHeight;
        this.boardWidth = boardWidth
    }

    getTiles(fromX : number, fromY : number, toX : number, toY : number): Tile[][]{
        return this.map.getRange(new Point(fromX, fromY), new Point(toX, toY)).map(x => x.map(y => TileFactory.GetTile(y)))
    }

    drawBoard(ctx: CanvasRenderingContext2D) {
        const boardTileWidth = Math.ceil(ctx.canvas.width / Config.TILEWIDTH);

        this.getTiles(0, 0, boardTileWidth, boardTileWidth).forEach((x: Tile[], xi) => {
            x.forEach((y: Tile, yi) => {
                const blockX = xi * Config.TILEWIDTH;
                const blockY = yi * Config.TILEWIDTH;
                y.draw(blockX, blockY, ctx);
            })
        })
    }
}

/*
    map is 10 tiles wide
    Tiles are 100 px wide.
    map is 1000 px wide + tall
    screen is 450 wide

    550 / 100 = 4.5 rounded up = 5

    player x: 320, y: 70


*/