export class Queue<T> {
    private queue: T[] = [];

    peek(): T | undefined {
        return this.queue[this.queue.length-1];
    }

    enqueue(value: T): void {
        this.queue.unshift(value);
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }

    dequeue(): T | undefined {
        return this.queue.pop();
    }

}