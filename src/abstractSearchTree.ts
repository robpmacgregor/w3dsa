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
        
    abstract deleteNode(node: N | undefined, data: N): N | undefined;

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
        return (typeof(this.root) !== "undefined") ? this.lowestValueNode(this.root) : undefined;
    }

    lowestValueNode(node: N ): N {
        while(typeof(node.getLeft()) !== "undefined") {
            node = node.getLeft() as N;
        }
        return node;
    }

    delete(value: T): void {
        let node: N | undefined = undefined;
        this.traverse(TraversalType.InOrder, n => {if (typeof(n) !== "undefined" && n.getValue() === value){node = n}})
        if (typeof(node) !== "undefined") {
            this.deleteNode(this.root, node);
        }
    }
}

export enum TraversalType {
    PreOrder,
    InOrder,
    PostOrder,
}