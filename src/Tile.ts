import Config from "./Config";

export default abstract class Tile {
    abstract tileId : number;
    protected width : number = Config.TILEWIDTH;
    protected height : number = Config.TILEWIDTH;

    constructor() {}

    abstract draw(cx : number, cy : number, ctx : CanvasRenderingContext2D): void;
}
