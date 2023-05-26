import { describe, expect, it } from 'vitest'
import { linearSearch } from './linearSearch'

describe('linearSearch', () => {
  it.concurrent("should find the value 'bye' in ['hi', 'bye']", () => {
    expect(linearSearch(['hi', 'bye'], 'bye')).toBe(true)
  })
})
