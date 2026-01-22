import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'

function BreadcrumbsComponent({ items }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return isLast ?
            <Typography key={item.label} color="text.primary">
              {item.label}
            </Typography>
          : <Link
              key={item.label}
              component={RouterLink}
              to={item.to}
              underline="hover"
              color="inherit"
            >
              {item.label}
            </Link>
      })}
    </Breadcrumbs>
  )
}

export default BreadcrumbsComponent
