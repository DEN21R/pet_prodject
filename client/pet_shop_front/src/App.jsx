import { Box } from '@mui/material'
import './App.css'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/cart'

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Box>
  )
}

export default App
