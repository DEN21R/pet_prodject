import { Box, Button, styled, Typography } from '@mui/material'
import home_bg from '../../../assets/home_bg.jpg'
import { useNavigate } from 'react-router-dom'

const HeroBox = styled(Box)(() => ({
  backgroundImage: `url(${home_bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: { xs: 400, md: 600 },
  padding: `clamp(40px, 10vw, 80px) clamp(20px, 5vw, 40px) clamp(80px, 20vw, 210px) clamp(20px, 5vw, 40px)`,
}))

const HeroTypography = styled(Typography)(() => ({
  fontSize: '6rem',
  color: '#FFFFFF',
  fontWeight: 700,
  lineHeight: '110%',
  paddingBottom: '2.5rem',
  '@media (max-width: 768px)': {
    fontSize: '4rem',
  },
  '@media (max-width: 480px)': {
    fontSize: '2.5rem',
  },
}))

const HeroButton = styled(Button)(() => ({
  fontSize: '1.25rem',
  padding: '1rem clamp(16px, 5vw, 56px)',
}))

function MainPromotionsSection() {
  const navigate = useNavigate()

  return (
    <HeroBox>
      <HeroTypography>Amazing Discounts on Pets Products!</HeroTypography>
      <HeroButton variant="contained" onClick={() => navigate('/cart')}>
        Check out
      </HeroButton>
    </HeroBox>
  )
}
export default MainPromotionsSection
