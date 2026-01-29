import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

function DialogComponent({ open, onClose }) {
  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle
        id="customized-dialog-title"
        sx={{
          backgroundColor: '#0D50FF',
          color: '#fff',
          m: 0,
          p: 4,
          pb: 0,
          width: '548px',
          fontSize: '2.5rem',
        }}
      >
        Congratulations!
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[100],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ backgroundColor: '#0D50FF', color: '#fff', p: 8 }}>
        <Typography gutterBottom sx={{ width: '319px' }}>
          Your order has been successfully placed on the website.
        </Typography>
        <Typography gutterBottom sx={{ width: '319px' }}>
          A manager will contact you shortly to confirm your order.
        </Typography>
      </DialogContent>
    </BootstrapDialog>
  )
}
export default DialogComponent
