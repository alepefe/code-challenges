import { createHash } from 'crypto'

function sortedMapKeys (map: Map<number, string>): Map<number, string> {
  const sortedKeys = Array.from(map.keys()).sort((a, b) => a - b) // sort keys in ascending order

  const sortedMap = new Map<number, string>()
  sortedKeys.forEach(key => {
    const value = map.get(key)
    if (value != null) {
      sortedMap.set(key, value)
    }
  })
  return sortedMap
}

type NodeName = string
interface Node { data: string[] }

export class ConsistentHashing {
  private readonly virtualNodes: number
  public nodes: Record<NodeName, Node>
  private hashRing: Map<number, string>

  constructor (nodes: NodeName[], virtualNodes = 10) {
    const tmpNodes: Record<NodeName, Node> = {}
    for (const node of nodes) {
      tmpNodes[node] = { data: [] }
    }

    this.nodes = tmpNodes
    this.virtualNodes = virtualNodes
    this.hashRing = new Map<number, string>()

    for (const node of Object.keys(this.nodes)) {
      for (let i = 0; i < this.virtualNodes; i++) {
        const virtualNode = `${node}-${i}`
        const hash = this.hash(virtualNode)
        this.hashRing.set(hash, node)
      }
    }

    this.hashRing = sortedMapKeys(this.hashRing)
  }

  public removeNode (nodeName: NodeName): void {
    const nodeNames = Object.keys(this.nodes)
    const nodeData = this.nodes[nodeName].data
    const { [nodeName]: deletedNode, ...remainingNodes } = this.nodes
    this.nodes = remainingNodes
    // delete this.nodes[nodeName]

    const tmpNodes: Record<string, Node> = {}
    for (const node of Object.keys(this.nodes)) {
      if (nodeNames.includes(node)) {
        tmpNodes[node] = this.nodes[node]
      } else {
        tmpNodes[node] = { data: [] }
      }
    }
    this.nodes = tmpNodes

    this.hashRing = new Map<number, string>()
    for (const node of Object.keys(this.nodes)) {
      for (let i = 0; i < this.virtualNodes; i++) {
        const virtualNode = `${node}-${i}`
        const hash = this.hash(virtualNode)
        this.hashRing.set(hash, node)
      }
    }

    this.hashRing = sortedMapKeys(this.hashRing)
    for (const data of nodeData) {
      const newNode = this.getNode(data)
      this.nodes[newNode].data.push(data)
    }
  }

  public addNode (nodeName: string): void {
    const tmpNodes: Record<NodeName, Node> = {}
    for (const node of Object.keys(this.nodes)) {
      tmpNodes[node] = { data: [] }
    }
    this.nodes = tmpNodes

    for (const node of Object.keys(this.nodes)) {
      for (let i = 0; i < this.virtualNodes; i++) {
        const virtualNode = `${node}-${i}`
        const hash = this.hash(virtualNode)
        this.hashRing.set(hash, node)
      }
    }
  }

  public getNode (key: string): string {
    const hash = this.hash(key)
    for (const [ringHash, node] of this.hashRing) {
      if (hash <= ringHash) {
        return node
      }
    }

    const nodes = Object.keys(this.nodes)
    return nodes[nodes.length - 1]
  }

  private hash (str: string): number {
    const hash = createHash('sha256')
    hash.update(str)
    const hexVal = hash.digest('hex')
    const val = Number.parseInt(hexVal, 16)
    return val
  }
}
