import { describe } from "mocha";
import { expect } from "chai";
import Map, { Point } from "../src/Map";

describe('Map', () => {
    let map: Map;
    before(() => {
        map = new Map();
    })
    it('Gets correct tiles', () => {
        expect(map.get(0, 0)).to.equal(1);
    })
    it('Gets correct ranges', () => {
        let range = map.getRange(new Point(0, 0), new Point(2, 2));
        let expected = [[1, 1, 1], [1, 0, 0], [1, 0, 1]];
        expect(range).to.deep.equal(expected);

        expected = [[2, 2, 2, 1, 0], [1, 1, 1, 1, 0]];
        expect(map.getRange(new Point(5, 3), new Point(6, 7))).to.deep.equal(expected);
    })
    it('doesn\'t go out of range', () => {
        const range = map.getRange(new Point(12, 15), new Point(100, 100));
        const expected = [[0, 0, 1], [0, 0, 1], [1, 1, 1]];
        expect(range).to.deep.equal(expected)
    })
});

