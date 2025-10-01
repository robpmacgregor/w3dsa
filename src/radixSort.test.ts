import { radixSort } from './radixSort';

describe("radixSort function works as expected", () => {
    test("Given an unsorted array, radix sort correctly sorts the value in ascending order", () => {
        const unsortedArray: number[] = [170, 45, 75, 90, 802, 24, 2, 66];
        const sortedArray: number[] = [2, 24, 45, 66, 75, 90, 170, 802];
                                        
        expect(radixSort(unsortedArray)).toEqual(sortedArray);
    });
});