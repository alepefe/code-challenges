import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { BinaryTree } from './BinaryTree'

describe('BinaryTree', () => {
  let binaryTree: BinaryTree

  beforeAll(() => {
    const b1 = new BinaryTree(1)
    b1.insertLeft(new BinaryTree(2))
    b1.insertLeft(new BinaryTree(3))

    const b2 = new BinaryTree(4)
    b2.insertLeft(new BinaryTree(5))
    b2.insertRight(new BinaryTree(6))
    b2.insertLeft(new BinaryTree(7))
    b2.insertRight(new BinaryTree(8))

    binaryTree = new BinaryTree(0)
    binaryTree.insertLeft(b1)
    binaryTree.insertRight(b2)
  })

  describe('breadthFirstSearch', () => {
    it('should return true if node is found', () => {
      const result = binaryTree.breadthFirstSearch(7)
      expect(result).toBe(true)
    })

    it('should return false if node is not found', () => {
      const result = binaryTree.breadthFirstSearch(10)
      expect(result).toBe(false)
    })
  })

  describe('preOrderTraversal', () => {
    beforeEach(() => {
      console.log = vi.fn()
    })

    it('should visit all nodes', () => {
      binaryTree.preOrderTraversal()

      expect(console.log).toHaveBeenCalledTimes(9)
      for (let i = 0; i < 9; i++) {
        expect(console.log).toHaveBeenCalledWith(i)
      }

      expect(console.log).toHaveBeenLastCalledWith(8)
    })
  })

  describe('postOrderTraversal', () => {
    beforeEach(() => {
      console.log = vi.fn()
    })

    it('should visit all nodes', () => {
      binaryTree.postOrderTraversal()

      expect(console.log).toHaveBeenCalledTimes(9)
      for (let i = 0; i < 9; i++) {
        expect(console.log).toHaveBeenCalledWith(i)
      }

      expect(console.log).toHaveBeenLastCalledWith(0)
    })
  })

  describe('invert', () => {
    beforeEach(() => {
      console.log = vi.fn()
    })

    it('should invert the given binary tree', () => {
      binaryTree.invert()
      binaryTree.preOrderTraversal()

      console.log(binaryTree.key)
    })
  })
})
