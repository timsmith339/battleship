import Block from "./Tile";

export class BattleshipGame {
  private readonly BLOCKWIDTH = 30;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private blocks: Block[];

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
    this.blocks = [];
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        
        const block = new Block(this.BLOCKWIDTH, this.BLOCKWIDTH);
        const blockX = x * this.BLOCKWIDTH;
        const blockY = y * this.BLOCKWIDTH;
        console.log(`block: ${blockX}, ${blockY}`)
        block.draw(blockX, blockY, this.ctx);
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
