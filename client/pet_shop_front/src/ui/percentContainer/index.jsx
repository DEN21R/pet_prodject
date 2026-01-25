import { Box } from '@mui/material'

function PercentContainer({ children, sx }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D50FF',
        borderRadius: 3,
        minHeight: 34,
        maxWidth: 63,
        px: 1,
        py: '4px',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default PercentContainer
