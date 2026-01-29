import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../redux/slices/categoriesSlice'
import productsReducer from '../redux/slices/productsSlice'
import cartReducer from '../redux/slices/cartSlice'
import orderReducer from '../redux/slices/orderSlice'

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
  },
})
export default store
