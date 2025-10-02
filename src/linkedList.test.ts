import { LinkedNode, findLowestValue, deleteNode } from './linkedList';

test("LinkedList works correctly", () => {
    const node1: LinkedNode<number> = new LinkedNode<number>(3);
    const node2: LinkedNode<number> = new LinkedNode<number>(5);
    const node3: LinkedNode<number> = new LinkedNode<number>(13);
    const node4: LinkedNode<number> = new LinkedNode<number>(2);

    node1.setNext(node2);
    node2.setNext(node3);
    node3.setNext(node4);

    expect(node1.getValue()).toBe(3);
    expect(node1.getNext()?.getValue()).toBe(5);
    expect(node1.getNext()?.getNext()?.getValue()).toBe(13);
    expect(node1.getNext()?.getNext()?.getNext()?.getValue()).toBe(2);
    expect(node1.getNext()?.getNext()?.getNext()?.getNext()?.getValue()).toBe(undefined);

    
});

test("find the lowest value in a linked list", () => {
    const node1: LinkedNode<number> = new LinkedNode<number>(3);
    const node2: LinkedNode<number> = new LinkedNode<number>(5);
    const node3: LinkedNode<number> = new LinkedNode<number>(13);
    const node4: LinkedNode<number> = new LinkedNode<number>(2);

    node1.setNext(node2);
    node2.setNext(node3);
    node3.setNext(node4);

    expect(findLowestValue(node1)).toBe(2);

});

test("delete specific node from linkedList", () => {
    const node1: LinkedNode<number> = new LinkedNode<number>(3);
    const node2: LinkedNode<number> = new LinkedNode<number>(5);
    const node3: LinkedNode<number> = new LinkedNode<number>(13);
    const node4: LinkedNode<number> = new LinkedNode<number>(2);

    node1.setNext(node2);
    node2.setNext(node3);
    node3.setNext(node4);

    deleteNode(node1, node3); 

    expect(node2.getNext()).toEqual(node4);
});