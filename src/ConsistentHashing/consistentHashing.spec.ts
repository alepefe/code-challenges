import { describe, expect, it } from 'vitest'
import { ConsistentHashing } from './consistentHashing'
import { uuid } from 'uuidv4'

describe('consistentHashing', () => {
  it.concurrent('should assign all available nodes', () => {
    const nodes = ['node1', 'node2', 'node3']
    const hashing = new ConsistentHashing(nodes, 10)

    const usedNodes: string[] = []

    let i = 0
    while (i < 10) {
      const key = uuid()
      const node = hashing.getNode(key)
      hashing.nodes[node].data.push(key)
      if (!usedNodes.includes(node)) {
        usedNodes.push(node)
      }
      i++
    }

    expect(usedNodes.length).toBe(nodes.length)
  })
})
