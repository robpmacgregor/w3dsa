import { GraphType } from "../graph";
import { AdjacencyGraph } from "./dijkstrasAlgorithm";

describe("Dijkstras Algorithm correctly calculates the shortest path", () => {

    let graph: AdjacencyGraph;

    beforeEach(() => {
        graph = new AdjacencyGraph(7);
    
        graph.addVertex(0, "A");
        graph.addVertex(1, "B");
        graph.addVertex(2, "C");
        graph.addVertex(3, "D");
        graph.addVertex(4, "E");
        graph.addVertex(5, "F");
        graph.addVertex(6, "G");
    });

    test("Vertices can be added to the Graph", () => {

        expect(graph.getVertices()).toStrictEqual(["A", "B", "C", "D", "E", "F", "G"]);
    });

    test("GetMatrix returns properly constructed Adjacency matrix", () => {
        expect(graph.getMatrix()).toStrictEqual(
            [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
            ]
        );
    });

    test("addEdge sets up weighted edge in in the matrix", () => {
        graph.addEdge(0, 1, 2);
        graph.addEdge(0, 2, 2);
        graph.addEdge(2, 3, 3);
        graph.addEdge(3, 4, 1);
        graph.addEdge(4, 5, 1);
        graph.addEdge(5, 6, 1);
        graph.addEdge(3, 6, 4);

        expect(graph.getMatrix()).toStrictEqual(
                    [
                        [0, 2, 2, 0, 0, 0, 0],
                        [2, 0, 0, 0, 0, 0, 0],
                        [2, 0, 0, 3, 0, 0, 0],
                        [0, 0, 3, 0, 1, 0, 4],
                        [0, 0, 0, 1, 0, 1, 0],
                        [0, 0, 0, 0, 1, 0, 1],
                        [0, 0, 0, 4, 0, 1, 0]
                    ]
                );
        });
    
    test("shortestPathFrom A returns the distance of the shortest path from A to all other vertices", () => {
        graph.addEdge(0, 1, 2);
        graph.addEdge(0, 2, 2);
        graph.addEdge(2, 3, 3);
        graph.addEdge(3, 6, 4);
        graph.addEdge(3, 4, 1);
        graph.addEdge(4, 5, 2);
        graph.addEdge(5, 6, 1);

        const [distances,] = graph.shortestPathFrom("A");

        expect(distances).toStrictEqual([0, 2, 2, 5, 6, 8, 9]);
    });

    test("shortestPathFrom C returns the distance of the shortest path from C to all other vertices", () => {
        graph.addEdge(0, 1, 2);
        graph.addEdge(0, 2, 2);
        graph.addEdge(2, 3, 3);
        graph.addEdge(3, 6, 4);
        graph.addEdge(3, 4, 1);
        graph.addEdge(4, 5, 2);
        graph.addEdge(5, 6, 1);

        const [distances,] = graph.shortestPathFrom("C");

        expect(distances).toStrictEqual([2, 4, 0, 3, 4, 6, 7]);
    });
});

describe("Dijkstras algorithm with directed graph", () => {
    test("Vertex B is unreachable in  a directed graph", () => {
        const g = new AdjacencyGraph(7, GraphType.DIRECTED);

        g.addVertex(0, "A");
        g.addVertex(1, "B");
        g.addVertex(2, "C");
        g.addVertex(3, "D");
        g.addVertex(4, "E");
        g.addVertex(5, "F");
        g.addVertex(6, "G");

        g.addEdge(3, 0, 4);
        g.addEdge(3, 4, 2);
        g.addEdge(0, 2, 3);
        g.addEdge(0, 4, 4);
        g.addEdge(4, 2, 4);
        g.addEdge(4, 6, 5);
        g.addEdge(2, 5, 5);
        g.addEdge(1, 2, 2);
        g.addEdge(1, 5, 2);
        g.addEdge(6, 5, 5);

        const [distances,] = g.shortestPathFrom("D");

        expect(distances).toStrictEqual([4, undefined, 6, 0, 2, 11, 7]);
    })
})

describe("Dijksras Algorithm returns actual shortest path", () => {
    let g: AdjacencyGraph;

    beforeEach(() => {
        g = new AdjacencyGraph(7);
    
        g.addVertex(0, "A");
        g.addVertex(1, "B");
        g.addVertex(2, "C");
        g.addVertex(3, "D");
        g.addVertex(4, "E");
        g.addVertex(5, "F");
        g.addVertex(6, "G");
    
        g.addEdge(3, 0, 4);
        g.addEdge(3, 4, 2);
        g.addEdge(0, 2, 3);
        g.addEdge(0, 4, 4);
        g.addEdge(4, 2, 4);
        g.addEdge(4, 6, 5);
        g.addEdge(2, 5, 5);
        g.addEdge(2, 1, 2);
        g.addEdge(1, 5, 2);
        g.addEdge(6, 5, 5);
    });

    test("shortestPathFrom returns distances and predecessors", () => {
        const [distances, predecessors] = g.shortestPathFrom("D");

        expect(distances).toStrictEqual([4, 8, 6, 0, 2, 10, 7]);
        expect(predecessors).toStrictEqual([3, 2, 4, undefined, 3, 1, 4]);
    });

    test("getPath returns an array of vertices representing the shorrtest path from the starting vertex to any given vertex", () => {
        const [, predecessors] = g.shortestPathFrom("D");
        const shortestPath = g.getPath(predecessors, "D", "F")

        expect(shortestPath).toStrictEqual(["D", "E", "C", "B", "F"]);
    });

});