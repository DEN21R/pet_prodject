import { styled } from '@mui/material/styles'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#F1F3F4',
  display: 'flex',
  flexDirection: 'column',
}))

function Footer() {
  return (
    <Box sx={{ py: 6, bgcolor: '#fff' }}>
      <Container>
        <Typography variant="h4" fontWeight={700} mb={4}>
          Contact
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Item>
                <Typography variant="cardTitle">Phone</Typography>
                <Typography variant="cardInfo">+49 30 915-88492</Typography>
              </Item>
            </Grid>
            <Grid size={4}>
              <Item>
                <Typography variant="cardTitle">Socials</Typography>
                <Box mt={1}>{}</Box>
              </Item>
            </Grid>
            <Grid size={8}>
              <Item>
                <Typography variant="cardTitle">Address</Typography>
                <Typography variant="cardInfo">
                  Wallstraße 9–13, 10179 Berlin, Deutschland
                </Typography>
              </Item>
            </Grid>
            <Grid size={4}>
              <Item>
                <Typography variant="cardTitle">Working Hours</Typography>
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
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
