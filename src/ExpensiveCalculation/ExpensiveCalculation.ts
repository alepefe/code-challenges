function Memoize (target: any, propertyKey: string, descriptor: PropertyDescriptor): any {
  const originalMethod = descriptor.value
  const cache = new Map<string, any>()

  descriptor.value = function (...args: any[]): any {
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)

    const result = originalMethod.apply(this, args)
    cache.set(key, result)
    return result
  }
  return descriptor
}

export class ExpensiveCalculation {
  @Memoize
  public async compute (a: number, b: number): Promise<number> {
    return await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(a * b)
      }, 300)
    })
  }
}
