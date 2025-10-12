import { AdjacencyGraph } from "./dijkstrasAlgorithm";

describe("Dijkstras Algorithm correctly calculates the shortest path", () => {
    test("Vertices can be added to the Graph", () => {
        const graph = new AdjacencyGraph(7);

        graph.addVertex(0, "A");
        graph.addVertex(1, "B");
        graph.addVertex(2, "C");
        graph.addVertex(3, "D");
        graph.addVertex(4, "E");
        graph.addVertex(5, "F");
        graph.addVertex(6, "G");

        expect(graph.getVertices()).toStrictEqual(["A", "B", "C", "D", "E", "F", "G"]);
    });
});
