import { EdgeType } from "../edgeType";
import { Graph } from "../graph";
import { GraphType } from "../graphType";
import { bellmanFord } from "./bellmanFord";


describe("Bellman Ford Algorithm works correctly", () => {
    let graph: Graph;
    
    beforeEach(() => {
        graph = new Graph(5, GraphType.DIRECTED, EdgeType.WEIGHTED);

        graph.addVertex(0, 'A');
        graph.addVertex(1, 'B');
        graph.addVertex(2, 'C');
        graph.addVertex(3, 'D');
        graph.addVertex(4, 'E');

        graph.addEdge(3, 0, 4);
        graph.addEdge(3, 2, 7);
        graph.addEdge(3, 4, 3);
        graph.addEdge(0, 2, 4);
        graph.addEdge(2, 0, -3);
        graph.addEdge(0, 4, 5);
        graph.addEdge(4, 2, 3);
        graph.addEdge(1, 2, -4);
        graph.addEdge(4, 1, 2);
    });

    test("algorithm correctly determines shortest path from given vertex to all other vertices", () => {
        const expected = [-2, 5, 1, 0, 3];
        const [, distances] = bellmanFord(graph, "D");

        expect(distances).toStrictEqual(expected);
     });

    test("Negative cycle detection returns true if negative cycle is found in graph", () => {
        graph.addEdge(2, 0, -9);

        const [negativeCycle, distances] = bellmanFord(graph, "D");

        expect(negativeCycle).toBe(true);
        expect(distances).toBeUndefined();
        

    });
});