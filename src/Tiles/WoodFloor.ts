import Tile from "../Tile";

export default class WoodFloor extends Tile {
    draw(cx : number, cy : number, ctx : CanvasRenderingContext2D) {
        ctx.beginPath();

        ctx.fillStyle = "#765a4a"
        ctx.fillRect(cx, cy, this.width, this.height);

        ctx.fillStyle = "white";
        ctx.fillText(this.tileId.toString(), cx + (this.width - 5) / 2, cy + (this.height + 8) / 2)

        ctx.stroke();
    }

    tileId : number = 2;
}
