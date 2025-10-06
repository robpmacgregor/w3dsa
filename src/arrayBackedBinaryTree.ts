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
} 