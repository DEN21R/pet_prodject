import { Box, Typography } from '@mui/material'

function DiscountForm() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 486,
        borderRadius: 2,
        background: 'linear-gradient(270deg, #6B5B95, #2451C6, #0D50FF)',
        backgroundSize: '400% 400%',
        '@keyframes gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }}
    >
      <Typography variant="firstOrderTypography">
        5% off on the first order
      </Typography>
    </Box>
  )
}
export default DiscountForm
