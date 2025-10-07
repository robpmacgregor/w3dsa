export function leftChildIndexOf(index: number): number {
    return 2 * index + 1;
}
export function rightChildIndexOf(index: number): number {
    return 2 * index + 2;
}

export class ArrayBackedBinaryTree<T> {
    #tree: T[] = [];

    setNode(i: number, value: T): void {
        if (i > this.#tree.length) {
            this.#tree = [
                ...this.#tree,
                ...new Array<T>(i - this.#tree.length)
            ]
        }
        this.#tree[i] = value;
    }

    getNode(i: number): T | undefined {
        return this.#tree[i];
    }

    length(): number {
        return this.#tree.length;
    }
} 

export function preOrderTraversal<T>(tree: ArrayBackedBinaryTree<T>, i: number, fn: (value: T|undefined ) => void) {
    if (i >= tree.length() || typeof(tree.getNode(i)) === "undefined") {
        fn(undefined);
        return;
    }

    fn(tree.getNode(i));
    preOrderTraversal<T>(tree, leftChildIndexOf(i), fn);
    preOrderTraversal<T>(tree, rightChildIndexOf(i), fn);

}

export function inOrderTraversal<T>(tree: ArrayBackedBinaryTree<T>, i: number, fn: (value: T|undefined ) => void) {
    if (i >= tree.length() || typeof(tree.getNode(i)) === "undefined") {
        fn(undefined);
        return;
    }

    inOrderTraversal<T>(tree, leftChildIndexOf(i), fn);
    fn(tree.getNode(i));
    inOrderTraversal<T>(tree, rightChildIndexOf(i), fn);
}

export function postOrderTraversal<T>(tree: ArrayBackedBinaryTree<T>, i: number, fn: (value: T|undefined ) => void) {
    if (i >= tree.length() || typeof(tree.getNode(i)) === "undefined") {
        fn(undefined);
        return;
    }

    postOrderTraversal<T>(tree, leftChildIndexOf(i), fn);
    postOrderTraversal<T>(tree, rightChildIndexOf(i), fn);
    fn(tree.getNode(i));
}