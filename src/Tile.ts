abstract class Tile {
  abstract tileId: number;
  protected width: number = 30;
  protected height: number = 30;

  constructor() { }

  abstract draw(cx: number, cy: number, ctx: CanvasRenderingContext2D): void;
}

export default Tile;
