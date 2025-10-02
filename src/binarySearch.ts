export function binarySearch(arr: number[], searchValue: number) : number {
    let left: number = 0;
    let right: number = arr.length -1;
    let mid: number;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if( arr[mid] === searchValue) {
            return mid;
        }

        if (arr[mid] < searchValue) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}