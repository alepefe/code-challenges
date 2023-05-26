export function isAnagram (str: string, str1: string): boolean {
  const s1 = str.toLowerCase().split('').sort().join('')
  const s2 = str1.toLowerCase().split('').sort().join('')

  if (s1 === s2) return true
  return false
}

export function isPalindrome (str: string): boolean {
  return str.toLocaleLowerCase() === str.toLocaleLowerCase().split('').reverse().join('')
}

export function findHighestDigit (str: string): number | null {
  const digits = str.match(/\d+/g)
  if (digits == null || digits.length === 0) return null

  return parseInt(digits.sort()[digits.length - 1])
}
