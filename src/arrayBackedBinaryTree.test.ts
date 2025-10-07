import { leftChildIndexOf, rightChildIndexOf, ArrayBackedBinaryTree } from './arrayBackedBinaryTree'
import { preOrderTraversal, inOrderTraversal, postOrderTraversal } from './arrayBackedBinaryTree';

describe("Array backed binary tree woorks correctly", () => {   
    let tree: ArrayBackedBinaryTree<string>;
    
    beforeEach(() => {
        tree = new ArrayBackedBinaryTree()
        tree.setNode(0,"R");
        tree.setNode(leftChildIndexOf(0), "A");
        tree.setNode(rightChildIndexOf(0), "B");

        tree.setNode(
            leftChildIndexOf(
                leftChildIndexOf(0)
            ),
            "C"
        );
        
        tree.setNode(
            rightChildIndexOf(
                leftChildIndexOf(0)
            ),
            "D"
        );

         tree.setNode(
            leftChildIndexOf(
                rightChildIndexOf(0)
            ),
            "E"
        );
        
        tree.setNode(
            rightChildIndexOf(
                rightChildIndexOf(0)
            ),
            "F"
        );  
                
        tree.setNode(
            rightChildIndexOf(
                rightChildIndexOf(
                    rightChildIndexOf(0)
                )
            ),
            "G"
        );       
    });

    test("leftChildIndex returns the correct index value", () => {
        const index = 2;
        const expected = 5;

        expect(leftChildIndexOf(index)).toBe(expected);
    });

    test("rightChildIndex returns the correct index value", () => {
        const index = 2;
        const expected = 6;

        expect(rightChildIndexOf(index)).toBe(expected);
    });

    test("ArrayBackedBinaryTree set method stores data at the correct index", () => {
        expect(tree.getNode(0)).toBe("R");
        expect(tree.getNode(1)).toBe("A");
        expect(tree.getNode(2)).toBe("B");
        expect(tree.getNode(3)).toBe("C");
        expect(tree.getNode(4)).toBe("D");
        expect(tree.getNode(5)).toBe("E");
        expect(tree.getNode(6)).toBe("F");
        expect(tree.getNode(7)).toBe(undefined);
        expect(tree.getNode(8)).toBe(undefined);
        expect(tree.getNode(9)).toBe(undefined);
        expect(tree.getNode(10)).toBe(undefined);
        expect(tree.getNode(11)).toBe(undefined);
        expect(tree.getNode(12)).toBe(undefined);
        expect(tree.getNode(13)).toBe(undefined);
        expect(tree.getNode(14)).toBe("G");
    })

    test("Pre-order traversal coreectly traverses the tree", () => {
        const arr: (string | undefined)[] = []; 
        const expected = ['R', 'A', 'C', undefined, undefined, 'D', undefined, undefined, 'B', 'E', undefined, undefined, 'F', undefined, 'G', undefined, undefined];

        preOrderTraversal<string>(tree, 0, (el : string|undefined) => arr.push(el))

        expect(arr).toStrictEqual(expected);

    });

    test("In-order traversal coreectly traverses the tree", () => {
        const arr: (string | undefined)[] = []; 
        const expected = [undefined, "C", undefined, "A", undefined, "D", undefined, "R" , undefined, "E", undefined, "B", undefined,  "F", undefined, "G", undefined];

        inOrderTraversal<string>(tree, 0, (el : string|undefined) => arr.push(el))

        expect(arr).toStrictEqual(expected);

    });

    test("Post-order traversal coreectly traverses the tree", () => {
        const arr: (string | undefined)[] = []; 
        const expected = [undefined, undefined, "C", undefined, undefined, "D", "A", undefined, undefined, "E", undefined, undefined, undefined, "G", "F", "B", "R"];

        postOrderTraversal<string>(tree, 0, (el : string|undefined) => arr.push(el))

        expect(arr).toStrictEqual(expected);

    });
});