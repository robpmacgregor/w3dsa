import { AVLTree, AVLTreeNode } from "./avlTree";
import { TreeNode } from "./binaryTree";

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
        expect(root.getValue()).toBe("C");
        expect(root.getLeft()?.getValue()).toBe("B");
        expect(root.getLeft()?.getLeft()?.getValue()).toBe("A");
        expect(root.getRight()?.getValue()).toBe("E");
        expect(root.getRight()?.getLeft()?.getValue()).toBe("D");
        expect(root.getRight()?.getRight()?.getValue()).toBe("H");
        expect(root.getRight()?.getRight()?.getLeft()?.getValue()).toBe("G");
    });

        test("Get Balance returns the node current balance", () => {
        const tree: AVLTree<string> = new AVLTree();
        tree.insert("C");
        tree.insert("B");
        tree.insert("E");
        tree.insert("A");
        tree.insert("D");
        tree.insert("H");
        tree.insert("G");

        expect(tree.getBalance("C")).toBe(0);
  
    });
});