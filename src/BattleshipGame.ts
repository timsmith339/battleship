import Board from "./Board";
import Map from "./Map";

export class BattleshipGame {
    private window = window;
    private canvas : HTMLCanvasElement;
    private ctx : CanvasRenderingContext2D;
    private board: Board;

    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        document.body.style.margin = "0";
        document.body.appendChild(this.canvas);
        
        addEventListener('resize', () => this.resize())
        this.resize();
        
        this.board = new Board(new Map(), this.canvas.width, this.canvas.height);
        const drawLoop: NodeJS.Timeout = setInterval(() => this.draw(), 200);
    }

    private draw() {
        this.drawBoard();
    }

    private drawBoard() {
        this.board.drawBoard(this.ctx);
    }

    private resize() {
        this.canvas.width = this.window.innerWidth;
        this.canvas.height = this.window.innerHeight;
    }
}
