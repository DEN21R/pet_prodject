import { Card, CardMedia, Typography, Box } from '@mui/material'

function ProductCard({ title, image, price, discont_price }) {
  return (
    <Card
      sx={{
        border: '2px solid #DDDDDD',
        borderRadius: '12px',
        boxShadow: 'none',
        height: { xs: 'auto', md: 422 },
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
        }}
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
      </Box>
    </Card>
  )
}
export default ProductCard
