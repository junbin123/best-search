export const formateKeyword = (keyword: string): string => {
  return keyword
    .replace(/\s{2,}/g, ' ')
    .trim()
    .replace(' ', '+')
}
