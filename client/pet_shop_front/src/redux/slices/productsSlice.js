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

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    all: [],
    categoryProducts: [],
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
  },
})
export default productsSlice.reducer
