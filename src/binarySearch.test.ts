import { binarySearch } from './binarySearch';

describe("Binary Search algorithm works correctly", () => {
    test("Given an array of integers, and a search value, binary search will return the index the value was found at", () => {
        const arr: number[] = [2,3,4,5,6,7,8,9];
        const searchValue: number = 5;
        const searchIndex: number = 3;

        expect(binarySearch(arr, searchValue)).toBe(searchIndex);
    });
    test("Given an array of integers, and a search value, binary search will return -1 if the value was not found ", () => {
        const arr: number[] = [2,3,4,5,6,7,8,9];;
        const searchValue: number = 0;
        const searchIndex: number = -1;

        expect(binarySearch(arr, searchValue)).toBe(searchIndex);
    });
});