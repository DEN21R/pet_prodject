import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api/axiosInstance'

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/products/all')
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/categories/${Number(categoryId)}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/products/${Number(productId)}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    all: [],
    categoryProducts: [],
    currentCategory: null,
    current: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'success'
        state.all = action.payload
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'success'
        state.currentCategory = action.payload.category
        state.categoryProducts = action.payload.data
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'success'
        state.current =
          Array.isArray(action.payload) ? action.payload[0] : action.payload
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload
      })
  },
})
export default productsSlice.reducer
