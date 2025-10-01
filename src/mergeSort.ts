function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i:number = 0, j:number = 0;

    while(i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return [
        ...result,
        ...left.slice(i),
         ...right.slice(j)
        ];
}

export function mergeSort(arr: number[]): number[] {
    if ( arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}