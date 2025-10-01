/*
Create a new array for counting how many there are of the different values.
Go through the array that needs to be sorted.
For each value, count it by increasing the counting array at the corresponding index.
After counting the values, go through the counting array to create the sorted array.
For each count in the counting array, create the correct number of elements, with values that correspond to the counting array index.
*/

export function countingSort(arr: number[]): number[] {
    const maxVal = Math.max(...arr);
    const count: Uint16Array = new Uint16Array(maxVal+1);
    let num;

    while (arr.length > 0) {
        [num] = arr.splice(0,1);
        count[num]++; 
    }

    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr.push(i);
            count[i]--;
        } 
    }
    console.log(arr);
    return arr;
}