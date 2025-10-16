import { GraphType } from '../graphType';
import { Graph } from "../graph";
import { shortestPathFrom, getPath } from './dijkstrasAlgorithm';
import { EdgeType } from '../edgeType';

describe("Dijkstras Algorithm correctly calculates the shortest path", () => {

    let graph: Graph;

    beforeEach(() => {
        graph = new Graph(7, GraphType.UNDIRECTED, EdgeType.WEIGHTED);
    
        graph.addVertex(0, "A");
        graph.addVertex(1, "B");
        graph.addVertex(2, "C");
        graph.addVertex(3, "D");
        graph.addVertex(4, "E");
        graph.addVertex(5, "F");
        graph.addVertex(6, "G");
    });

    test("Vertices can be added to the Graph", () => {

        expect(graph.getVertexData()).toStrictEqual(["A", "B", "C", "D", "E", "F", "G"]);
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

        const [distances,] = shortestPathFrom(graph, "A");

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

        const [distances,] = shortestPathFrom(graph, "C");

        expect(distances).toStrictEqual([2, 4, 0, 3, 4, 6, 7]);
    });
});

describe("Dijkstras algorithm with directed graph", () => {
    test("Vertex B is unreachable in  a directed graph", () => {
        const graph = new Graph(7, GraphType.DIRECTED, EdgeType.WEIGHTED);

        graph.addVertex(0, "A");
        graph.addVertex(1, "B");
        graph.addVertex(2, "C");
        graph.addVertex(3, "D");
        graph.addVertex(4, "E");
        graph.addVertex(5, "F");
        graph.addVertex(6, "G");

        graph.addEdge(3, 0, 4);
        graph.addEdge(3, 4, 2);
        graph.addEdge(0, 2, 3);
        graph.addEdge(0, 4, 4);
        graph.addEdge(4, 2, 4);
        graph.addEdge(4, 6, 5);
        graph.addEdge(2, 5, 5);
        graph.addEdge(1, 2, 2);
        graph.addEdge(1, 5, 2);
        graph.addEdge(6, 5, 5);

        const [distances,] = shortestPathFrom(graph, "D");

        expect(distances).toStrictEqual([4, undefined, 6, 0, 2, 11, 7]);
    })
})

describe("Dijksras Algorithm returns actual shortest path", () => {
    let graph: Graph;

    beforeEach(() => {
        graph = new Graph(7, GraphType.UNDIRECTED, EdgeType.WEIGHTED);
    
        graph.addVertex(0, "A");
        graph.addVertex(1, "B");
        graph.addVertex(2, "C");
        graph.addVertex(3, "D");
        graph.addVertex(4, "E");
        graph.addVertex(5, "F");
        graph.addVertex(6, "G");
    
        graph.addEdge(3, 0, 4);
        graph.addEdge(3, 4, 2);
        graph.addEdge(0, 2, 3);
        graph.addEdge(0, 4, 4);
        graph.addEdge(4, 2, 4);
        graph.addEdge(4, 6, 5);
        graph.addEdge(2, 5, 5);
        graph.addEdge(2, 1, 2);
        graph.addEdge(1, 5, 2);
        graph.addEdge(6, 5, 5);
    });

    test("shortestPathFrom returns distances and predecessors", () => {
        const [distances, predecessors] = shortestPathFrom(graph, "D");

        expect(distances).toStrictEqual([4, 8, 6, 0, 2, 10, 7]);
        expect(predecessors).toStrictEqual([3, 2, 4, undefined, 3, 1, 4]);
    });

    test("getPath returns an array of vertices representing the shorrtest path from the starting vertex to any given vertex", () => {
        const [, predecessors] = shortestPathFrom(graph, "D");
        const shortestPath = getPath(graph, predecessors, "D", "F")

        expect(shortestPath).toStrictEqual(["D", "E", "C", "B", "F"]);
    });

});