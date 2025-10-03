export class LinkedNode<T> {
    private value: T; 
    private next: LinkedNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
    }

    setNext(next: LinkedNode<T>): LinkedNode<T> {
        this.next = next;
        return this.next;
    }

    unsetNext(): undefined {
        this.next = undefined;
        return this.next;
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

export function deleteNode(headNode: LinkedNode<number>, nodeToDelete: LinkedNode<number>): LinkedNode<number> {
    if (headNode === nodeToDelete) {
        const nextNode: LinkedNode<number> | undefined = headNode.getNext();
        if(typeof nextNode === "undefined") {
            throw new Error("Can not delete head node as it is the only node in the list");
        }
        return nextNode;
    }
    let currentNode: LinkedNode<number> | undefined = headNode;
    let nextNode: LinkedNode<number> | undefined;
    while (typeof currentNode?.getNext() !== "undefined") {
        nextNode = currentNode?.getNext();
        if (nextNode === nodeToDelete) {
            if (typeof nextNode.getNext() !== "undefined") {
                currentNode.setNext(nextNode.getNext() as LinkedNode<number>);
            } else {
                currentNode?.unsetNext();
            }
            break;
        }
        currentNode = nextNode;
    }
    return headNode;
}

export function insertNode(headNode: LinkedNode<number>, newNode: LinkedNode<number>, position: number): LinkedNode<number> {
    if (position === 1) {
        newNode.setNext(headNode);
        headNode = newNode;
        return headNode;
    }

    let currentNode: LinkedNode<number> | undefined = headNode;
    let nextNode: LinkedNode<number> | undefined = currentNode?.getNext();
    let currentPos: number = 2;

    while (typeof nextNode?.getNext() !== "undefined") {
        if (currentPos === position) {
            newNode.setNext(nextNode);
            currentNode?.setNext(newNode);
            return headNode;
        }
        currentNode = nextNode;
        nextNode = nextNode?.getNext();
        currentPos++;
    }
    return headNode;
}