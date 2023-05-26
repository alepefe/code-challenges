export function binarySearch (list: number[], itemToFind: number): boolean {
  let first = 0
  let last = list.length - 1

  while (last >= first) {
    const mid = Math.ceil((first + last) / 2)

    if (list[mid] === itemToFind) {
      return true
    }

    if (itemToFind < list[mid]) {
      last = mid - 1
    } else {
      first = mid + 1
    }
  }

  return false
}
