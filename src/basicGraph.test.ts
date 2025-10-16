import { Graph } from './basicGraph'
import { CycleDetection } from './cycleDetection';
import { GraphType } from './graphType';

describe("Undirected graph works correctly", () => {
    let g: Graph;

    beforeEach(() => {
        g = new Graph(7, GraphType.UNDIRECTED);
    
        g.addVertex(0, "A");
        g.addVertex(1, "B");
        g.addVertex(2, "C");
        g.addVertex(3, "D");
        g.addVertex(4, "E");
        g.addVertex(5, "F");
        g.addVertex(6, "G");
         
        g.addEdge(3, 0);
        g.addEdge(0, 2);
        g.addEdge(0, 3);
        g.addEdge(0, 4);
        g.addEdge(4, 2);
        g.addEdge(2, 5);
        g.addEdge(2, 1);
        g.addEdge(2, 6);
        g.addEdge(1, 5);
    });

    test("Vertices are inserted correctly", () => {
        expect(g.getVertexData()).toStrictEqual(["A","B","C","D","E","F","G"]);
    });

    test("Edges are correctly inserted in the matrix", () => {

        expect(g.getMatrix()).toStrictEqual(
            [
                [0, 0, 1, 1, 1, 0, 0],
                [0, 0, 1, 0, 0, 1, 0],
                [1, 1, 0, 0, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 0, 0, 0, 0],
                [0, 1, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0]
            ]
        );
    });

    test("Depth first search from D traverses node in the correct order", () => {
        const expected = ["D", "A", "C", "B", "F", "E", "G"];
        const arr: string[] = [];
        g.dfs("D", (vertex: string) => arr.push(vertex));
        expect(arr).toStrictEqual(expected);
    });

    test("Breadth first search from D traverses node in the correct order", () => {
        const expected = ["D", "A", "C", "E", "B", "F", "G"];
        const arr: string[] = [];
        g.bfs("D", (vertex: string) => arr.push(vertex));
        expect(arr).toStrictEqual(expected);
    });
});

describe("Directed Graph works correctly", () => {
    let g: Graph;

    beforeEach(() => {
        g = new Graph(7, GraphType.DIRECTED);
    
        g.addVertex(0, 'A');
        g.addVertex(1, 'B');
        g.addVertex(2, 'C');
        g.addVertex(3, 'D');
        g.addVertex(4, 'E');
        g.addVertex(5, 'F');
        g.addVertex(6, 'G');

        g.addEdge(3, 0);
        g.addEdge(3, 4);
        g.addEdge(4, 0);
        g.addEdge(0, 2);
        g.addEdge(2, 5);
        g.addEdge(2, 6);
        g.addEdge(5, 1);
        g.addEdge(1, 2);
    });

    test("Edges are correctly inserted in the matrix", () => {

        expect(g.getMatrix()).toStrictEqual(
            [
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 1],
                [1, 0, 0, 0, 1, 0, 0],
                [1, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
            ]
        );
    });

    test("Depth first search from D traverses node in the correct order", () => {
        const expected = ["D", "A", "C", "F", "B", "G", "E"];
        const arr: string[] = [];
        g.dfs("D", (vertex: string) => arr.push(vertex));
        expect(arr).toStrictEqual(expected);
    });

    test("Breadth first search from D traverses node in the correct order", () => {
        const expected = ["D", "A", "E", "C", "F", "G", "B"];
        const arr: string[] = [];
        g.bfs("D", (vertex: string) => arr.push(vertex));
        expect(arr).toStrictEqual(expected);
    });
});

describe("Cyclic graphs can be proven", () => {

    test("isCyclic check returns true for undirected cyclic graph", () => {
        const g = new Graph(7, GraphType.UNDIRECTED);
    
        g.addVertex(0, 'A');
        g.addVertex(1, 'B');
        g.addVertex(2, 'C');
        g.addVertex(3, 'D');
        g.addVertex(4, 'E');
        g.addVertex(5, 'F');
        g.addVertex(6, 'G');

        g.addEdge(3, 0);
        g.addEdge(0, 2);
        g.addEdge(0, 3);
        g.addEdge(0, 4);
        g.addEdge(4, 2);
        g.addEdge(2, 5);
        g.addEdge(2, 1);
        g.addEdge(2, 6);
        g.addEdge(1, 5);

        expect(g.isCyclic()).toBe(true);
    });

    test("union find isCyclic check returns true for undirected cyclic graph", () => {
        const g = new Graph(7, GraphType.DIRECTED, CycleDetection.UNIONFIND);
    
        g.addVertex(0, 'A');
        g.addVertex(1, 'B');
        g.addVertex(2, 'C');
        g.addVertex(3, 'D');
        g.addVertex(4, 'E');
        g.addVertex(5, 'F');
        g.addVertex(6, 'G');

        g.addEdge(1, 0);
        g.addEdge(0, 3);
        g.addEdge(0, 2);
        g.addEdge(2, 3);
        g.addEdge(3, 4);
        g.addEdge(3, 5);
        g.addEdge(3, 6);
        g.addEdge(4, 5);

        expect(g.isCyclic()).toBe(true);
    });
});