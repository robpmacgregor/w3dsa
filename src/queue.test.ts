 import { Queue } from './queue';

describe("Stack class works correctly", () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });
    
    test("Queue peek method returns undefined if queue is empty", () => {
        expect(queue.peek()).toBeUndefined();
    });

    test("Queue peek method returns the next element to be dequeued from the queue", () => {
        queue.enqueue(2);
        queue.enqueue(3);
        
        expect(queue.peek()).toBe(2);
    });

    test("Queue enqueue method adds the given element to the end of the queue", () => {
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.peek()).toBe(1);
    });

    test("Queue isEmpty method returns true if queue is empty", () => {
        expect(queue.isEmpty()).toBe(true);
    });

    test("Queue isEmpty method returns true if queue is empty", () => {
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });

    test("Queue dequeue method returns undefined if queue is empty", () => {
        expect(queue.dequeue()).toBeUndefined();
    });

    test("Queue dequeue method removes and returns element from the front of the queue", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
    });
});