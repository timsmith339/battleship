
class Tile {
  private tileId: number;
  private width: number = 30;
  private height: number = 30;

  constructor(tileId: number) {
    this.tileId = tileId;
  }

  public draw(cx: number, cy: number, ctx: CanvasRenderingContext2D) {
    ctx.strokeRect(cx, cy, this.width, this.height);
    ctx.fillText(this.tileId.toString(), cx + (this.width - 5) / 2, cy + (this.height + 8) / 2)
    ctx.stroke();
  }
}

export default Tile;
