export function findLowestNumber(arr: number[]): number {

    //create a var minVal andset it to equal the first valur of the array
    //go through every element in the array
    //if the current element has a lower value that minVAl, update minVal to the value
    //after looking at all the elements in the array, the min val variable now contains the lowest value

    let minVal: number = arr[0];

    arr.forEach(el => {
        if (el < minVal) { minVal = el };
    });
    return minVal;
}