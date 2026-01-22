import { Card, CardMedia, Typography, Box } from '@mui/material'

function ProductCard({ title, image, price, discont_price }) {
  return (
    <Card
      sx={{
        border: '2px solid #DDDDDD',
        borderRadius: '12px',
        boxShadow: 'none',
        height: { md: 422 },
      }}
    >
      <CardMedia
        component="img"
        src={`http://localhost:3333${image}`}
        alt={title}
        sx={{ maxHeight: 284 }}
      />

      <Typography variant="cardTitle" mt={2}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
        {!discont_price ? null : (
          <Typography variant="discontTypography">${discont_price}</Typography>
        )}
        {discont_price === null ?
          <Typography variant="discontTypography">${price}</Typography>
        : <Typography variant="priceTypography">${price}</Typography>}
      </Box>
    </Card>
  )
}
export default ProductCard
