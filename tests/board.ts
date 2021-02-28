import { describe } from "mocha";
import { expect } from "chai";
import Board from "../src/Board";
import Map from "../src/Map";

describe('Board', () => {
    describe('constructor', () => {
        it('successfully passes', () => {
            const board = new Board(new Map());
            const tiles = board.getTiles(0, 0, 2, 2);
            console.log(tiles);
        });
    });
});

