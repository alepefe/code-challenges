export class BinaryTree {
  public readonly key: number
  private leftChild: BinaryTree | undefined
  private rightChild: BinaryTree | undefined

  constructor (key: number) {
    this.key = key
  }

  public insertLeft (binaryTree: BinaryTree): void {
    if (this.leftChild == null) {
      this.leftChild = binaryTree
    } else {
      this.leftChild.insertLeft(binaryTree)
    }
  }

  public insertRight (binaryTree: BinaryTree): void {
    if (this.rightChild == null) {
      this.rightChild = binaryTree
    } else {
      this.rightChild.insertRight(binaryTree)
    }
  }

  public breadthFirstSearch (key: number): boolean {
    let current: BinaryTree[] = [this]
    let next: BinaryTree[] = []

    while (current.length > 0) {
      for (const node of current) {
        if (node.key === key) return true
        if (node.leftChild != null) next.push(node.leftChild)
        if (node.rightChild != null) next.push(node.rightChild)
      }
      current = next
      next = []
    }
    return false
  }

  public preOrderTraversal (binaryTree: BinaryTree = this): void {
    console.log(binaryTree.key)
    if (binaryTree.leftChild != null) {
      binaryTree.preOrderTraversal(binaryTree.leftChild)
    }

    if (binaryTree.rightChild != null) {
      binaryTree.preOrderTraversal(binaryTree.rightChild)
    }
  }

  public postOrderTraversal (binaryTree: BinaryTree = this): void {
    if (binaryTree.leftChild != null) {
      binaryTree.preOrderTraversal(binaryTree.leftChild)
    }

    if (binaryTree.rightChild != null) {
      binaryTree.preOrderTraversal(binaryTree.rightChild)
    }

    console.log(binaryTree.key)
  }

  public invert (): void {
    let current: BinaryTree[] = [this]
    let next: BinaryTree[] = []

    while (current.length > 0) {
      for (const node of current) {
        if (node.leftChild != null) next.push(node.leftChild)
        if (node.rightChild != null) next.push(node.rightChild)

        const tmpRight = node.leftChild
        node.leftChild = node.rightChild
        node.rightChild = tmpRight
      }
      current = next
      next = []
    }
  }
}
