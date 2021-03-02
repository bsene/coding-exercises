import { getPreviousCollectionIndex, getNextCollectionIndex } from '../../src/helpers/builder';

describe('Builder helper', () => {
  describe('#getPreviousCollectionIndex', () => {
    describe('when in collection index boundaries', () => {
      it('should return index 0 when current index was 1', () => {
        expect(getPreviousCollectionIndex(1)).toBe(0);
      });
      it('should return index 1 when current index was 2', () => {
        expect(getPreviousCollectionIndex(2)).toBe(1);
      });
      it('should return index 2 when current index was 3', () => {
        expect(getPreviousCollectionIndex(3)).toBe(2);
      });
    });
    describe('when reach collection boundaries', () => {
      describe('on left boundary', () => {
        it('should return first index(usually 0)', () => {
          expect(getPreviousCollectionIndex(0)).toBe(0);
        });
      });
    });
    describe('outside left boundary of collection', () => {
      it('should return 0 when current index was -3', () => {
        expect(getPreviousCollectionIndex(-3)).toBe(0);
      });
    });
  });
  describe('#getNextCollectionIndex', () => {
    describe('on collection boundaries', () => {
      it('should return 1 when current index is 0', () => {
        expect(getNextCollectionIndex(0)).toBe(1);
      });
      it('should return 2 when current index is 1', () => {
        expect(getNextCollectionIndex(1)).toBe(2);
      });
      it('should return 3 when current index is 2', () => {
        expect(getNextCollectionIndex(2)).toBe(3);
      });
    });
    describe('outside collection boundaries', () => {
      it('should return 2 on 3 items collection', () => {
        expect(getNextCollectionIndex(4, [1, 2, 3])).toBe(2);
      });
      it('should return 9 on 10 items collection', () => {
        expect(getNextCollectionIndex(40, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(9);
      });
    });
    describe('when reaching right collection boundary', () => {
      it('should return 1 on 2 items collection', () => {
        expect(getNextCollectionIndex(1, [1, 2])).toBe(1);
      });
      it('should return 2 on 3 items collection', () => {
        expect(getNextCollectionIndex(2, [1, 2, 3])).toBe(2);
      });
    });
  });
});
