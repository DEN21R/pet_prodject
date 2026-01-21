import { Box, styled, Typography } from '@mui/material'
import home_bg from '../../../assets/home_bg.jpg'
import { useNavigate } from 'react-router-dom'
import ActionButton from '../../../ui/ActionButton'

const HeroBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${home_bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '400px',
  padding: `clamp(40px, 10vw, 80px) clamp(20px, 5vw, 40px) clamp(80px, 20vw, 210px) clamp(20px, 5vw, 40px)`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',

  [theme.breakpoints.up('md')]: {
    height: '600px',
  },
}))

function MainPromotionsSection() {
  const navigate = useNavigate()

  return (
    <HeroBox>
      <Typography variant="bigTypography">
        Amazing Discounts on Pets Products!
      </Typography>
      <ActionButton variant="contained" onClick={() => navigate('/cart')}>
        Check out
      </ActionButton>
    </HeroBox>
  )
}
export default MainPromotionsSection
