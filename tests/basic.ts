import { describe } from "mocha";
import { expect } from "chai";

describe('Test framework', () => {
  describe('constructor', () => {
    it('successfully passes', () => {
      expect('1').to.equal('1');
    });
  });
});

