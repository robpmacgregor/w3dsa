import { AbstractGraph } from './abstractGraph';
import { CycleDetection } from './cycleDetection';
import { GraphType } from './graphType';

export class Graph extends AbstractGraph{
    cycleDetection: CycleDetection;
    parent: number[]

    constructor(size: number, graphType: GraphType, cycleDetection: CycleDetection = CycleDetection.DFS) {
        super(size, graphType);
        this.cycleDetection = cycleDetection;
        this.parent = [... new Array(this.size).keys()];

    }
    dfs(value: string, fn: (vertex: string) => void): void {
        const visited = Array(this.size).fill(false);
        const start = this.vertexData.indexOf(value);
        this.dfsUtil(start, visited, fn);
    }

    dfsUtil(v: number, visited: boolean[], fn: (vertex: string) => void): void {
        visited[v] = true;
        fn(this.vertexData[v]);
        this.matrix[v].forEach((edge, i) => {if (edge === 1 && !visited[i]) {this.dfsUtil(i, visited, fn)}});
    }

    dfsCyclicUtil(v: number, visited: boolean[], parent: number, recStack: boolean[]): boolean {
        visited[v] = true;
        recStack[v] = true;

        for (let i = 0; i < this.size; i++) {
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
        const visited = Array(this.size).fill(false);
        const recStack = Array(this.size).fill(false);
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
        for (let i = 0; i < this.size; i++) {
            for (let j = i + 1; j < this.size; j++) {
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
        const visited = Array(this.size).fill(false);
        const queue = [this.vertexData.indexOf(value)];
        visited[queue[0]] = true;

        let currentVertexIndex: number; 
        while (queue.length > 0) {
            currentVertexIndex = queue.pop() as number;
            fn(this.vertexData[currentVertexIndex]);
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

