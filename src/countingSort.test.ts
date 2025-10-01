import { countingSort } from './countingSort';

describe("countingSort function works as expected", () => {
    test("Given an unsorted array, counting correctly sorts the value in ascending order", () => {
        const unsortedArray: number[] = [0,0,1,0,2,2,2,2,3,1,4,5,4,3,5,5,6,5];
        const sortedArray: number[] = [0, 0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 6];
                                        
        expect(countingSort(countingSort(unsortedArray))).toEqual(sortedArray);
    });
});