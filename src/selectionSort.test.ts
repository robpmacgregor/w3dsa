import { selectionSortWithShift, selectionSortWithSwap } from './selectionSort'

    test("Given an unsorted array, selectionSort correctly sorts the value in ascending order", () => {
        const unsortedArray: number[] = [2,9,5,6,8,3,1,7,4,0];
        const sortedArray: number[] = [0,1,2,3,4,5,6,7,8,9];
        expect(selectionSortWithShift(unsortedArray)).toEqual(sortedArray);
    });

    test("Given an unsorted array with dups, selectionSort correctly sorts the value in ascending order", () => {
        const unsortedArray: number[] = [2,9,5,6,8,3,6,7,4,2];
        const sortedArray: number[] = [2,2,3,4,5,6,6,7,8,9];
        expect(selectionSortWithShift(unsortedArray)).toEqual(sortedArray);
    });

        test("Given an unsorted array, selectionSortWithSwap correctly sorts the value in ascending order", () => {
        const unsortedArray: number[] = [2,9,5,6,8,3,1,7,4,0];
        const sortedArray: number[] = [0,1,2,3,4,5,6,7,8,9];
        expect(selectionSortWithSwap(unsortedArray)).toEqual(sortedArray);
    });

    test("Given an unsorted array with dups, selectionSortWithSwap correctly sorts the value in ascending order", () => {
        const unsortedArray: number[] = [2,9,5,6,8,3,6,7,4,2];
        const sortedArray: number[] = [2,2,3,4,5,6,6,7,8,9];
        expect(selectionSortWithSwap(unsortedArray)).toEqual(sortedArray);
    });