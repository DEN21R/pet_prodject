import { Box, Typography, styled } from '@mui/material'
import ActionButton from '../../ui/ActionButton'
import { useNavigate } from 'react-router-dom'
import error404 from '../../assets/404.png'

const ErrorBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '690px',
  width: '100%',
  margin: '0 auto',
  marginTop: '5rem',
  marginBottom: '2rem',
}))

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <ErrorBox>
      <Box
        component="img"
        src={error404}
        alt="error404"
        sx={{
          width: '100%',
          height: 'auto',
        }}
      />
      <Typography variant="titleTypography" mb={2}>
        Page Not Found
      </Typography>
      <Typography
        variant="cardTitle"
        textAlign={'center'}
        maxWidth={625}
        width={'100%'}
        mb={2}
      >
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </Typography>
      <ActionButton variant="contained" onClick={() => navigate('/')}>
        Go Home
      </ActionButton>
    </ErrorBox>
  )
}
export default ErrorPage
