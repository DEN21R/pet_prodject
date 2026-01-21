import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },

  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'cardTitle' },
          style: {
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#8b8b8b',
            paddingBottom: '16px',
            lineHeight: 0,
          },
        },
        {
          props: { variant: 'cardInfo' },
          style: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#282828',
          },
        },
      ],
    },
  },
})

export default theme
