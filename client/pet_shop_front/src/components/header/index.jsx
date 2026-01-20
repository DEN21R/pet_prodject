import { AppBar, Toolbar, Box } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.svg'
import styles from './styles.module.css'

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
    path: '/sales',
    title: 'All sales',
  },
]

function Header() {
  const navigate = useNavigate()

  return (
    <AppBar
      position="static"
      sx={{
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
          maxWidth: '1440px',
          width: '100%',
          mx: 'auto',
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

        <Box
          component="img"
          src={cart}
          alt="cart"
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/cart')}
        />
      </Toolbar>
    </AppBar>
  )
}
export default Header
