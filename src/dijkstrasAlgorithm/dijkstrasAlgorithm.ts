export class AdjacencyGraph {
    private vertices: string[];
    constructor(private size: number){
        this.vertices = Array(size).fill('');
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
}