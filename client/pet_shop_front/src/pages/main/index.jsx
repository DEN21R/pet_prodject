import { Box } from '@mui/material'
import MainPromotionsSection from './mainPromotionsSection'
import MainCategories from './mainCategories'
import MainSale from './mainSale'
import DiscountForm from './discountForm'

function Main() {
  return (
    <Box>
      <MainPromotionsSection />
      <MainCategories />
      <DiscountForm />
      <MainSale />
    </Box>
  )
}
export default Main
