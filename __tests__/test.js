jest.unmock('../lib/range.js');
const range = require('../lib/range.js');

describe('this application', () => {
    describe('correctly generates ranges', () => {
        it('0 to 5', () => {
            expect(range(0, 5)).toEqual([
                0, 1, 2, 3, 4
            ]);
        });

        it('5 to 20', () => {
            expect(range(5, 20)).toEqual([
                5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
            ]);
        });

        it('-5 to 5', () => {
            expect(range(-5, 5)).toEqual([
                -5, -4, -3, -2, -1, 0, 1, 2, 3, 4
            ]);
        });

        it('-10 to 10', () => {
            expect(range(-10, 10)).toEqual([
                -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
            ]);
        });

        it('-10 to 0', () => {
            expect(range(-10, 0)).toEqual([
                -10, -9, -8, -7, -6, -5, -4, -3, -2, -1
            ]);
        });
    });

    describe('correctly uses the incrementor', () => {
        it('0 to 5 with 0.5', () => {
            expect(range(0, 5, 0.5)).toEqual([
                0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5
            ]);
        });

        it('2 to 20 with 9', () => {
            expect(range(2, 20, 9)).toEqual([
                2, 11
            ]);
        });

        it('-10 to 10 with 2.5', () => {
            expect(range(-10, 10, 2.5)).toEqual([
                -10, -7.5, -5, -2.5, 0, 2.5, 5, 7.5
            ]);
        });

        it('-100 to 50 with 50', () => {
            expect(range(-100, 50, 50)).toEqual([
                -100, -50, 0
            ]);
        });

        it('20 to 100 with 20', () => {
            expect(range(20, 100, 20)).toEqual([
                20, 40, 60, 80
            ]);
        });
    });

    describe('throws errors in the right cases', () => {
        it('increment is 0', () => {
            expect(range.bind(null, 2, 5, 0)).toThrow();
        });

        it('start is not a number', () => {
            expect(range.bind(null, "test", 5, 1)).toThrow();
        });

        it('end is not a number', () => {
            expect(range.bind(null, 2, "test", 1)).toThrow();
        });

        it('increment is not a number', () => {
            expect(range.bind(null, 2, 5, "test")).toThrow();
        });
    });

    describe('warns in the right cases', () => {
        it('warns when increment is below zero', () => {
            console.warn = jest.fn();
            range(5, 10, -1);
            expect(console.warn).toBeCalled();
        });
    });
});
