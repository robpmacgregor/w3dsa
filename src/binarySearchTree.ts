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

    override deleteNode(node: BasicNode<T> | undefined, data: BasicNode<T>): BasicNode<T> | undefined {
        if (typeof(node) === "undefined") {
            return data;
        }

        if (data.getValue() < node.getValue()) {
            node.setLeft(this.deleteNode(node.getLeft(), data));
        } else if (data.getValue() > node.getValue()) {
            node.setRight(this.deleteNode(node.getRight(), data));
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
            const lowestValue = this.lowestValueNode(node.getRight() as BasicNode<T>);
            node.setValue(lowestValue.getValue());
            node.setRight(this.deleteNode(node.getRight(), node));
        }
        return node;
    }
}