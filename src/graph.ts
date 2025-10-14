export class Graph {
    matrix: number[][] = [];
    #size: number;
    vertex_data: string[];
    graphType: GraphType;
    cycleDetection: CycleDetection;
    parent: number[]

    constructor(size: number, graphType: GraphType, cycleDetection: CycleDetection = CycleDetection.DFS) {
        this.#size = size;
        this.matrix = Array(size).fill(undefined).map(() => Array(size).fill(0));
        this.vertex_data = Array(size).fill('');
        this.graphType = graphType;
        this.cycleDetection = cycleDetection;
        this.parent = [... new Array(this.#size).keys()];

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
        if (this.graphType === GraphType.UNDIRECTED) {
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

    dfsCyclicUtil(v: number, visited: boolean[], parent: number, recStack: boolean[]): boolean {
        visited[v] = true;
        recStack[v] = true;

        for (let i = 0; i < this.#size; i++) {
            if (this.matrix[v][i] === 1) {
                if (!visited[i]) {
                    if (this.dfsCyclicUtil(i, visited, v, recStack)) {
                        return true;
                    }
                } else if (
                    (this.graphType === GraphType.UNDIRECTED && parent != i) ||
                    (this.graphType === GraphType.DIRECTED && recStack[i])
                ) {
                    return true;
                }
            }
        }
        recStack[v] = false;
        return false;
    }

    isCyclic(): boolean {
        switch (this.cycleDetection) {
            case CycleDetection.DFS:
                return this.dfsCycleDetection()
                break;
        
            case CycleDetection.UNIONFIND:
                return this.unionFindDetection();
                break;
        }
    }

    dfsCycleDetection(): boolean {
        const visited = Array(this.#size).fill(false);
        const recStack = Array(this.#size).fill(false);
        let isCyclic = false;
        visited.forEach((vertex, i, visited) => {
            if (!vertex) {
                if (this.dfsCyclicUtil(i, visited, -1, recStack)) {
                    isCyclic = true;
                }
            }
        });
        return isCyclic;
    }

    unionFindDetection(): boolean {
        for (let i = 0; i < this.#size; i++) {
            for (let j = i + 1; j < this.#size; j++) {
                if (this.matrix[i][j]) {
                    const x = this.find(i);
                    const y = this.find(j);
                    if (x === y) {
                        return true;
                    }
                    this.union(x, y);
                }
            }
        }
        return false;
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

    find(i: number): number {
        if (this.parent[i] === i) {
            return i;
        } 
        return this.find(this.parent[i]);
    }

    union(x: number, y: number): void {
        const x_root = this.find(x);
        const y_root = this.find(y);
        this.parent[x_root] = y_root;
    }
}

export enum GraphType {
    UNDIRECTED,
    DIRECTED
}

export enum CycleDetection {
    DFS,
    UNIONFIND
}