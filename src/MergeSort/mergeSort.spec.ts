import { describe, expect, it } from 'vitest'
import { mergeSort } from './mergeSort'

describe('mergeSort', () => {
  it.concurrent('should return the input list sorted', () => {
    const sorted = mergeSort([3, 8, 6, 2, 8, 7])

    const expectedResult = [2, 3, 6, 7, 8, 8]
    for (const el of sorted) {
      expect(expectedResult).includes(el)
    }

    expect(sorted).toStrictEqual(expectedResult)
  })
})
