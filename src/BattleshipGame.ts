import Board from "./Board";
import Map from "./Map";
import Tile from "./Tile";

export class BattleshipGame {
  private readonly BLOCKWIDTH = 30;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private tiles: Tile[];

  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    requestAnimationFrame(() => this.draw());
  }

  private draw() {
    this.resizeCanvasIfNeeded();

    this.config();

    requestAnimationFrame(() => this.draw());
  }

  private config() {
    this.tiles = [];
    const board = new Board(new Map())
    const tiles: Tile[][] = board.getTiles(1, 1, 11, 11)

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const tile = tiles[x][y];
        const blockX = x * this.BLOCKWIDTH;
        const blockY = y * this.BLOCKWIDTH;
        tile.draw(blockX, blockY, this.ctx);
      }
    }
    // const { width, height } = this.canvas;
    // for (let i = 0; i < this.STARCOUNT; i++) {
    //   this.stars.push(new Star(width, height));
    // }
  }

  private resizeCanvasIfNeeded() {
    if (
      this.canvas.width !== window.innerWidth ||
      this.canvas.height !== window.innerHeight
    ) {
      this.canvas.width = window.innerWidth; // resize this.canvas
      this.canvas.height = window.innerHeight; // also clears this.canvas
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
