export interface NodeData {
  id: number
}

export class Node {
  private nextNode: Node | undefined
  private readonly nodeData: NodeData

  constructor (data: NodeData, nextNode?: Node) {
    this.nodeData = data
    this.nextNode = nextNode
  }

  public get next (): Node | undefined {
    return this.nextNode
  }

  public set next (nextNode: Node | undefined) {
    this.nextNode = nextNode
  }

  public get data (): NodeData {
    return this.nodeData
  }
}

export class LinkedList {
  public length: number = 0
  private head: Node | undefined = undefined

  public getHead (): Node | undefined {
    return this.head
  }

  public addNode (node: Node): void {
    if (this.head == null) {
      this.head = node
    } else {
      let currentNode = this.head
      while (currentNode.next != null) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this.length += 1
  }

  public searchById (id: number): Node | null {
    let currentNode = this.head
    while (currentNode != null) {
      if (currentNode.data.id === id) return currentNode
      currentNode = currentNode.next
    }
    return null
  }

  public removeById (id: number): void {
    let currentNode = this.head
    let previousNode: Node | undefined
    while (currentNode != null) {
      if (currentNode.data.id === id) {
        if (previousNode != null) {
          if (this.head?.data.id === currentNode.data.id) {
            this.head = currentNode.next
          }
          previousNode.next = currentNode.next
          this.length -= 1
          break
        } else {
          if (this.head?.data.id === currentNode.data.id) {
            this.head = currentNode.next
            this.length -= 1
            break
          }
        }
      } else {
        previousNode = currentNode
        currentNode = currentNode.next
      }
    }
  }

  public traverse (): IterableIterator<[Node, number] | [null, null]> {
    function * traverseGenerator (instance: LinkedList): IterableIterator<[Node, number] | [null, null]> {
      let currentNode = instance.head
      let idx = 0
      while (currentNode != null) {
        yield [currentNode, idx]
        currentNode = currentNode.next
        idx += 1
      }
    }
    return traverseGenerator(this)
  }
}
