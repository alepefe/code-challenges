import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fizzBuzz } from './fizzBuzz'

describe('fizzBuzz', () => {
  beforeEach(() => {
    console.log = vi.fn()
  })

  it('logs "FizzBuzz" when the input is divisible by both 3 and 5', () => {
    fizzBuzz(15)
    expect(console.log).toHaveBeenCalledWith('FizzBuzz')
  })

  it('logs "Fizz" when the input is divisible by 3 but not by 5', () => {
    fizzBuzz(9)
    expect(console.log).toHaveBeenCalledWith('Fizz')
  })

  it('logs "Buzz" when the input is divisible by 5 but not by 3', () => {
    fizzBuzz(10)
    expect(console.log).toHaveBeenCalledWith('Buzz')
  })

  it('does not log anything when the input is not divisible by either 3 or 5', () => {
    fizzBuzz(7)
    expect(console.log).not.toHaveBeenCalled()
  })
})
