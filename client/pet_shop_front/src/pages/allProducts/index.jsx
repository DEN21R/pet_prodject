import { Box, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../redux/slices/productsSlice'
import BreadcrumbsComponent from '../../ui/breadcrumbsComponent'
import ProductCard from '../../ui/productCard'
import FilterBar from '../../ui/filterBar'
import PageContainer from '../../ui/pageContainer'

function AllProducts() {
  const dispatch = useDispatch()
  const { all, status, error } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  if (status === 'loading') {
    return <h2>Loading categories...</h2>
  }

  if (status === 'error') {
    return <h2>Error: {error}</h2>
  }

  return (
    <PageContainer>
      <BreadcrumbsComponent
        items={[{ label: 'Main page', to: '/' }, { label: 'All products' }]}
      />

      <Box sx={{ mb: 5 }}>
        <Typography variant="titleTypography">All products</Typography>
      </Box>
      <FilterBar />
      <Box>
        <Grid container justifyContent={'center'} spacing={4}>
          {all.map(({ id, title, image, price, discont_price }) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={id}>
              <ProductCard
                id={id}
                title={title}
                image={image}
                price={price}
                discont_price={discont_price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageContainer>
  )
}
export default AllProducts
