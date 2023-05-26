export function linearSearch (list: unknown[], thingToFind: unknown): boolean {
  for (const item of list) {
    if (item === thingToFind) return true
  }
  return false
}
