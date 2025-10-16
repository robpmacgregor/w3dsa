import { Graph } from "../graph";

export function shortestPathFrom(graph: Graph, start: string): number[][] {
    const startIndex = graph.getVertexData().indexOf(start);
    const visited = new Array(graph.getSize()).fill(false);
    const distances: number[] = new Array(graph.getSize()).fill(undefined);
    const predecessors: number[] = new Array(graph.getSize()).fill(undefined);
    distances[startIndex] = 0;

    for (let i = 0; i < graph.getSize(); i++) {
        let minDistance: number| undefined = undefined;
        let u: number | undefined = undefined;

        for (const i of [...new Array(graph.getSize()).keys()]) {
            if (
                !visited[i] && 
                (
                    typeof(minDistance) === "undefined" ||
                    distances[i] < minDistance)
                ) {
                    minDistance = distances[i];
                    u = i;
                }
        }
        
        if (typeof(u) === "undefined") {
            break;
        }
        
        visited[u] = true;

        for (const v of [...new Array(graph.getSize()).keys()]) {
            if (graph.getMatrix()[u][v] != 0 && !visited[v]) {
                const alt = distances[u] + graph.getMatrix()[u][v];
                
                if (typeof(distances[v]) === "undefined" || alt < distances[v]) {
                    distances[v] = alt;
                    predecessors[v] = u;
                }
            }
        }
    }

    return [distances, predecessors];
}

export function getPath(graph: Graph, predecessors: number[], startVertex: string, endVertex: string): string[] {
    const path: string[] = []
    let current: number | undefined = graph.getVertexData().indexOf(endVertex);

    while(typeof(current) !== "undefined") {
        path.unshift(graph.getVertexData()[current]);
        current = predecessors[current];
        if (current === graph.getVertexData().indexOf(startVertex)) {
            path.unshift(startVertex);
            break;
        }
    }
    return path; 
}