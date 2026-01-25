export function getDiscountPercent(price, discont_price) {
  if (discont_price === null || price === null) return null
  if (price === 0) return null

  return Math.round(100 - (discont_price * 100) / price)
}
