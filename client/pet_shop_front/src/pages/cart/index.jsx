import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  CardMedia,
  Card,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../../redux/slices/cartSlice'
import PageContainer from '../../ui/pageContainer'
import TitleWithAction from '../../ui/TitleWithAction'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import ButtonGroup from '@mui/material/ButtonGroup'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import FormOrder from '../../ui/formOrder'
import { useState } from 'react'
import DialogComponent from '../../ui/dialogComponent'

function Cart() {
  const dispatch = useDispatch()
  const { items, totalQuantity } = useSelector((state) => state.cart)
  const [openDialog, setOpenDialog] = useState(false)

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: itemId, quantity: newQuantity }))
    }
  }

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = item.discont_price || item.price
      return total + price * item.quantity
    }, 0)
  }

  const handleOrderSuccess = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const totalPrice = calculateTotalPrice()

  if (items.length === 0) {
    return (
      <PageContainer>
        <TitleWithAction
          title="Shopping cart"
          nav="/categories"
          btnText="Back to the store"
        />
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h5">Your cart is empty</Typography>
        </Box>

        <DialogComponent open={openDialog} onClose={handleCloseDialog} />
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <TitleWithAction
        title="Shopping cart"
        nav="/categories"
        btnText="Back to the store"
      />

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          {items.map((item) => (
            <Card
              key={item.id}
              sx={{
                mb: 2,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 3,
                border: '2px solid #DDDDDD',
                borderRadius: '12px',
                boxShadow: 'none',
              }}
            >
              <CardMedia
                component="img"
                src={`http://localhost:3333${item.image}`}
                alt={item.title}
                sx={{
                  width: '100%',
                  height: { xs: 100, sm: 140, md: 180 },
                  objectFit: 'cover',
                }}
              />

              <Box sx={{ p: 4 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="cardTitle">{item.title}</Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    <ButtonGroup size="lg">
                      <Button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        <RemoveIcon
                          fontSize="medium"
                          sx={{ color: '#8B8B8B' }}
                        />
                      </Button>
                      <Box
                        sx={{
                          minWidth: '96px',
                          height: '58px',
                          border: '1px solid #DDDDDD',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Typography variant="filterTitle">
                          {item.quantity}
                        </Typography>
                      </Box>
                      <Button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        <AddIcon fontSize="medium" sx={{ color: '#8B8B8B' }} />
                      </Button>
                    </ButtonGroup>
                    <Typography variant="cardInfo">
                      $
                      {(
                        (item.discont_price || item.price) * item.quantity
                      ).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ textAlign: 'right', p: 4 }}>
                <IconButton
                  size="small"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Card>
          ))}
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            sx={{
              p: 4,
              position: 'sticky',
              top: 20,
              backgroundColor: '#F1F3F4',
            }}
          >
            <Typography variant="cardInfo">Order details</Typography>

            <Box sx={{ mb: 3, mt: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  mb: 1,
                }}
              >
                <Typography variant="totalTypography">
                  {totalQuantity}
                </Typography>
                <Typography variant="totalTypography">items</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="totalTypography">Total</Typography>
                <Typography variant="titleTypography">
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Box>
            </Box>

            <FormOrder onOrderSuccess={handleOrderSuccess} />
          </Paper>
        </Grid>
      </Grid>

      <DialogComponent open={openDialog} onClose={handleCloseDialog} />
    </PageContainer>
  )
}
export default Cart
