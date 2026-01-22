import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api/axiosInstance'

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async () => {
    const response = await api.get('/categories/all')
    return response.data
  },
)

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'success'
        state.list = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error.message
      })
  },
})
export default categoriesSlice.reducer
