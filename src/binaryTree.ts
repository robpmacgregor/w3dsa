export class TreeNode<T> {
    private value: T;
    private left: TreeNode<T> | undefined = undefined;
    private right: TreeNode<T> | undefined = undefined;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setLeft(node: TreeNode<T>): TreeNode<T> {
        this.left = node;
        return this.left;
    }

    setRight(node: TreeNode<T>): TreeNode<T> {
        this.right = node;
        return this.right;
    }

    getLeft(): TreeNode<T> | undefined{
        return this.left;
    }

    getRight(): TreeNode<T> | undefined{
        return this.right;
    }
}

export function preOrderTraversal<T>(node: TreeNode<T> | undefined, fn: (value: T) => void): void {
    if (typeof node === "undefined") {
        return;
    }
    fn(node.getValue());
    preOrderTraversal<T>(node.getLeft(), fn);
    preOrderTraversal<T>(node.getRight(), fn);
}

export function inOrderTraversal<T>(node: TreeNode<T> | undefined, fn: (value: T) => void): void {
    if (typeof node === "undefined") {
        return;
    }
    inOrderTraversal<T>(node.getLeft(), fn);
    fn(node.getValue());
    inOrderTraversal<T>(node.getRight(), fn);
}

export function postOrderTraversal<T>(node: TreeNode<T> | undefined, fn: (value: T) => void): void {
    if (typeof node === "undefined") {
        return;
    }
    postOrderTraversal<T>(node.getLeft(), fn);
    postOrderTraversal<T>(node.getRight(), fn);
    fn(node.getValue());
}