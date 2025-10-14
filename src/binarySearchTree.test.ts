import { TraversalType } from "./abstractSearchTree";
import { BinarySearchTree } from "./binarySearchTree";
import { BasicNode } from "./binaryTree";

describe("Binary Search Tree works correctly", () => {
    let tree: BinarySearchTree<number>;

    beforeEach(() => {
        tree = new BinarySearchTree();
        tree.insert(13);
        tree.insert(7);
        tree.insert(15);
        tree.insert(3);
        tree.insert(8);
        tree.insert(14);
        tree.insert(19);
        tree.insert(18);
    });

    test("child elements added to the root node are added lowest to the left and highest to the right", () => {
        const root = tree.getRoot() as BasicNode<number>;
        expect(root.getValue()).toBe(13)
        expect(root.getLeft()?.getValue()).toBe(7)
        expect(root.getRight()?.getValue()).toBe(15)
        expect(root.getLeft()?.getLeft()?.getValue()).toBe(3)
        expect(root.getLeft()?.getRight()?.getValue()).toBe(8)
    });

    test("In-order traversal, traverse the tree in the correct order", () => {
        const arr: (number|undefined)[] = [];
        const expected = [3, 7, 8, 13, 14, 15, 18, 19];
        tree.traverse(
            TraversalType.InOrder, 
            (node: BasicNode<number>|undefined) => 
                arr.push((typeof(node) === "undefined") ? undefined : node.getValue())
        );

        expect(arr).toStrictEqual(expected);
    });

    test("Find lowest value in search tree", () => {
        const lowestValue: BasicNode<number>|undefined = tree.lowestValue();
        const expected = 3;
 
        expect(lowestValue?.getValue()).toBe(expected);
    });

    test("Delete node with no child nodes successfully removes node from tree", () => {
        tree.delete(3);

        const root = tree.getRoot() as BasicNode<number>;

        expect(root.getValue()).toBe(13);
        expect(root.getLeft()?.getValue()).toBe(7);
        expect(root.getLeft()?.getLeft()?.getValue()).toBe(undefined);
        expect(root.getLeft()?.getRight()?.getValue()).toBe(8);
    });

    test("Delete node with one child node successfully removes node from tree and links child to parent", () => {
        tree.delete(3);
        tree.delete(7);
        
        const root = tree.getRoot() as BasicNode<number>;

        expect(root.getValue()).toBe(13);
        expect(root.getLeft()?.getValue()).toBe(8);
    });
        
    test("Delete node with two child nodes successfully removes node from tree and links child nodes to relevant successors", () => {
        tree.delete(15);

        const root = tree.getRoot() as BasicNode<number>;

        expect(root.getValue()).toBe(13);
        expect(root.getRight()?.getValue()).toBe(18);
        expect(root.getRight()?.getLeft()?.getValue()).toBe(14);
        expect(root.getRight()?.getRight()?.getValue()).toBe(19);
    });
});