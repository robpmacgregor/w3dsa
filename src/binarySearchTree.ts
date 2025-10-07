import { TreeNode } from "./binaryTree";

export class BinarySearchTree {
    private root: TreeNode<number> | undefined;

    getRoot(): TreeNode<number> | undefined {
        return this.root;
    }

    insert(value: number| TreeNode<number>): void {
        if (typeof(value) === "number") {
            value = new TreeNode(value);
        }

        if (typeof(this.root) === "undefined") {
            this.root = value;
            return;
        }

        this.#insertNode(this.getRoot(), value);
    }

    #insertNode(node: TreeNode<number> | undefined, data: TreeNode<number>): TreeNode<number> {
        if (typeof(node) === "undefined") {
            return data;
        }

        if (data.getValue() < node.getValue()) {
            node.setLeft(this.#insertNode(node.getLeft(), data));
        } else if (data.getValue() > node.getValue()) {
            node.setRight(this.#insertNode(node.getRight(), data));
        }
        return node;
    }
    traverse(traversalType: TraversalType, fn: (node: TreeNode<number>|undefined) => void): void {
        switch (traversalType) {
            case TraversalType.PreOrder:
                
                break;
            case TraversalType.InOrder:
                this.#inOrderTraversal(this.root, fn);
                break;
            case TraversalType.PostOrder:
                
                break;
        }
    } 

    #inOrderTraversal(node: TreeNode<number>|undefined, fn: (node: TreeNode<number>|undefined) => void) {
        if (typeof(node) === "undefined") {
            return;
        }
        this.#inOrderTraversal(node?.getLeft(), fn);
        fn(node);
        this.#inOrderTraversal(node?.getRight(), fn);
    }

    lowestValue(): TreeNode<number>|undefined{
        return this.#lowestValueNode(this.root)
    }

    #lowestValueNode(node: TreeNode<number> | undefined): TreeNode<number> | undefined {
        while(typeof(node?.getLeft()) !== "undefined") {
            node = node.getLeft();
        }
        return node;
    }

    delete(value: number): void {
        this.#deleteNode(this.root, value);
    }

    #deleteNode(node: TreeNode<number> | undefined, value: number): TreeNode<number>|undefined {
        if (typeof(node) === "undefined") {
            return;
        }

        if (value < node.getValue()) {
            node.setLeft(this.#deleteNode(node.getLeft(), value));
        } else if (value > node.getValue()) {
            node.setRight(this.#deleteNode(node.getRight(), value));
        } else {
            if (typeof(node.getLeft()) === "undefined") {
                const temp = node.getRight();
                node = undefined;
                return temp;
            } else if (typeof(node.getRight()) === "undefined") {
                const temp = node.getLeft();
                node = undefined;
                return temp;                
            }
            const lowestValue = this.#lowestValueNode(node.getRight()) as TreeNode<number>;
            node.setValue(lowestValue.getValue());
            node.setRight(this.#deleteNode(node.getRight(), node.getValue()));
        }
        return node;
    }
}

export enum TraversalType {
    PreOrder,
    InOrder,
    PostOrder,
}