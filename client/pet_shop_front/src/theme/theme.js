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
            lineHeight: '110%',
          },
        },
        {
          props: { variant: 'cardInfo' },
          style: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#282828',
            lineHeight: '110%',
            '@media (max-width: 768px)': {
              fontSize: '2rem',
            },
            '@media (max-width: 480px)': {
              fontSize: '1.5rem',
            },
          },
        },
        {
          props: { variant: 'bigTypography' },
          style: {
            color: '#FFFFFF',
            fontSize: '6rem',
            fontWeight: 700,
            lineHeight: '110%',
            paddingBottom: '2.5rem',
            '@media (max-width: 768px)': {
              fontSize: '4rem',
            },
            '@media (max-width: 480px)': {
              fontSize: '2.5rem',
            },
          },
        },
        {
          props: { variant: 'titleTypography' },
          style: {
            color: '#282828',
            fontSize: '4rem',
            fontWeight: 700,
            lineHeight: '110%',

            '@media (max-width: 768px)': {
              fontSize: '2.5rem',
            },
            '@media (max-width: 480px)': {
              fontSize: '2rem',
            },
          },
        },
      ],
    },
  },
})

export default theme
