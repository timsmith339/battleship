import BrickWall from "./Tiles/BrickWall";
import Grass from "./Tiles/Grass";
import WoodFloor from "./Tiles/WoodFloor";

export default class TileFactory {
    static GetTile(tileId : number) {
        switch (tileId) {
            case 0:
                return new Grass();
            case 1:
                return new BrickWall();
            case 2:
                return new WoodFloor();
        }
    }
}
