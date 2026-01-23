import { Box, Button, Typography } from '@mui/material'
import { fetchProductById } from '../../redux/slices/productsSlice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import BreadcrumbsComponent from '../../ui/breadcrumbsComponent'

function Product() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { current, currentCategory, status, error } = useSelector(
    (state) => state.products,
  )

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id))
    }
  }, [dispatch, id])

  if (status === 'loading') {
    return <h2>Loading product...</h2>
  }

  if (status === 'error') {
    return <h2>Error: {error}</h2>
  }

  if (!current) {
    return <h2>Product not found</h2>
  }

  return (
    <Box>
      <BreadcrumbsComponent
        items={[
          { label: 'Main page', to: '/' },
          { label: 'Categories', to: '/categories' },
          { label: `${currentCategory?.title || 'Products'}` },
        ]}
      />
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box
          component="img"
          src={`http://localhost:3333${current.image}`}
          alt={current.title}
          sx={{
            width: '100%',
            height: { xs: 200, sm: 240, md: 572 },
            objectFit: 'cover',
          }}
        />
        <Box>
          <Typography variant="h3">{current.title}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
            {!current.discont_price ? null : (
              <Typography variant="discontTypography">
                ${current.discont_price}
              </Typography>
            )}
            {current.discont_price === null ?
              <Typography variant="discontTypography">
                ${current.price}
              </Typography>
            : <Typography variant="priceTypography">
                ${current.price}
              </Typography>
            }
          </Box>
          <Box>
            <Button>Add to cart</Button>
          </Box>
          <Box>
            <Typography>{current.description}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Product
