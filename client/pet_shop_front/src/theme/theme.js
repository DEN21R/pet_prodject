import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#8b8b8b',
    },
    cardInfo: {
      fontSize: '2.5rem',
      color: '#282828',
      fontWeight: 700,
    },
  },
})
export default theme
