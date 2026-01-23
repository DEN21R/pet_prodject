import { Card, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function CategoryCard({ id, title, image }) {
  const navigate = useNavigate()
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
        onClick={() => navigate(`/productsCategory/${id}`)}
        sx={{ cursor: 'pointer' }}
      />
      <Typography variant="cardTitle" mt={2}>
        {title}
      </Typography>
    </Card>
  )
}
export default CategoryCard
