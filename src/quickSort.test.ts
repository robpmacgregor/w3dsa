import { quickSort } from './quickSort';

describe("quickSort function works as expected", () => {
    test("Given an unsorted array, quickSort correctly sorts the value in ascending order", () => {
        const unsortedArray: number[] = [2,9,0,6,8,3,1,7,4,5];
        const sortedArray: number[] = [0,1,2,3,4,5,6,7,8,9];
        quickSort(unsortedArray)
        expect(unsortedArray).toEqual(sortedArray);
    });
});