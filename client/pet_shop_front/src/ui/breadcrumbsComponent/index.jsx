import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Divider } from '@mui/material'

function BreadcrumbsComponent({ items }) {
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ width: 16, borderColor: '#DDDDDD', m: 0 }}
          />
        }
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return isLast ?
              <Button
                disabled
                key={item.label}
                color="text.primary"
                variant="outlined"
                sx={{ color: '#8B8B8B', borderColor: '#DDDDDD' }}
              >
                {item.label}
              </Button>
            : <Link
                key={item.label}
                component={RouterLink}
                to={item.to}
                color="inherit"
              >
                <Button
                  variant="outlined"
                  sx={{ color: '#8B8B8B', borderColor: '#DDDDDD' }}
                >
                  {item.label}
                </Button>
              </Link>
        })}
      </Breadcrumbs>
    </Box>
  )
}

export default BreadcrumbsComponent
