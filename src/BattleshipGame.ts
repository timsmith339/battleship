import Star from "./Star";

export class BattleshipGame {
  private readonly STARCOUNT = 100;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private stars: Star[];

  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.config();

    requestAnimationFrame(() => this.draw());
  }

  private draw() {
    this.resizeCanvasIfNeeded();

    for (let star of this.stars) {
      Star.draw(star.position.x, star.position.y, this.ctx);
    }

    requestAnimationFrame(() => this.draw());
  }

  private config() {
    this.stars = [];
    const { width, height } = this.canvas;
    for (let i = 0; i < this.STARCOUNT; i++) {
      this.stars.push(new Star(width, height));
    }
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
