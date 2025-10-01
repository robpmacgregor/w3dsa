export function linearSearch(arr: number[], searchValue: number): number {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === searchValue) {
            return i;
        }
    }
    return -1;
}