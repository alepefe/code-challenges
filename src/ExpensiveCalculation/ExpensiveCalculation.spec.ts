import { describe, expect, it } from 'vitest'
import { ExpensiveCalculation } from './ExpensiveCalculation'

describe('ExpensiveCalculation', () => {
  it.concurrent('should properly memoize results', async () => {
    const ec = new ExpensiveCalculation()

    // First invocation, a new calculation is performed
    const result1T1 = performance.now()
    const result1 = await ec.compute(5, 2)
    const result1T2 = performance.now()
    // Second invocation with the same arguments, result should be retrieved from cache
    const result2T1 = performance.now()
    const result2 = await ec.compute(5, 2)
    const result2T2 = performance.now()
    // Third invocation with different arguments, a new calculation is performed
    const result3 = await ec.compute(3, 4)

    const result1ElapsedTime = result1T2 - result1T1
    const result2ElapsedTime = result2T2 - result2T1

    expect(result1).toBe(10)
    expect(result2).toBe(10)
    expect(result3).toBe(12)
    expect(result2ElapsedTime).toBeLessThan(result1ElapsedTime)
  })
})
