export class TreeNode<T, N extends TreeNode<T, N>> {
    private value: T;
    private left: N | undefined = undefined;
    private right: N | undefined = undefined;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): TreeNode<T, N> | undefined {
        this.value = value;
        return this;
    }

    setLeft(node: N | undefined): TreeNode<T, N> | undefined {
        this.left = node;
        return this.left;
    }

    setRight(node: N | undefined): TreeNode<T, N> | undefined {
        this.right = node;
        return this.right;
    }

    getLeft(): TreeNode<T, N> | undefined{
        return this.left;
    }

    getRight(): TreeNode<T, N> | undefined{
        return this.right;
    }
}

export class BasicNode<T> extends TreeNode<T, BasicNode<T>> {}

export function preOrderTraversal<T, N extends TreeNode<T, N>>(node: BasicNode<T> | undefined, fn: (value: T) => void): void {
    if (typeof node === "undefined") {
        return;
    }
    fn(node.getValue());
    preOrderTraversal<T, N>(node.getLeft(), fn);
    preOrderTraversal<T, N>(node.getRight(), fn);
}

export function inOrderTraversal<T, N extends TreeNode<T, N>>(node: BasicNode<T> | undefined, fn: (value: T) => void): void {
    if (typeof node === "undefined") {
        return;
    }
    inOrderTraversal<T, N>(node.getLeft(), fn);
    fn(node.getValue());
    inOrderTraversal<T, N>(node.getRight(), fn);
}

export function postOrderTraversal<T, N extends TreeNode<T, N>>(node: BasicNode<T>|undefined, fn: (value: T) => void): void {
    if (typeof node === "undefined") {
        return;
    }
    postOrderTraversal<T, N>(node.getLeft(), fn);
    postOrderTraversal<T, N>(node.getRight(), fn);
    fn(node.getValue());
}
