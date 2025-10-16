import { AbstractGraph } from './abstractGraph';
import { EdgeType } from './edgeType';
import { GraphType } from './graphType';

export class Graph extends AbstractGraph {
    constructor(size: number, graphType: GraphType = GraphType.UNDIRECTED, edgeType: EdgeType = EdgeType.UNWEIGHTED){
        super(size, graphType, edgeType);
    }
}