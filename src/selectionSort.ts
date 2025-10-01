export function selectionSortWithShift(arr: number[]): number[] {
    let minIndex: number;
    let minVal: number;

    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [minVal] = arr.splice(minIndex, 1);
        arr = [...arr.splice(0, i), minVal, ...arr];
    }
    return arr;
}

export function selectionSortWithSwap(arr: number[]): number[] {
    let minIndex: number;

    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}