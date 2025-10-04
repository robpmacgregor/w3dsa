import { hashFunction } from  './hashFunction';

export class HashSet<T> {
    private hashSet: T [][];

    constructor(arr: T[][] = new Array(10).fill(undefined)) {
        this.hashSet = arr;
    }

    add(value: T): void {
        if (this.contains(value)) {
            return;
        }
        
        const hash = hashFunction(value as string);

        if (typeof this.hashSet[hash] === "undefined") {
            this.hashSet[hash] = [value];
        } else {
            this.hashSet[hash].push(value);
        }
    }

    contains(value: T): boolean {
        const hash = hashFunction(value as string);
        if (typeof this.hashSet[hash] !== "undefined") {
            for (let el of this.hashSet[hash]) {
                if (el === value) {
                    return true;
                }
            }
        }
        return false;
    }

    remove(value: T): void {
        const hash = hashFunction(value as string);
        const idx = this.hashSet[hash].indexOf(value);
        this.hashSet[hash].splice(idx, 1);
    } 
}