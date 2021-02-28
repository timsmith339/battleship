import { describe } from "mocha";
import { expect } from "chai";
import Map from "../src/Map";

describe('Map', () => {
    let map: Map;
    before(() => {
        map = new Map();
    })
    it('Gets correct tiles', () => {
        expect(map.get(0, 0)).to.equal(1);
        expect(map.get(3, 3)).to.equal(2);
    });
    it('Gets correct ranges', () => {
        expect(map.getRange(0,0,2,2)).to.deep.equal([[1, 1, 1], [1, 0, 0], [1, 0, 1]]);
        expect(map.getRange(5,3,6,7)).to.deep.equal([[2, 2, 2, 1, 0], [1, 1, 1, 1, 0]]);
        expect(map.getRange(5,3,6,7)).to.deep.equal([[2, 2, 2, 1, 0], [1, 1, 1, 1, 0]]);
    })
});

