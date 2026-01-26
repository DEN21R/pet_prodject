import { Box, Grid } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shuffleArray } from '../../../utils/shuffleArray'
import PageContainer from '../../../ui/pageContainer'
import ProductCard from '../../../ui/productCard'
import { fetchAllProducts } from '../../../redux/slices/productsSlice'
import TitleWithAction from '../../../ui/TitleWithAction'

function MainSale() {
  const dispatch = useDispatch()
  const { all, status, error } = useSelector((state) => state.products)

  const fourElements = useMemo(() => {
    if (!all || !all.length) return []
    const onlyDiscounted = all.filter(
      (product) => product.discont_price !== null,
    )
    return shuffleArray(onlyDiscounted).slice(0, 4)
  }, [all])

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  if (status === 'loading') return <h2>Loading products...</h2>
  if (status === 'error') return <h2>Error: {error}</h2>

  return (
    <PageContainer>
      <TitleWithAction title="Sale" nav="/sale" btnText="All sales" />
      <Box>
        <Grid container justifyContent={'center'} spacing={4}>
          {fourElements.map(({ id, title, image, price, discont_price }) => (
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

export default MainSale
