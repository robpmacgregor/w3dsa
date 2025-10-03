import { Stack } from './stack';

describe("Stack class works correctly", () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    test("Stack peek method returns undefined if stack is empty", () => {
        expect(stack.peek()).toBeUndefined();
    });
    test("Stack push method adds the given element to the end of the stack", () => {
        stack.push(1);
        expect(stack.peek()).toBe(1);
    });
    test("Stack isEmpty method returns true if stack is empty", () => {
        expect(stack.isEmpty()).toBe(true);
    });
    test("Stack isEmpty method returns true if stack is empty", () => {
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });
    test("Stack pop method returns undefined if stack is empty", () => {
        expect(stack.pop()).toBeUndefined();
    });
    test("Stack pop method removes and returns element from the front of the stack", () => {
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
    });

});