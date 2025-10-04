import { hashFunction, HashTable } from './hashTable';

describe("HashFunction works correctly", () => {
    test("Correct hash is calculated for given value", () => {
        const hash = hashFunction("Bob");
        expect(hash).toBe(5);
    });
    test("Hashfor empty string is 0", () => {
        const hash = hashFunction("");
        expect(hash).toBe(0);
    });
});

describe("HashTable works correctly", () => {
    let hashTable: HashTable<string>;
    let arr: string[][];

    beforeEach(() => {
        arr = new Array(10).fill(undefined);
        hashTable = new HashTable<string>(arr);
    });

    test("Values are stored in the correct buckets", () => {
        hashTable.add("Bob");
        hashTable.add("Amy");
        expect(arr[5]).toStrictEqual(["Bob", "Amy"])
    });

    test("Hash Table contains method returns true if element exists in hash table", () => {
        hashTable.add("Bob");
        
        expect(hashTable.contains("Bob")).toBe(true);
    });

    test("Hash Table contains method returns false if element does not exists in hash tablel", () => {
        hashTable.add("Bob");

        expect(hashTable.contains("Alice")).toBe(false);
    });
});