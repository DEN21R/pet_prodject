import { styled } from '@mui/material/styles'
import { Box, Grid, Paper, Typography } from '@mui/material'

import inst from '../../assets/ic-instagram.svg'
import viber from '../../assets/viber.svg'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#F1F3F4',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'none',
}))

function Footer() {
  return (
    <Box sx={{ py: 10, px: 5, bgcolor: '#fff' }}>
      <Box mb={5}>
        <Typography variant="titleTypography">Contact</Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 8 }}>
            <Item
              sx={{
                height: {
                  xs: 'auto',
                  md: 150,
                },
              }}
            >
              <Typography variant="footerTitle">Phone</Typography>
              <Typography variant="cardInfo">+49 30 915-88492</Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Item
              sx={{
                height: {
                  xs: 'auto',
                  md: 150,
                },
              }}
            >
              <Typography variant="footerTitle">Socials</Typography>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 1 }}
              >
                <a href="https://www.instagram.com/">
                  <img src={inst} alt="snapchat" />
                </a>
                <a href="https://www.viber.com/ru/">
                  <img src={viber} alt="facebook" />
                </a>
              </Box>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Item
              sx={{
                height: {
                  xs: 'auto',
                  md: 194,
                },
              }}
            >
              <Typography variant="footerTitle">Address</Typography>
              <Typography variant="cardInfo">
                Wallstraße 9–13, 10179 Berlin, Deutschland
              </Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Item
              sx={{
                height: {
                  xs: 'auto',
                  md: 194,
                },
              }}
            >
              <Typography variant="footerTitle">Working Hours</Typography>
              <Typography variant="cardInfo">24 hours a day</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box mt={4} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Wallstraße%209-13,%20Berlin&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        />
      </Box>
    </Box>
  )
}

export default Footer
