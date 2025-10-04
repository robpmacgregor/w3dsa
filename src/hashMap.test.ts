import { HashMap, Entry } from './hashMap';

describe("HashMap works correctly", () => {
    let arr: Entry<string, string>[][];
    let hashMap: HashMap<string, string>;

    beforeEach(() => {
        arr = new Array(10).fill(undefined);
        hashMap = new HashMap(arr);
    });

    test("HashMap stores entries in correct bucket", () => {
        const jens: Entry<string, string> = new Entry<string, string>("123-4669", "Jens");
        hashMap.put(jens);
        const bill: Entry<string, string> = new Entry<string, string>("321-4669", "Bill");
        hashMap.put(bill);

        expect(arr[2][0]).toBeInstanceOf(Entry);
        expect(arr[2][0].getValue()).toBe("Jens");
        expect(arr[2][1].getValue()).toBe("Bill");
        
    });

    test("HashMap put updates entry if exists in bucket", () => {
        const origEntry: Entry<string, string> = new Entry<string, string>("123-4669", "Jens");
        hashMap.put(origEntry);

        expect(arr[2][0].getValue()).toBe("Jens");

        const updatedEntry = hashMap.get("123-4669") as Entry<string, string>;
        updatedEntry.setValue("Jonas");
        hashMap.put(updatedEntry);

        expect(arr[2][0].getValue()).toBe("Jonas");
    });
});