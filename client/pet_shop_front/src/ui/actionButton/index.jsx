import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const BtnSmall = styled(Button)(() => ({
  fontSize: '1.25rem',
  fontWeight: 600,
  padding: '1rem clamp(16px, 5vw, 56px)',
  lineHeight: '130%',
  backgroundColor: '#0D50FF',
  width: 'auto',
  minWidth: '0',
}))

function ActionButton({ children, ...props }) {
  return <BtnSmall {...props}>{children}</BtnSmall>
}

export default ActionButton
