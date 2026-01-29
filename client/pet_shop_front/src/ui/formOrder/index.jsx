import { Box, Button, styled, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { sendOrder } from '../../redux/slices/orderSlice'
import { clearCart } from '../../redux/slices/cartSlice'

const WhiteField = styled(TextField)(() => ({
  '& .MuiFilledInput-root': {
    backgroundColor: '#fff',
    borderRadius: 8,
    border: '1px solid #DDDDDD',

    '&:hover, &.Mui-focused': {
      backgroundColor: '#fff',
    },

    '&::before, &::after': {
      display: 'none',
    },
  },
}))

function FormOrder({ onOrderSuccess }) {
  const order = useSelector((state) => state.order)
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    const orderData = {
      name: data.name,
      phone: data.number,
      email: data.email,
      items: cartItems,
    }

    dispatch(sendOrder(orderData))
      .unwrap()
      .then(() => {
        dispatch(clearCart())
        reset()
        if (onOrderSuccess) {
          onOrderSuccess()
        }
      })
      .catch((error) => {
        console.error('Ошибка отправки заказа:', error)
        alert('Ошибка при отправке заказа')
      })
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        maxWidth: 400,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 400,
        }}
      >
        <WhiteField
          placeholder="Name"
          fullWidth
          variant="filled"
          error={!!errors.name}
          helperText={errors.name?.message}
          {...register('name', { required: 'Fields must be filled in' })}
        />

        <WhiteField
          placeholder="Phone number"
          variant="filled"
          fullWidth
          error={!!errors.number}
          helperText={errors.number?.message}
          {...register('number', { required: 'Fields must be filled in' })}
        />

        <WhiteField
          placeholder="Email"
          fullWidth
          variant="filled"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email', {
            required: 'Fields must be filled in',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: `Email must contain "@"`,
            },
          })}
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        disabled={order.status === 'loading'}
        sx={{ backgroundColor: '#0D50FF', minHeight: '58px' }}
      >
        Order
      </Button>
    </Box>
  )
}
export default FormOrder
