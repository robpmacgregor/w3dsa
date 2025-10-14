import { hashFunction } from './hashFunction';

export class HashTable<T> {
    private table: T[][];

    constructor(table: T[][] = new Array(10).fill(undefined)) {
        this.table = table;
    }

    add(value: T) {
        const hash: number = hashFunction(value as string);

        if (typeof this.table[hash] === "undefined") {
            this.table[hash] = [value];
        } else {
            this.table[hash].push(value);
        }
    }

    contains(value: T): boolean {
        const hash = hashFunction(value as string);
        if (typeof this.table[hash] !== "undefined") {
            for (const el of this.table[hash]) {
                if (el === value) {
                    return true;
                }
            }            
        }

        return false;
    }
}