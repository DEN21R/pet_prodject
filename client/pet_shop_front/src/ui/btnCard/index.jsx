import { Box } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'
import btnBlue from '../../assets/btnNormal.svg'
import btnBlack from '../../assets/btnHover.svg'
import btnWhite from '../../assets/btnActive.svg'

function BtnCard({ product }) {
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false)
  const cartItems = useSelector((state) => state.cart.items)

  const isInCart = cartItems.some((item) => item.id === product.id)

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          discont_price: product.discont_price,
          image: product.image,
        }),
      )
    }
  }

  const getBackgroundImage = () => {
    if (isInCart) return btnWhite
    if (isHovered) return btnBlack
    return btnBlue
  }

  return (
    <Box
      onClick={handleAddToCart}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: isInCart ? 'default' : 'pointer',
        width: '100%',
        height: '50px',
        transition: 'all 0.3s ease',
        userSelect: 'none',
      }}
    />
  )
}
export default BtnCard
