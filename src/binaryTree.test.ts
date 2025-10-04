import { TreeNode } from './binaryTree';

describe("Binary Tree works correctly", () => {
    test("Node are linked in the correct order", () => {
        const root: TreeNode<string> = new TreeNode("R");
        const nodeA: TreeNode<string> = new TreeNode<string>("A");
        const nodeB: TreeNode<string> = new TreeNode<string>("B");
        const nodeC: TreeNode<string> = new TreeNode<string>("C");
        const nodeD: TreeNode<string> = new TreeNode<string>("D");
        const nodeE: TreeNode<string> = new TreeNode<string>("E");
        const nodeF: TreeNode<string> = new TreeNode<string>("F");
        const nodeG: TreeNode<string> = new TreeNode<string>("G");
    
        root.setLeft(nodeA);
        root.setRight(nodeB);
        nodeA.setLeft(nodeC);
        nodeA.setRight(nodeD);
        nodeB.setLeft(nodeE);
        nodeB.setRight(nodeF);
        nodeF.setLeft(nodeG);

        expect(root.getLeft()?.getValue()).toBe("A");
        expect(root.getRight()?.getValue()).toBe("B");
    
        expect(root.getLeft()?.getLeft()?.getValue()).toBe("C");
        expect(root.getRight()?.getRight()?.getValue()).toBe("F");
    
    });
});