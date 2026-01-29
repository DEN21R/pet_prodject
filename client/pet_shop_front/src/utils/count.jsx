import { Box, Typography } from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useState } from 'react'

export default function Count({ onCountChange }) {
  const [count, setCount] = useState(1)

  const handleIncrease = () => {
    const newCount = count + 1
    setCount(newCount)
    if (onCountChange) {
      onCountChange(newCount)
    }
  }

  const handleDecrease = () => {
    const newCount = Math.max(count - 1, 1)
    setCount(newCount)
    if (onCountChange) {
      onCountChange(newCount)
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <ButtonGroup size="small">
        <Button onClick={handleDecrease} disabled={count <= 1}>
          <RemoveIcon fontSize="medium" sx={{ color: '#8B8B8B' }} />
        </Button>
        <Box
          sx={{
            minWidth: '96px',
            height: '58px',
            border: '1px solid #DDDDDD',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="filterTitle">{count}</Typography>
        </Box>
        <Button aria-label="increase" onClick={handleIncrease}>
          <AddIcon fontSize="medium" sx={{ color: '#8B8B8B' }} />
        </Button>
      </ButtonGroup>
    </Box>
  )
}
