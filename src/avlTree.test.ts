import { AVLTree, AVLTreeNode } from "./avlTree";

describe("AVL Tree works correctly", () => {
    test("Tree correctly rebalances a right heavy node", () => {
        const tree: AVLTree<string> = new AVLTree();
        tree.insert("C");
        tree.insert("B");
        tree.insert("E");
        tree.insert("A");
        tree.insert("D");
        tree.insert("H");
        tree.insert("G");

        const root = tree.getRoot() as AVLTreeNode<string>;

        expect(root.getRight()?.getRight()?.getValue()).toBe("H");
        expect(root.getRight()?.getRight()?.getLeft()?.getValue()).toBe("G");

        tree.insert("F");
        expect(root.getRight()?.getRight()?.getValue()).toBe("G");
        expect(root.getRight()?.getRight()?.getLeft()?.getValue()).toBe("F");
        expect(root.getRight()?.getRight()?.getRight()?.getValue()).toBe("H");
                
    });

    test("Get Balance returns the node current balance", () => {
        const tree: AVLTree<string> = new AVLTree();
        tree.insert("C");
        expect(tree.getBalance("C")).toBe(0);
        tree.insert("B");
        expect(tree.getBalance("C")).toBe(1);
        expect(tree.getBalance("B")).toBe(0);
        tree.insert("A");
        expect(tree.getBalance("B")).toBe(0);
        expect(tree.getBalance("A")).toBe(0);
        expect(tree.getBalance("C")).toBe(0);
    });
});