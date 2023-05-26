export function greatestCommonFactor (n1: number, n2: number): number {
  let gcf: number = 1
  const lowestN = n1 > n2 ? n2 : n1

  for (let i = 0; i < lowestN; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcf = i
    }
  }
  return gcf
}
