import { hashFunction } from './hashFunction';

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