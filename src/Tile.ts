
class Tile {
  private tileId: number;
  private width: number;
  private height: number;

  constructor(tileId: number, width: number, height: number) {
    this.tileId = tileId;
    this.width = width;
    this.height = height;
  }
  
  public draw(cx: number, cy: number, ctx: CanvasRenderingContext2D) {
    ctx.strokeRect(cx, cy, this.width, this.height);
    ctx.stroke();
  }
}

export default Tile;
