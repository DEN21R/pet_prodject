import { Box, Button, Typography } from '@mui/material'
import { fetchProductById } from '../../redux/slices/productsSlice'
import { fetchProductsByCategory } from '../../redux/slices/productsSlice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import BreadcrumbsComponent from '../../ui/breadcrumbsComponent'
import PageContainer from '../../ui/pageContainer'
import { getDiscountPercent } from '../../utils/getDiscountPercent'
import PercentContainer from '../../ui/percentContainer'

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

  useEffect(() => {
    if (current?.categoryId) {
      dispatch(fetchProductsByCategory(current.categoryId))
    }
  }, [dispatch, current?.categoryId])

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
            height: { xs: 200, sm: 340, md: 572 },
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

          <Box>
            <Button>Add to cart</Button>
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
