export function radixSort(arr: number[]): number[] {
    const radixArray: number[][] = [[],[],[],[],[],[],[],[],[],[]];
    const maxVal: number = Math.max(...arr);
    let exp: number = 1;
    let val: number | undefined;
    let radixIndex: number;

    while (Math.floor(maxVal / exp) > 0) {
        while (arr.length > 0 ) {
            val = arr.pop();
            if (typeof val !== "undefined") {
                radixIndex = Math.floor(val / exp) % 10;
                radixArray[radixIndex].push(val);
            }
        }

        for (let i = 0; i < radixArray.length; i++) {
            while (radixArray[i].length > 0) {
                val = radixArray[i].pop();
                if (typeof val !== "undefined") {
                    arr.push(val);
                }
            }
        }
        exp *= 10;
    }
    return arr;
}