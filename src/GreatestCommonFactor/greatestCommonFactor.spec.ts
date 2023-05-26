import { describe, expect, it } from 'vitest'
import { greatestCommonFactor } from './greatestCommonFactor'

describe('greatestCommonFactor', () => {
  it.concurrent('should return 4 as input is 20 and 12', () => {
    expect(greatestCommonFactor(20, 12)).toBe(4)
  })

  it.concurrent('should return 1 as input is 2 and 3', () => {
    expect(greatestCommonFactor(2, 3)).toBe(1)
  })
})
