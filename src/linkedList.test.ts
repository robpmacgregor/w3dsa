import { LinkedNode, findLowestValue, deleteNode, insertNode } from './linkedList';

describe("LinkedList works correctly", () => {
    let headNode: LinkedNode<number>;
    
    beforeEach(() => {
        headNode = new LinkedNode<number>(3);
        headNode
            .setNext(new LinkedNode<number>(5))
            .setNext(new LinkedNode<number>(13))
            .setNext(new LinkedNode<number>(2));
    });

    test("LinkedList can be traversed and each value can be accessed", () => {
        expect(headNode.getValue()).toBe(3);
        expect(headNode.getNext()?.getValue()).toBe(5);
        expect(headNode.getNext()?.getNext()?.getValue()).toBe(13);
        expect(headNode.getNext()?.getNext()?.getNext()?.getValue()).toBe(2);
        expect(headNode.getNext()?.getNext()?.getNext()?.getNext()?.getValue()).toBe(undefined);    
    });

    test("find the lowest value in a linked list", () => {
        expect(findLowestValue(headNode)).toBe(2);
    });

    test("delete specific node from linkedList", () => {
        const nodeToDelete: LinkedNode<number> = headNode.getNext()?.getNext() as LinkedNode<number>;
        headNode = deleteNode(headNode, nodeToDelete); 

        expect(headNode.getNext()?.getNext()?.getValue()).toEqual(2);
    });

    test("delete head node from linkedList", () => {
        headNode = deleteNode(headNode, headNode); 

        expect(headNode.getValue()).toBe(5);
    });

    test("insert newNode at position", () => {
        const newNode: LinkedNode<number> = new LinkedNode<number>(7)
        headNode = insertNode(headNode, newNode, 2); 

        expect(headNode.getNext()?.getValue()).toBe(7);
    });

    test("insert new head node", () => {
        const newNode: LinkedNode<number> = new LinkedNode<number>(7)
        
        expect(headNode.getValue()).toBe(3);  
        headNode = insertNode(headNode, newNode, 1); 
        expect(headNode.getValue()).toBe(7);
    });
});
