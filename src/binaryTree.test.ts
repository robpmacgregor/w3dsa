import { BasicNode, preOrderTraversal, inOrderTraversal, postOrderTraversal } from './binaryTree';

describe("Binary Tree works correctly", () => {
    let root: BasicNode<string>;

    beforeEach(() => {
        root = new BasicNode("R");

        const nodeA: BasicNode<string> = new BasicNode("A");
        const nodeB: BasicNode<string> = new BasicNode<string>("B");
        const nodeC: BasicNode<string> = new BasicNode<string>("C");
        const nodeD: BasicNode<string> = new BasicNode<string>("D");
        const nodeE: BasicNode<string> = new BasicNode<string>("E");
        const nodeF: BasicNode<string> = new BasicNode<string>("F");
        const nodeG: BasicNode<string> = new BasicNode<string>("G");
    
        root.setLeft(nodeA);
        root.setRight(nodeB);
        nodeA.setLeft(nodeC);
        nodeA.setRight(nodeD);
        nodeB.setLeft(nodeE);
        nodeB.setRight(nodeF);
        nodeF.setLeft(nodeG);
    });

    test("Node are linked in the correct order", () => {
        expect(root.getLeft()?.getValue()).toBe("A");
        expect(root.getRight()?.getValue()).toBe("B");
        expect(root.getLeft()?.getLeft()?.getValue()).toBe("C");
        expect(root.getRight()?.getRight()?.getValue()).toBe("F");
    });

    test("Pre-order traversal traverses the tree in the correct order", () => {
        const arr: string[] = [];
        preOrderTraversal<string, BasicNode<string>>(root, (value: string) => arr.push(value));
        
        expect(arr[0]).toBe("R");
        expect(arr[1]).toBe("A");
        expect(arr[2]).toBe("C");
        expect(arr[3]).toBe("D");
        expect(arr[4]).toBe("B");
        expect(arr[5]).toBe("E");
        expect(arr[6]).toBe("F");
        expect(arr[7]).toBe("G");
    });

    test("In-order traversal traverses the tree in the correct order", () => {
        const arr: string[] = [];
        inOrderTraversal<string, BasicNode<string>>(root, (value: string) => arr.push(value));
        
        expect(arr[0]).toBe("C");
        expect(arr[1]).toBe("A");
        expect(arr[2]).toBe("D");
        expect(arr[3]).toBe("R");
        expect(arr[4]).toBe("E");
        expect(arr[5]).toBe("B");
        expect(arr[6]).toBe("G");
        expect(arr[7]).toBe("F");
    });

    test("Post-order traversal traverses the tree in the correct order", () => {
        const arr: string[] = [];
        postOrderTraversal<string, BasicNode<string>>(root, (value: string) => arr.push(value));
        
        expect(arr[0]).toBe("C");
        expect(arr[1]).toBe("D");
        expect(arr[2]).toBe("A");
        expect(arr[3]).toBe("E");
        expect(arr[4]).toBe("G");
        expect(arr[5]).toBe("F");
        expect(arr[6]).toBe("B");
        expect(arr[7]).toBe("R");
    });
});