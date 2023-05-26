import { describe, expect, it } from 'vitest'
import { moveZeros } from './moveZeros'

describe('moveZeros', () => {
  it.concurrent('should return the input list with zeros at the end', () => {
    const output = moveZeros([0, 2, 3, 0, 9])
    const expectedResult = [2, 3, 9, 0, 0]
    expect(output.length).toBe(expectedResult.length)
    expect(output).toStrictEqual(expectedResult)
  })
})
