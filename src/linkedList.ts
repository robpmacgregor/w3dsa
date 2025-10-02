export class LinkedNode<T> {
    private value: T; 
    private next: LinkedNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
    }

    setNext(next: LinkedNode<T> | undefined): void {
        this.next = next;
    }

    getNext(): LinkedNode<T> | undefined {
        return this.next;
    }

    getValue(): T {
        return this.value;
    }
}

export function findLowestValue(headNode: LinkedNode<number>): number {
    let lowest: number = headNode.getValue();
    let currentNode: LinkedNode<number> | undefined = headNode.getNext();

    while (true) {
        currentNode = currentNode?.getNext();
        if (typeof currentNode === "undefined") {
            break;
        }
        if (currentNode.getValue() < lowest) {
            lowest = currentNode.getValue();
        }
    }
    return lowest;
}

export function deleteNode(headNode: LinkedNode<number> | undefined, nodeToDelete: LinkedNode<number>): void {
    if (headNode === nodeToDelete) {
        if(typeof headNode.getNext() === "undefined") {
            throw new Error("Can not delete head node as it is the only node in the list");
        }
        headNode = headNode.getNext();
        return;
    }
    let currentNode: LinkedNode<number> | undefined = headNode;
    let nextNode: LinkedNode<number> | undefined;
    while (typeof currentNode?.getNext() !== "undefined") {
        nextNode = currentNode?.getNext();
        if (nextNode === nodeToDelete) {
            currentNode?.setNext(nextNode?.getNext());
            break;
        }
        currentNode = nextNode;
    }
    return;
}