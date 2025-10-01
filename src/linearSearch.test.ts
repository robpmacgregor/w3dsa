import { linearSearch } from './linearSearch';

describe("Linear Search algorithm works correctly", () => {
    test("Given an array of integers, and a search value, linear will return the index the value was found at", () => {
        const arr: number[] = [2,4,7,3,8,9,5,6];
        const searchValue: number = 5;
        const searchIndex: number = 6;

        expect(linearSearch(arr, searchValue)).toBe(searchIndex);
    });
    test("Given an array of integers, and a search value, linear will return -1 if the value was not found ", () => {
        const arr: number[] = [2,4,7,3,8,9,5,6];
        const searchValue: number = 0;
        const searchIndex: number = -1;

        expect(linearSearch(arr, searchValue)).toBe(searchIndex);
    });
});