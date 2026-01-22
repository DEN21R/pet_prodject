import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../redux/slices/categoriesSlice'
import productsReducer from '../redux/slices/productsSlice'

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
  },
})
export default store
