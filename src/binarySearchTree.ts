import { BasicNode } from "./binaryTree";

export class BinarySearchTree<T> {
    private root: BasicNode<T>|undefined;

    getRoot(): BasicNode<T>|undefined {
        return this.root;
    }

    insert(value: T|BasicNode<T>): void {
        if (!(value instanceof BasicNode)) {
            value = new BasicNode(value);
        }

        if (typeof(this.root) === "undefined") {
            this.root = value;
            return;
        }

        this.#insertNode(this.getRoot(), value);
    }

    #insertNode(node: BasicNode<T> | undefined, data: BasicNode<T>): BasicNode<T> {
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
    traverse(traversalType: TraversalType, fn: (node: BasicNode<T>|undefined) => void): void {
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

    #inOrderTraversal(node: BasicNode<T>|undefined, fn: (node: BasicNode<T>|undefined) => void) {
        if (typeof(node) === "undefined") {
            return;
        }
        this.#inOrderTraversal(node?.getLeft(), fn);
        fn(node);
        this.#inOrderTraversal(node?.getRight(), fn);
    }

    lowestValue(): BasicNode<T>|undefined{
        return this.#lowestValueNode(this.root)
    }

    #lowestValueNode(node: BasicNode<T> | undefined): BasicNode<T> | undefined {
        while(typeof(node?.getLeft()) !== "undefined") {
            node = node.getLeft();
        }
        return node;
    }

    delete(value: T): void {
        this.#deleteNode(this.root, value);
    }

    #deleteNode(node: BasicNode<T> | undefined, value: T): BasicNode<T>|undefined {
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