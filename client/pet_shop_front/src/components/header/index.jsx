import { AppBar, Toolbar, Box } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.svg'
import styles from './styles.module.css'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Badge, { badgeClasses } from '@mui/material/Badge'

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -8px;
    right: 38px;
    background-color: #0d50ff;
    color: #ffff;
  }
`

const menuNav = [
  {
    path: '/',
    title: 'Main Page',
  },
  {
    path: '/categories',
    title: 'Categories',
  },
  {
    path: '/products',
    title: 'All products',
  },
  {
    path: '/sale',
    title: 'All sales',
  },
]

function Header() {
  const navigate = useNavigate()

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        borderBottom: '1px solid #DDDDDD',
        backgroundColor: '#fff',
        px: 5,
        py: 3.75,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Company logo"
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />

        <Box sx={{ display: 'flex', gap: 4 }}>
          {menuNav.map((el, index) => (
            <NavLink
              key={index}
              to={el.path}
              className={styles.navLink}
              style={({ isActive }) => ({
                color: isActive ? '#5c5c5c' : '#282828',
              })}
            >
              {el.title}
            </NavLink>
          ))}
        </Box>

        <IconButton>
          <Box
            component="img"
            src={cart}
            alt="cart"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/cart')}
          />
          <CartBadge badgeContent={1} color="primary" overlap="circular" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
export default Header
