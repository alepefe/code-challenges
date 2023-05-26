// Todo
export class Vertex {
  key: number
  connections: Map<Vertex, number> = new Map<Vertex, number>()

  constructor (key: number) {
    this.key = key
  }

  public addAdjacent (vertex: Vertex, weight: number = 0): void {
    this.connections.set(vertex, weight)
  }

  public getConnections (): any {
    return this.connections.keys()
  }

  public getWeight (vertex: Vertex): number | undefined {
    return this.connections.get(vertex)
  }
}

export class Graph {
  vertexMap: Map<number, Vertex> = new Map<number, Vertex>()

  public addVertex (key: number): void {
    this.vertexMap.set(key, new Vertex(key))
  }

  public addEdge (v1: Vertex, v2: Vertex, weight: number = 0): void {

  }

  public getVertex (key: number): Vertex | undefined {
    return this.vertexMap.get(key)
  }
}
