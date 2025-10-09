import { BinarySearchTree } from "./binarySearchTree";
import { TreeNode } from "./binaryTree";

export class AVLTreeNode<T> extends TreeNode<T, AVLTreeNode<T>> {
    private height: number;

    constructor(data: T) {
        super(data);
        this.height = 1;
    }

    getHeight(): number {
        return this.height;
    }

    setHeight(height: number): void {
        this.height = height;
    }
}

export class AVLTree<T> extends BinarySearchTree<T> {

    getBalance(node: T|AVLTreeNode<T>) : number {
        if (!(node instanceof AVLTreeNode)) {
            return 0;
        }

        if (!(node instanceof AVLTreeNode)) {
            node = new AVLTreeNode(node);
        }
        
        return (node.getLeft() as AVLTreeNode<T>)?.getHeight() - (node.getRight() as AVLTreeNode<T>)?.getHeight();
    }

    rightRotate(y: AVLTreeNode<T>): AVLTreeNode<T> {
        const x = y.getRight() as AVLTreeNode<T>;
        const temp = x?.getRight()  as AVLTreeNode<T>;
        x?.setRight(y);
        y.setLeft(temp);
        y.setHeight(
            1 + Math.max(
                (y.getLeft() as AVLTreeNode<T>).getHeight(),
                (y.getRight() as AVLTreeNode<T>).getHeight()
            )
        );
        x.setHeight(
            1 + Math.max(
                (x.getLeft() as AVLTreeNode<T>).getHeight(),
                (x.getRight() as AVLTreeNode<T>).getHeight()
            )
        );
        return x;
    }

    leftRotate(x: AVLTreeNode<T>): AVLTreeNode<T> {
        const y = x.getRight() as AVLTreeNode<T>;
        const temp = y?.getRight()  as AVLTreeNode<T>;
        y?.setLeft(x);
        x.setLeft(temp);
        x.setHeight(
            1 + Math.max(
                (x.getLeft() as AVLTreeNode<T>).getHeight(),
                (x.getRight() as AVLTreeNode<T>).getHeight()
            )
        );
        y.setHeight(
            1 + Math.max(
                (y.getLeft() as AVLTreeNode<T>).getHeight(),
                (y.getRight() as AVLTreeNode<T>).getHeight()
            )
        );
        return y;
    }

} 