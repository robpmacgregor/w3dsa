import { BasicNode, TreeNode } from "./binaryTree";

export abstract class AbstractSearchTree<T, N extends TreeNode<T, N>> {
    private root: N | undefined;

    getRoot(): N | undefined {
        return this.root;
    }

    abstract createNode(value: T | N): N;

    insert(value: T | N): void {
        if (!(value instanceof TreeNode)) {
            value = this.createNode(value);
        }

        if (typeof(this.root) === "undefined") {
            this.root = value;
            return;
        }

        this.root = this.insertNode(this.getRoot(), value);
    }

    abstract insertNode(node: N | undefined, data: N): N ;

    traverse(traversalType: TraversalType, fn: (node: N | undefined) => void): void {
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

    #inOrderTraversal(node: N | undefined, fn: (node: N | undefined) => void) {
        if (typeof(node) === "undefined") {
            return;
        }
        if (typeof(node.getLeft()) !== "undefined") {
            this.#inOrderTraversal(node.getLeft(), fn);
        }
        fn(node);
        if (typeof(node.getRight()) !== "undefined") {
            this.#inOrderTraversal(node?.getRight(), fn);
        }
    }

    lowestValue(): N | undefined{
        return this.#lowestValueNode(this.root)
    }

    #lowestValueNode(node: N | undefined): N | undefined {
        while(typeof(node?.getLeft()) !== "undefined") {
            node = node.getLeft();
        }
        return node;
    }

    delete(value: T): void {
        this.#deleteNode(this.root, value);
    }

    #deleteNode(node: N | undefined, value: T): N | undefined {
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
            const lowestValue = this.#lowestValueNode(node.getRight()) as BasicNode<T>;
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