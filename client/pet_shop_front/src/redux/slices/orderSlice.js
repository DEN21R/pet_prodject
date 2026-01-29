import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api/axiosInstance'

export const sendOrder = createAsyncThunk('order/send', async (orderData) => {
  const response = await api.post('/order/send', orderData)
  return response.data
})

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOrder.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(sendOrder.fulfilled, (state) => {
        state.status = 'success'
      })
      .addCase(sendOrder.rejected, (state) => {
        state.status = 'error'
      })
  },
})
export default orderSlice.reducer
