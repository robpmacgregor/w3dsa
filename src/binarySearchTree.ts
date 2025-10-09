import { AbstractSearchTree } from "./abstractSearchTree";
import { BasicNode } from "./binaryTree";

export class BinarySearchTree<T> extends AbstractSearchTree<T, BasicNode<T>> {
   createNode(value: T): BasicNode<T> {
        return new BasicNode<T>(value);
    }

    override insertNode(node: BasicNode<T> | undefined, data: BasicNode<T>): BasicNode<T> {
        if (typeof(node) === "undefined") {
            return data;
        }

        if (data.getValue() < node.getValue()) {
            node.setLeft(this.insertNode(node.getLeft(), data));
        } else if (data.getValue() > node.getValue()) {
            node.setRight(this.insertNode(node.getRight(), data));
        }
        return node;
    }
}