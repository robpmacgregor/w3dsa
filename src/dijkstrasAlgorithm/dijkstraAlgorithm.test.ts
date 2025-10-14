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

        const distances = graph.shortestPathFrom("A");

        expect(distances).toStrictEqual([0, 2, 2, 5, 6, 8, 9]);
    });

        test("shortestPathFrom A returns the distance of the shortest path from A to all other vertices", () => {
        graph.addEdge(0, 1, 2);
        graph.addEdge(0, 2, 2);
        graph.addEdge(2, 3, 3);
        graph.addEdge(3, 6, 4);
        graph.addEdge(3, 4, 1);
        graph.addEdge(4, 5, 2);
        graph.addEdge(5, 6, 1);

        const distances = graph.shortestPathFrom("C");

        expect(distances).toStrictEqual([2, 4, 0, 3, 4, 6, 7]);
    });
});
