import { Box, Button, Typography } from '@mui/material'
import { fetchProductById } from '../../redux/slices/productsSlice'
import { fetchProductsByCategory } from '../../redux/slices/productsSlice'
import { addToCart } from '../../redux/slices/cartSlice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import BreadcrumbsComponent from '../../ui/breadcrumbsComponent'
import PageContainer from '../../ui/pageContainer'
import { getDiscountPercent } from '../../utils/getDiscountPercent'
import PercentContainer from '../../ui/percentContainer'
import Count from '../../utils/count'

function Product() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const { current, currentCategory, status, error } = useSelector(
    (state) => state.products,
  )

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id))
    }
  }, [dispatch, id])

  useEffect(() => {
    if (current?.categoryId) {
      dispatch(fetchProductsByCategory(current.categoryId))
    }
  }, [dispatch, current?.categoryId])

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: current.id,
        title: current.title,
        price: current.price,
        discont_price: current.discont_price,
        image: current.image,
        quantity,
      }),
    )
  }

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
    <PageContainer>
      <BreadcrumbsComponent
        items={[
          { label: 'Main page', to: '/' },
          { label: 'Categories', to: '/categories' },
          {
            label: currentCategory?.title || 'Products',
            to:
              currentCategory ? `/productsCategory/${currentCategory.id}` : '',
          },
          {
            label:
              current?.title && current.title.length > 20 ?
                `${current.title.slice(0, 20)}...`
              : current?.title || 'Products',
          },
        ]}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          gap: 4,
        }}
      >
        <Box
          component="img"
          src={`http://localhost:3333${current.image}`}
          alt={current.title}
          sx={{
            width: '100%',
            height: { xs: 200, sm: 340, md: 472, lg: 572 },
            objectFit: 'contain',
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography variant="productTitleTypography">
            {current.title}
          </Typography>
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
            {!current.discont_price ? null : (
              <PercentContainer>
                <Typography variant="percentTypography">
                  -{getDiscountPercent(current.price, current.discont_price)}%
                </Typography>
              </PercentContainer>
            )}
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flexDirection: {
                sm: 'column',
                md: 'row',
              },
            }}
          >
            <Count onCountChange={setQuantity} />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#0D50FF',
                padding: 'clamp(7px, 1.5vw, 17px) clamp(20px, 6vw, 108px)',
              }}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="filterTitle">Description</Typography>
            <Typography variant="descriptionTypography">
              {current.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </PageContainer>
  )
}
export default Product
