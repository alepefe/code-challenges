import { describe, expect, it } from 'vitest'
import { findHighestDigit, isAnagram, isPalindrome } from './stringManipulation'

interface isAnagramParams {str1: string, str2: string}

describe('stringManipulation', () => {
  describe('isAnagram', () => {
    it.each([
      { str1: 'lana', str2: 'anal' },
      { str1: 'tet', str2: 'tet' }
    ])('should return true as $str1 and $str2 make an anagram', (params: isAnagramParams) => {
      // When
      const result = isAnagram(params.str1, params.str2)

      // Then
      expect(result).toBe(true)
    })

    it.each([
      { str1: 'lana', str2: 'Mullijuan' }
    ])('should return false as $str1 and $str2 don\'t make an anagram', (params: isAnagramParams) => {
      // When
      const result = isAnagram(params.str1, params.str2)

      // Then
      expect(result).toBe(false)
    })
  })

  describe('isPalindrome', () => {
    it.each([
      'madam',
      'racecar'
    ])('should return true as %s is a palindrome', (param: string) => {
      // When
      const result = isPalindrome(param)

      // Then
      expect(result).toBe(true)
    })

    it.each([
      'elephant',
      'room'
    ])('should return false as %s is not a palindrome', (param: string) => {
      // When
      const result = isPalindrome(param)

      // Then
      expect(result).toBe(false)
    })
  })

  describe('findHighestDigit', () => {
    it('should find the highest digit in the given string', () => {
      // When
      const result = findHighestDigit('h891masa81')

      // Then
      expect(result).toBe(891)
    })
  })
})
