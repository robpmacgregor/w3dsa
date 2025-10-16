import { Graph } from "../graph";

export function bellmanFord(graph: Graph, startVertex: string): [boolean, number[] | undefined] {
    const startVertexIndex = graph.getVertexData().indexOf(startVertex);
    const distances = Array(graph.getSize()).fill(Number.POSITIVE_INFINITY);
    distances[startVertexIndex] = 0;

    for (let i = 0; i < graph.getSize(); i++) {
        for (const u of [...new Array(graph.getSize()).keys()]) {
            for (const v of [...new Array(graph.getSize()).keys()]) {
                if (graph.getMatrix()[u][v] != 0) {
                    if (distances[u] + graph.getMatrix()[u][v] < (distances[v] )) {
                        distances[v] = distances[u] + graph.getMatrix()[u][v];
                    }
                }
            }
        }
    }

    for (const u of [...new Array(graph.getSize()).keys()]) {
        for (const v of [...new Array(graph.getSize()).keys()]) {    
            if(graph.getMatrix()[u][v] !== 0) {
                if (distances[u] + graph.getMatrix()[u][v] < distances[v]) {
                    return [true, undefined];
                }
            }
        }
    }
    return [false, distances];
}