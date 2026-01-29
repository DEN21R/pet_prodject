import { createSlice } from '@reduxjs/toolkit'
import { loadCart, saveCart } from '../../utils/cartStorage'

const itemsFromStorage = loadCart()

const initialState = {
  items: itemsFromStorage,
  totalQuantity: itemsFromStorage.reduce((sum, item) => sum + item.quantity, 0),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, discont_price, image } = action.payload
      const existingItem = state.items.find((item) => item.id === id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          id,
          title,
          price,
          discont_price,
          image,
          quantity: 1,
        })
      }
      state.totalQuantity += 1
      saveCart(state.items)
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload
      const item = state.items.find((item) => item.id === itemId)

      if (item) {
        state.totalQuantity -= item.quantity
        state.items = state.items.filter((item) => item.id !== itemId)
        saveCart(state.items)
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find((item) => item.id === id)

      if (item) {
        const quantityDifference = quantity - item.quantity
        state.totalQuantity += quantityDifference
        item.quantity = quantity

        if (item.quantity <= 0) {
          state.totalQuantity -= item.quantity
          state.items = state.items.filter((item) => item.id !== id)
        }
        saveCart(state.items)
      }
    },
    clearCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      saveCart([])
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
