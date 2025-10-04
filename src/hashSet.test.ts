import { HashSet } from './hashSet';

describe("Hashset works correctly", () => {
    let arr: string[][];
    let hashSet: HashSet<string>;

    beforeEach(() => {
        arr = new Array(10).fill(undefined);
        hashSet = new HashSet(arr);
    });

    test("HashSet will not allow duplicate values to be added", () => {
        hashSet.add("Bob");
        expect(arr[5]).toStrictEqual(["Bob"]);

        hashSet.add("Bob");
        expect(arr[5]).toStrictEqual(["Bob"]);
    });

    test("HashSet will  allow non duplicate values to be added", () => {
        hashSet.add("Bob");
        expect(arr[5]).toStrictEqual(["Bob"]);

        hashSet.add("Amy");
        expect(arr[5]).toStrictEqual(["Bob", "Amy"]);
    });

    test("HashSet Remove will remove value from hashset", () => {
        hashSet.add("Bob");
        expect(arr[5]).toStrictEqual(["Bob"]);

        hashSet.add("Amy");
        expect(arr[5]).toStrictEqual(["Bob", "Amy"]);
        
        hashSet.remove("Bob");
        expect(arr[5]).toStrictEqual(["Amy"]);
        
    });

    
});