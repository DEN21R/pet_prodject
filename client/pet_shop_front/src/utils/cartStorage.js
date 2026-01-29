export const loadCart = () => {
  try {
    const data = localStorage.getItem('cart')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const saveCart = (items) => {
  localStorage.setItem('cart', JSON.stringify(items))
}
