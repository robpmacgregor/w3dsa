export class Stack<T> {
    private stack: T[] = [];

    constructor() {}

    peek(): T | undefined {
        return this.stack[this.stack.length-1];
    }

    push(value: T): void {
        this.stack.push(value);
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }

    pop(): T | undefined {
        return this.stack.pop();
    }
}