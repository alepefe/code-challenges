import { describe, expect, it } from 'vitest'
import { toBinary } from './toBinary'

describe('toBinary', () => {
  it.concurrent('should return 11 for base10 3', () => {
    const result = toBinary(3)
    expect(result).toBe(11)
  })
})
