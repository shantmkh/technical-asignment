export const toQueryString = (data: Record<string, string>) => {
  return '?' + new URLSearchParams(data).toString()
}