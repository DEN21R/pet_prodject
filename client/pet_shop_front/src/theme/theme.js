import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },

  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'descriptionTypography' },
          style: {
            fontSize: '1rem',
            fontWeight: 400,
            color: '#282828',
            lineHeight: '130%',
          },
        },
        {
          props: { variant: 'footerTitle' },
          style: {
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#8b8b8b',
            paddingBottom: '16px',
            lineHeight: '130%',
          },
        },
        {
          props: { variant: 'cardTitle' },
          style: {
            display: 'block',
            textAlign: 'center',
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#282828',
            paddingBottom: '16px',
            lineHeight: '130%',
          },
        },
        {
          props: { variant: 'filterTitle' },
          style: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#282828',
            lineHeight: '130%',
          },
        },
        {
          props: { variant: 'percentTypography' },
          style: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#FFFFFF',
            lineHeight: '130%',
          },
        },
        {
          props: { variant: 'cardProductTitle' },
          style: {
            display: 'block',
            textAlign: 'center',
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#282828',
            paddingBottom: '16px',
            lineHeight: '130%',
            width: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
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
              fontSize: '1.25rem',
            },
          },
        },
        {
          props: { variant: 'totalTypography' },
          style: {
            fontSize: '2.5rem',
            fontWeight: 500,
            color: '#8B8B8B',
            lineHeight: '130%',
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
        {
          props: { variant: 'firstOrderTypography' },
          style: {
            color: '#FFFFFF',
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
        {
          props: { variant: 'discontTypography' },
          style: {
            color: '#282828',
            fontSize: '2.5rem',
            fontWeight: 600,
            lineHeight: '110%',

            '@media (max-width: 768px)': {
              fontSize: '2rem',
            },
            '@media (max-width: 480px)': {
              fontSize: '1,5rem',
            },
          },
        },
        {
          props: { variant: 'productTitleTypography' },
          style: {
            color: '#282828',
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: '110%',

            '@media (max-width: 768px)': {
              fontSize: '2rem',
            },
            '@media (max-width: 480px)': {
              fontSize: '1,5rem',
            },
          },
        },
        {
          props: { variant: 'priceTypography' },
          style: {
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#8b8b8b',
            lineHeight: '130%',
          },
        },
      ],
    },
  },
})

export default theme
