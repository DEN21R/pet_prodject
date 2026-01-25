import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsByCategory } from '../../redux/slices/productsSlice'
import BreadcrumbsComponent from '../../ui/breadcrumbsComponent'
import ProductCard from '../../ui/productCard'
import FilterBar from '../../ui/filterBar'
import { applyFilters } from '../../utils/applyFilters'

function ProductsCategory() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const { categoryProducts, currentCategory, status, error } = useSelector(
    (state) => state.products,
  )

  const [filters, setFilters] = useState({
    priceFrom: '',
    priceTo: '',
    onlyDiscounted: false,
    sort: 'default',
  })

  useEffect(() => {
    if (id) {
      dispatch(fetchProductsByCategory(id))
    }
  }, [dispatch, id])

  const filteredProducts = useMemo(
    () => applyFilters(categoryProducts || [], filters),
    [categoryProducts, filters],
  )

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
          { label: 'Categories', to: '/categories' },
          { label: `${currentCategory?.title || 'Products'}` },
        ]}
      />

      <Box sx={{ mb: 5 }}>
        <Typography variant="titleTypography">
          {currentCategory?.title || 'Products'}
        </Typography>
      </Box>
      <FilterBar
        filters={filters}
        onChange={(f, v) => setFilters((p) => ({ ...p, [f]: v }))}
      />
      <Box>
        <Grid container justifyContent={'center'} spacing={4}>
          {(filteredProducts || []).map(
            ({ id, title, image, price, discont_price }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={id}>
                <ProductCard
                  id={id}
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
