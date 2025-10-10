export class Graph {
    matrix: number[][] = [];
    #size: number;
    vertex_data: string[];
    #graphType: GraphType;

    constructor(size: number, graphType: GraphType) {
        this.#size = size;
        this.matrix = Array(size).fill(undefined).map(() => Array(size).fill(0));
        this.vertex_data = Array(size).fill('');
        this.#graphType = graphType;
    }

    addVertex(index: number, vertex: string): void {
        if (index < 0 || index > this.#size) {
            throw new Error("Index is out of range");
        }
        this.vertex_data[index] = vertex;
    }

    getVertexData(): string[] {
        return this.vertex_data;
    }

    addEdge(u: number, v: number): void {

        if (u < 0 || u > this.#size) {
            throw new Error(`V axis ${v} is out of range`);
        }  
        if (v < 0 || v > this.#size) {
            throw new Error(`U axis ${u} is out of range`);
        }  
        this.matrix[u][v] = 1;
        if (this.#graphType === GraphType.UNDIRECTED) {
            this.matrix[v][u] = 1;
        }
    }

    getMatrix(): number[][] {
        return this.matrix;
    }

    dfs(value: string, fn: (vertex: string) => void): void {
        const visited = Array(this.#size).fill(false);
        const start = this.vertex_data.indexOf(value);
        this.dfsUtil(start, visited, fn);
    }

    dfsUtil(v: number, visited: boolean[], fn: (vertex: string) => void): void {
        visited[v] = true;
        fn(this.vertex_data[v]);
        this.matrix[v].forEach((edge, i) => {if (edge === 1 && !visited[i]) {this.dfsUtil(i, visited, fn)}});
    }

    bfs(value: string, fn: (vertex: string) => void): void {
        const visited = Array(this.#size).fill(false);
        const queue = [this.vertex_data.indexOf(value)];
        visited[queue[0]] = true;

        let currentVertexIndex: number; 
        while (queue.length > 0) {
            currentVertexIndex = queue.pop() as number;
            fn(this.vertex_data[currentVertexIndex]);
            this.matrix[currentVertexIndex].forEach((edge, i) => {if (edge === 1 && !visited[i]) {queue.unshift(i); visited[i] = true;}});
        }
    }
}

export enum GraphType {
    UNDIRECTED,
    DIRECTED
}