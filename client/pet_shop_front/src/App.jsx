import { Box } from '@mui/material'
import './App.css'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/cart'
import Footer from './components/footer'
import Main from './pages/main'
import ErrorPage from './pages/errorPage'
import Categories from './pages/categories'

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        maxWidth: '1440px',
        width: '100%',
        mx: 'auto',
      }}
    >
      <Header />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
