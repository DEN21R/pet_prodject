export const applyFilters = (products = [], filters) => {
  let result = [...products]

  if (filters.priceFrom) {
    result = result.filter(
      (p) => (p.discont_price ?? p.price) >= Number(filters.priceFrom),
    )
  }

  if (filters.priceTo) {
    result = result.filter(
      (p) => (p.discont_price ?? p.price) <= Number(filters.priceTo),
    )
  }

  if (filters.onlyDiscounted) {
    result = result.filter((p) => p.discont_price)
  }

  if (filters.sort === 'price_asc') {
    result.sort(
      (a, b) => (a.discont_price ?? a.price) - (b.discont_price ?? b.price),
    )
  }

  if (filters.sort === 'price_desc') {
    result.sort(
      (a, b) => (b.discont_price ?? b.price) - (a.discont_price ?? a.price),
    )
  }

  return result
}
