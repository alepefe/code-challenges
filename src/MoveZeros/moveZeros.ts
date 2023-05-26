export function moveZeros (arr: number[]): number [] {
  let zeroCount = 0
  const newArr: number[] = arr.filter((n: number, idx: number) => {
    if (n !== 0) return true
    zeroCount += 1
    return false
  })

  for (let i = 0; i < zeroCount; i++) {
    newArr.push(0)
  }
  return newArr
}
