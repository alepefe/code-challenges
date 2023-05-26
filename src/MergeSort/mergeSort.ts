export function mergeSort (arr: number[]): number[] {
  if (arr.length <= 1) return arr

  const middleIdx = Math.floor(arr.length / 2)
  let leftArr = arr.slice(0, middleIdx)
  let rightArr = arr.slice(middleIdx)

  leftArr = mergeSort(leftArr)
  rightArr = mergeSort(rightArr)

  let leftIdx = 0
  let rightIdx = 0
  let arrIdx = 0

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] <= rightArr[rightIdx]) {
      arr[arrIdx] = leftArr[leftIdx]
      leftIdx += 1
    } else {
      arr[arrIdx] = rightArr[rightIdx]
      rightIdx += 1
    }
    arrIdx += 1
  }

  while (leftIdx < leftArr.length) {
    arr[arrIdx] = leftArr[leftIdx]
    leftIdx += 1
    arrIdx += 1
  }

  while (rightIdx < rightArr.length) {
    arr[arrIdx] = rightArr[rightIdx]
    rightIdx += 1
    arrIdx += 1
  }

  return arr
}
