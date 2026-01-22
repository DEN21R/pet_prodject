import { Card, CardMedia, Typography } from '@mui/material'

function CategoryCard({ title, image }) {
  return (
    <Card
      sx={{
        boxShadow: 'none',
        height: { md: 392 },
      }}
    >
      <CardMedia
        component="img"
        src={`http://localhost:3333${image}`}
        alt={title}
      />
      <Typography variant="cardTitle" mt={2}>
        {title}
      </Typography>
    </Card>
  )
}
export default CategoryCard
