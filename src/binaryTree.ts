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