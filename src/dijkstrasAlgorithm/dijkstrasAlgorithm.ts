import { GraphType } from "../graph";

export class AdjacencyGraph {
    private vertices: string[];
    private matrix: number[][] = [];
    constructor(private size: number, private graphType: GraphType = GraphType.UNDIRECTED){
        this.vertices = Array(size).fill('');
        this.buildMatrix();
    }

    private buildMatrix() {
        return this.matrix = Array(this.size).fill(undefined).map(() => Array(this.size).fill(0));
    }

    getMatrix(): number[][] {
        return this.matrix;
    }

    addVertex(index: number, value: string): void {
        if(this.vertices[index] === undefined) {
            throw new Error(`addVertex failed because index ${index} is out of bounds`);
        }
        this.vertices[index] = value;
    }

    getVertices(): string[] {
        return this.vertices;
    }

    addEdge(u: number, w: number, weight: number): void {
        if(this.matrix[u] === undefined) {
            throw new Error(`addEdge failed because index ${u} is out of bounds`);
        }
        if(this.matrix[u] === undefined) {
            throw new Error(`addEdge failed because index ${u} is out of bounds`);
        }
        this.matrix[u][w] = weight;    
        if (this.graphType === GraphType.UNDIRECTED) {
            this.matrix[w][u] = weight;           
        }       
    }
    
    shortestPathFrom(start: string): number[] {
        const startIndex = this.vertices.indexOf(start);
        const visited = new Array(this.size).fill(false);
        const distances: number[] = new Array(this.size).fill(undefined);
        distances[startIndex] = 0;

        for (let i = 0; i < this.size; i++) {
            let minDistance: number| undefined = undefined;
            let u: number | undefined = undefined;

            for (const i of [...new Array(this.size).keys()]) {
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

            for (const v of [...new Array(this.size).keys()]) {
                if (this.matrix[u][v] != 0 && !visited[v]) {
                    const alt = distances[u] + this.matrix[u][v];
                    
                    if (typeof(distances[v]) === "undefined" || alt < distances[v]) {
                        distances[v] = alt;
                    }
                }
            }
        }

        return distances;
    }
}