import { Box, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsByCategory } from '../../redux/slices/productsSlice'
import BreadcrumbsComponent from '../../ui/breadcrumbsComponent'
import ProductCard from '../../ui/productCard'
import FilterBar from '../../ui/filterBar'

function ProductsCategory() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const { categoryProducts, currentCategory, status, error } = useSelector(
    (state) => state.products,
  )

  useEffect(() => {
    dispatch(fetchProductsByCategory(id))
  }, [dispatch, id])

  if (status === 'loading') {
    return <h2>Loading categories...</h2>
  }

  if (status === 'error') {
    return <h2>Error: {error}</h2>
  }

  return (
    <Box sx={{ px: 5 }}>
      <BreadcrumbsComponent
        items={[
          { label: 'Main page', to: '/' },
          { label: 'Categories', to: '/' },
          { label: `${currentCategory?.title || 'Products'}` },
        ]}
      />

      <Box sx={{ mb: 5 }}>
        <Typography variant="titleTypography">
          {currentCategory?.title || 'Products'}
        </Typography>
      </Box>
      <FilterBar />
      <Box>
        <Grid container justifyContent={'center'} spacing={4}>
          {(categoryProducts || []).map(
            ({ id, title, image, price, discont_price }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={id}>
                <ProductCard
                  title={title}
                  image={image}
                  price={price}
                  discont_price={discont_price}
                />
              </Grid>
            ),
          )}
        </Grid>
      </Box>
    </Box>
  )
}
export default ProductsCategory
