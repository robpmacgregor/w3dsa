import { findLowestNumber } from './arrays';

describe("Array algorithms", () => {
    test("find the lowest number", () => {
        const expected: number = 4;
        const subject: number[] = [7,8,6,9,4,5];

        expect(findLowestNumber(subject)).toBe(expected);
    });
});