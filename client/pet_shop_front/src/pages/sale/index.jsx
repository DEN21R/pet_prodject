import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../redux/slices/productsSlice'
import BreadcrumbsComponent from '../../ui/breadcrumbsComponent'
import ProductCard from '../../ui/productCard'
import FilterBar from '../../ui/filterBar'
import PageContainer from '../../ui/pageContainer'
import { applyFilters } from '../../utils/applyFilters'

function Sale() {
  const dispatch = useDispatch()
  const { all, status, error } = useSelector((state) => state.products)

  const [filters, setFilters] = useState({
    priceFrom: '',
    priceTo: '',
    onlyDiscounted: true,
    sort: 'default',
  })

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  const discountedProducts = useMemo(() => {
    const onlyDiscounted = all.filter((el) => el.discont_price !== null)
    return applyFilters(onlyDiscounted, filters)
  }, [all, filters])

  if (status === 'loading') return <h2>Loading products...</h2>
  if (status === 'error') return <h2>Error: {error}</h2>

  return (
    <PageContainer>
      <BreadcrumbsComponent
        items={[{ label: 'Main page', to: '/' }, { label: 'All sales' }]}
      />

      <Box sx={{ mb: 5 }}>
        <Typography variant="titleTypography">Discounted items</Typography>
      </Box>

      <FilterBar
        filters={filters}
        onChange={(field, value) =>
          setFilters((prev) => ({ ...prev, [field]: value }))
        }
        showDiscount={false}
      />

      <Grid container justifyContent="center" spacing={4}>
        {discountedProducts.map(
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
    </PageContainer>
  )
}

export default Sale
