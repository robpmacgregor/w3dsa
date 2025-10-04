import { hashFunction } from "./hashFunction";

export class Entry<K, V> {
    private key: K;
    private value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    getKey(): K {
        return this.key;
    }

    getValue(): V {
        return this.value;
    }

    setValue(value: V): void {
        this.value = value;
    }
}

export class HashMap<K, V> {
    private hashMap: Entry<K, V>[][];

    constructor(hashMap: Entry<K, V>[][] = new Array(10).fill(undefined)) {
        this.hashMap = hashMap;
    }

    put(entry: Entry<K, V>): void {
        const hash = hashFunction(entry.getKey() as string);

        if (typeof this.hashMap[hash] === "undefined") {
            this.hashMap[hash] = [entry];
            return;
        } else {
            for (let el of this.hashMap[hash]) {
                if (el.getKey() === entry.getKey()) {
                    el.setValue(entry.getValue());
                    return;
                }
            }
            this.hashMap[hash].push(entry);
        }
        
    }

    get(key: K): Entry<K, V> | undefined {
        const hash = hashFunction(key as string);
        if (typeof this.hashMap[hash] !== "undefined") {
            for (let el of this.hashMap[hash]) {
                if (el.getKey() === key) {
                    return el;
                }
            }
        }
        return undefined;
    }
}