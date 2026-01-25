import { Box, Button, Divider, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function TitleWithAction({ nav, title, btnText }) {
  const navigate = useNavigate()
  return (
    <Box mt={5}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="titleTypography">{title}</Typography>
        </Box>
        <Divider sx={{ flexGrow: 1, color: '#DDDDDD' }} />
        <Button
          variant="outlined"
          sx={{ color: '#8B8B8B', borderColor: '#DDDDDD' }}
          onClick={() => navigate(nav)}
        >
          {btnText}
        </Button>
      </Box>
    </Box>
  )
}
export default TitleWithAction
