import { Box } from '@mui/material'

function PageContainer({ children }) {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 5 },
      }}
    >
      {children}
    </Box>
  )
}

export default PageContainer
