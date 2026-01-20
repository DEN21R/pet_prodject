import { Box } from '@mui/material'
import './App.css'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/cart'
import Footer from './components/footer'

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
