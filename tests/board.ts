import {describe} from "mocha";
import {expect} from "chai";
import Board from "../src/Board";
import Map from "../src/Map";
import Config from "../src/Config";

describe('Board', () => {
    describe('constructor', () => {
        it('successfully passes', () => {
            const board = new Board(new Map(), 0, 0);
            const tiles = board.getTiles(0, 0, 2, 2);
            /*
            Using a JSONified string literal here because it's much simpler than to explicity
            compare 9 objects in 3 arrays.
            */
            const boardWidth = Config.TILEWIDTH;
            const expected = `[[{"width":${boardWidth},"height":${boardWidth},"tileId":1},{"width":${boardWidth},"height":${boardWidth},"tileId":1},{"width":${boardWidth},"height":${boardWidth},"tileId":1}],[{"width":${boardWidth},"height":${boardWidth},"tileId":1},{"width":${boardWidth},"height":${boardWidth},"tileId":0},{"width":${boardWidth},"height":${boardWidth},"tileId":0}],[{"width":${boardWidth},"height":${boardWidth},"tileId":1},{"width":${boardWidth},"height":${boardWidth},"tileId":0},{"width":${boardWidth},"height":${boardWidth},"tileId":1}]]`
            expect(JSON.stringify(tiles)).to.equal(expected);
        });
    });
});
