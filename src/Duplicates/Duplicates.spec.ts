import { describe, expect, it } from 'vitest'
import Duplicates from './Duplicates'

describe('Duplicates', () => {
  describe('removeDuplicates', () => {
    it.concurrent('should remove duplicate numbers from an array', () => {
      const arr = [1, 2, 2]
      const expectedResult = [1, 2]

      const result = Duplicates.removeDuplicates(arr)
      expect(result).toStrictEqual(expectedResult)
    })
  })

  describe('searchDuplicates', () => {
    it.concurrent('should return duplicate numbers from an array', () => {
      const arr = [1, 2, 2]
      const expectedResult = [2]

      const result = Duplicates.searchDuplicates(arr)
      expect(result).toStrictEqual(expectedResult)
    })
  })
})
