import { describe, expect, it } from 'vitest'
import { binarySearch } from './binarySearch'

describe('binarySearch', () => {
  it.concurrent.each([
    { list: [1, 2, 3, 4, 5, 6], valueToFind: 1 },
    { list: [1, 2, 3, 4, 5, 6], valueToFind: 3 },
    { list: [1, 2, 3, 4, 5, 6], valueToFind: 6 }
  ])('should find $valueToFind in $list', (params: { list: number[], valueToFind: number }) => {
    const result = binarySearch(params.list, params.valueToFind)
    expect(result).toBe(true)
  })
})
