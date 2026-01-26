import PageContainer from '../../../ui/pageContainer'
import TitleWithAction from '../../../ui/TitleWithAction'
import { shuffleArray } from '../../../utils/shuffleArray'
import { Box, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../../redux/slices/categoriesSlice'
import { useEffect } from 'react'
import { useMemo } from 'react'
import CategoryCard from '../../../ui/categoryCard'

function MainCategories() {
  const dispatch = useDispatch()
  const { list, status, error } = useSelector((state) => state.categories)

  const fourElements = useMemo(() => {
    if (!list.length) return []
    return shuffleArray(list).slice(0, 4)
  }, [list])

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
    <PageContainer>
      <TitleWithAction
        title="Categories"
        nav="/categories"
        btnText="All categories"
      />
      <Box>
        <Grid container justifyContent={'center'} spacing={4} pb={13.25}>
          {fourElements.map(({ id, title, image }) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={id}>
              <CategoryCard id={id} title={title} image={image} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageContainer>
  )
}
export default MainCategories
