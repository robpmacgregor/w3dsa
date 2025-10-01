/*
Quicksort is a divide and conquer algorithm that uses recursion. 
Each pass roughly sorts the array into 2 groups (high numbers and low numbers,
based on a given pivot, then splits the array in 2 at the pivot point and 
runs the same rough sort and split on each sub array. The function continues 
until all elements are in order.
*/

function partition(arr: number[], low: number, high: number): number {
    const pivot: number = arr[high];
    let i = low -1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    return i+1;
}

export function quickSort(arr: number[], low: number = 0, high?: number): void {
    if (high === undefined) {
        high = arr.length - 1;
    }

    let pivot_index: number;
    
    if (low < high) {
        pivot_index = partition(arr, low, high);
        quickSort(arr, low, pivot_index - 1);
        quickSort(arr, pivot_index + 1, high);
    }
}