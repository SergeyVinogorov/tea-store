export const formatPrice = (value: number, withSign = true) => {
  return `${withSign ? '$' : ''}${Number(value / 100).toFixed(0)}`
}
