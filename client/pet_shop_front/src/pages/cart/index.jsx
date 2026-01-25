import { Box, Typography } from '@mui/material'
import PageContainer from '../../ui/pageContainer'
import TitleWithAction from '../../ui/TitleWithAction'

function Cart() {
  return (
    <PageContainer>
      <TitleWithAction
        title="Shopping cart"
        nav="/categories"
        btnText="Back to the store"
      />
    </PageContainer>
  )
}
export default Cart
