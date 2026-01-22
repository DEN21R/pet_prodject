import { Box, Typography, Grid, Card } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../redux/slices/categoriesSlice'
import { useEffect } from 'react'
import CategoryCard from '../../ui/categoryCard'
import BreadcrumbsComponent from '../../ui/breadcrumbsComponent'

function Categories() {
  const dispatch = useDispatch()
  const { list, status, error } = useSelector((state) => state.categories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  if (status === 'loading') {
    return <h2>Loading categories...</h2>
  }

  if (status === 'error') {
    return <h2>Error: {error}</h2>
  }

  return (
    <Box sx={{ px: 5 }}>
      <BreadcrumbsComponent
        items={[{ label: 'Main page', to: '/' }, { label: 'categories' }]}
      />

      <Box sx={{ mb: 5 }}>
        <Typography variant="titleTypography">Categories</Typography>
      </Box>
      <Box>
        <Grid container justifyContent={'center'} spacing={4} pb={21}>
          {list.map(({ id, title, image }) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={id}>
              <CategoryCard title={title} image={image} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
export default Categories
