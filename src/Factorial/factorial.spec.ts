import { describe, expect, it } from 'vitest'
import { factorial } from './factorial'

describe('factorial', () => {
  it('should return 24 when input value is 4', () => {
    expect(factorial(4)).toBe(24)
  })
})
