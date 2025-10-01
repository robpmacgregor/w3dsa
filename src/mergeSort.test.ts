import  { mergeSort } from './mergeSort';

describe("MergeSort function works correctly", () => {
    test("given an unsorted array, mergeSort will correctly sort and return the array", () => {
        const unsortedArray: number[] = [3, 7, 6, -10, 15, 23.5, 55, -13];
        const sortedArray: number[] = [-13, -10, 3, 6, 7, 15, 23.5, 55];
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
});