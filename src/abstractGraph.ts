import { GraphType } from "./graphType";
import { EdgeType } from "./edgeType";

export abstract class AbstractGraph {
    matrix: number[][] = [];
    protected size: number;
    vertexData: string[];

    constructor(size: number, protected graphType: GraphType = GraphType.UNDIRECTED, protected edgeType: EdgeType = EdgeType.UNWEIGHTED) {
        this.size = size;
        this.matrix = Array(size).fill(undefined).map(() => Array(size).fill(0));
        this.vertexData = Array(size).fill('');
    }

    addVertex(index: number, vertex: string): void {
        if (index < 0 || index > this.size) {
            throw new Error("Index is out of range");
        }
        this.vertexData[index] = vertex;
    }

    getVertexData(): string[] {
        return this.vertexData;
    }

    addEdge(u: number, v: number, weight: number = 1): void {
        if (u < 0 || u > this.size) {
            throw new Error(`V axis ${v} is out of range`);
        }  
        if (v < 0 || v > this.size) {
            throw new Error(`U axis ${u} is out of range`);
        }  
        
        weight = (this.edgeType === EdgeType.WEIGHTED) ? weight : 1;
        this.matrix[u][v] = weight;
        if (this.graphType === GraphType.UNDIRECTED) {
            this.matrix[v][u] = weight;
        }
    }

    getMatrix(): number[][] {
        return this.matrix;
    }

    getSize(): number {
        return this.size;
    }
}