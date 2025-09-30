import { fibWithForLoop, fibWithRecursion } from './fibonacci';

describe("fibWithForLoop returns the first 20 numbers in the fibonacci sequence", () => {
    test("returns the correct sequence of numbers", () => {
        const expectedSequence: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];
        expect(fibWithForLoop()).toEqual(expectedSequence);
    });
});

describe("fibWithRecursion return the first 20 numbers in the fibonacci sequence", () => {
    test("returns the correct sequence of numbers", () => {
        const expectedSequence: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];
        expect(fibWithRecursion()).toEqual(expectedSequence);
    });
});