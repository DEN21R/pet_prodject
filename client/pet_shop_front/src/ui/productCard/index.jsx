import { Card, CardMedia, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getDiscountPercent } from '../../utils/getDiscountPercent'
import PercentContainer from '../percentContainer'
import BtnCard from '../btnCard'

function ProductCard({ id, title, image, price, discont_price }) {
  const navigate = useNavigate()

  return (
    <Card
      sx={{
        border: '2px solid #DDDDDD',
        borderRadius: '12px',
        boxShadow: 'none',
        height: { xs: 'auto', md: 422 },
        position: 'relative',
      }}
    >
      <CardMedia
        component="img"
        src={`http://localhost:3333${image}`}
        alt={title}
        sx={{
          width: '100%',
          height: { xs: 200, sm: 240, md: 284 },
          objectFit: 'cover',
          cursor: 'pointer',
        }}
        onClick={() => navigate(`/product/${id}`)}
      />

      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          pb: { xs: 2, sm: 3, md: 4 },
          pt: 0,
        }}
      >
        <Typography variant="cardProductTitle" mt={2}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
          {!discont_price ? null : (
            <Typography variant="discontTypography">
              ${discont_price}
            </Typography>
          )}
          {discont_price === null ?
            <Typography variant="discontTypography">${price}</Typography>
          : <Typography variant="priceTypography">${price}</Typography>}
        </Box>
        {!discont_price ? null : (
          <PercentContainer
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
            }}
          >
            <Typography variant="percentTypography">
              -{getDiscountPercent(price, discont_price)}%
            </Typography>
          </PercentContainer>
        )}

        <Box sx={{ position: 'relative', top: -168 }}>
          <BtnCard product={{ id, title, price, discont_price, image }} />
        </Box>
      </Box>
    </Card>
  )
}
export default ProductCard
