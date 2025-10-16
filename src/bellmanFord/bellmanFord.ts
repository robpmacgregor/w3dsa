import { Graph } from "../graph";
type NegativeCycleFound = [true, undefined, undefined]; 
type NegativeCycleNotFound = [false, number[], string[]]; 

export function bellmanFord(graph: Graph, startVertex: string): NegativeCycleFound | NegativeCycleNotFound {
    const startVertexIndex = graph.getVertexData().indexOf(startVertex);
    const distances = Array(graph.getSize()).fill(Number.POSITIVE_INFINITY);
    const predecessors = Array(graph.getSize()).fill(undefined);
    distances[startVertexIndex] = 0;

    for (let i = 0; i < graph.getSize(); i++) {
        for (const u of [...new Array(graph.getSize()).keys()]) {
            for (const v of [...new Array(graph.getSize()).keys()]) {
                if (graph.getMatrix()[u][v] != 0) {
                    if (distances[u] + graph.getMatrix()[u][v] < (distances[v] )) {
                        distances[v] = distances[u] + graph.getMatrix()[u][v];
                        predecessors[v] = u;
                    }
                }
            }
        }
    }

    for (const u of [...new Array(graph.getSize()).keys()]) {
        for (const v of [...new Array(graph.getSize()).keys()]) {    
            if(graph.getMatrix()[u][v] !== 0) {
                if (distances[u] + graph.getMatrix()[u][v] < distances[v]) {
                    return [true, undefined, undefined];
                }
            }
        }
    }
    return [false, distances, predecessors];
}