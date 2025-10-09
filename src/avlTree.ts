
import { AbstractSearchTree, TraversalType } from "./abstractSearchTree";
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

export class AVLTree<T> extends AbstractSearchTree<T, AVLTreeNode<T>> {
    override createNode(value: T): AVLTreeNode<T> {
        return new AVLTreeNode<T>(value);
    }

    override insertNode(node: AVLTreeNode<T> | undefined, data: AVLTreeNode<T>): AVLTreeNode<T> {
        if (typeof(node) === "undefined") {
            return data;
        }

        if (data.getValue() < node.getValue()) {
            node.setLeft(this.insertNode(node.getLeft(), data));
        } else if (data.getValue() > node.getValue()) {
            node.setRight(this.insertNode(node.getRight(), data));
        }

        node.setHeight(
            1 + Math.max(
                node.getLeft()?.getHeight() ?? 0,
                node.getRight()?.getHeight() ?? 0
            )
        );
        const balance = this.getBalance(node) ?? 0;

        if (balance > 1 && this.getBalance(node.getLeft()) >= 0) {
            return this.rightRotate(node);
        }
        
        if (balance > 1 && this.getBalance(node.getLeft()) < 0) {
            node.setLeft(this.leftRotate(node.getLeft() as AVLTreeNode<T>));
            return this.rightRotate(node);
        }

        if (balance < -1 && this.getBalance(node.getRight()) <= 0) {
            return this.leftRotate(node);
        }

        if (balance < -1 && this.getBalance(node.getRight()) > 0) {
            node.setRight(this.rightRotate(node.getRight() as AVLTreeNode<T>));
            return this.leftRotate(node);
        }

        return node;
    }

    getBalance(node: T | AVLTreeNode<T> | undefined) : number {
        
        if (!(node instanceof AVLTreeNode)) {
            this.traverse(TraversalType.InOrder, n => {if (typeof(n) !== "undefined" && n.getValue() === node){node = n}})
        }
        if (node instanceof AVLTreeNode) {
            return (node.getLeft()?.getHeight() ?? 0) - (node.getRight()?.getHeight() ?? 0);
        }
        return 0;
    }

    rightRotate(y: AVLTreeNode<T>): AVLTreeNode<T> {
        const x = y.getLeft() as AVLTreeNode<T>;
        const temp = x?.getRight()  as AVLTreeNode<T>;
        x?.setRight(y);
        y.setLeft(temp);
        y.setHeight(
            1 + Math.max(
                y.getLeft()?.getHeight() ?? 0,
                y.getRight()?.getHeight() ?? 0
            )
        );
        x.setHeight(
            1 + Math.max(
                x.getLeft()?.getHeight() ?? 0,
                x.getRight()?.getHeight() ?? 0
            )
        );
        return x;
    }

    leftRotate(x: AVLTreeNode<T>): AVLTreeNode<T> {
        const y = x.getRight() as AVLTreeNode<T>;
        const temp = y?.getLeft()  as AVLTreeNode<T>;
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