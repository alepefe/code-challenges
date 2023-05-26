import { describe, expect, it } from 'vitest'
import { Queue } from './Queue'

describe('Queue', () => {
  const queue = new Queue()

  it('should allow users to enqueue items', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.length).toBe(2)
  })

  it('should allow users to dequeue items', () => {
    queue.dequeue()
    queue.dequeue()
    expect(queue.length).toBe(0)
  })
})
