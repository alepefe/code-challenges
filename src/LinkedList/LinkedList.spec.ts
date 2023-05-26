import { describe, expect, it } from 'vitest'
import { LinkedList, Node } from './LinkedList'

describe('LinkedList', () => {
  const linkedList = new LinkedList()

  it('should be able to add nodes', () => {
    for (let i = 0; i < 10; i++) {
      const node = new Node({ id: i + 1 })
      linkedList.addNode(node)
    }

    expect(linkedList.length).toBe(10)
    for (const [node, idx] of linkedList.traverse()) {
      if (node != null) {
        expect(node.data.id).toBe(idx + 1)
      }
    }
  })

  it('should be able to delete a node', () => {
    linkedList.removeById(3)

    expect(linkedList.length).toBe(9)
    for (const [node] of linkedList.traverse()) {
      if (node != null) {
        expect(node.data.id).not.toBe(3)
      }
    }
  })

  it('should be able to delete the head node and replace it', () => {
    linkedList.removeById(1)

    expect(linkedList.length).toBe(8)
    for (const [node] of linkedList.traverse()) {
      if (node != null) {
        expect(node.data.id).not.toBe(1)
      }
    }
    expect(linkedList.getHead() as Node).toBeDefined()
  })
})
