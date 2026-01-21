import { Box } from '@mui/material'
import './App.css'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/cart'
import Footer from './components/footer'

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
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
