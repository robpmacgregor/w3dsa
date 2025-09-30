import { bubblesort } from './bubblesort';

describe("bubblesorot function works as expected", () => {
    test("Given an unsorted array, bubblesort correctly sorts the value in ascending order", () => {
        const unsortedArray: number[] = [2,9,5,6,8,3,1,7,4,0];
        const sortedArray: number[] = [0,1,2,3,4,5,6,7,8,9];
        expect(bubblesort(unsortedArray)).toEqual(sortedArray);
    });
});