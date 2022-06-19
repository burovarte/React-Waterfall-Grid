export const amountColumns = (sm: boolean, md: boolean, lg: boolean) => {
  if (sm && md && lg) {
    return 1
  }
  if (md && lg) {
    return 2
  }
  if (lg) {
    return 3
  }
  return 4
}
