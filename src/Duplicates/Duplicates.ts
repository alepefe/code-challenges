export function removeDuplicates (arr: number[]): number [] {
  const uniqueNums = new Set<number>()
  arr.forEach(n => {
    uniqueNums.add(n)
  })

  return Array.from<number>(uniqueNums)
}

export function searchDuplicates (arr: number[]): number [] {
  const duplicates = new Map<number, number>()
  arr.forEach(n => {
    const value = duplicates.get(n)
    if (value == null) duplicates.set(n, 1)
    else duplicates.set(n, value + 1)
  })

  return Array.from(duplicates).filter(([key, value]) => value > 1).map(([key, value]) => key)
}

export default {
  removeDuplicates,
  searchDuplicates
}
