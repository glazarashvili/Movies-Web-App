import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

export default function Modal({ videoLink }) {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Watch Trailer
      </Button>
      <Dialog
        style={{ width: '100%' }}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'>
        {/* <DialogTitle id='responsive-dialog-title'>{videoLink.name}</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            {videoLink
              .map(elem => {
                return (
                  <iframe
                    style={{ border: 'none', width: '1200px' }}
                    type='text/html'
                    width='100%'
                    height='500px'
                    src={`https://www.youtube.com/embed/${elem.key}`}
                    title={elem.name}
                    key={elem.key}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
                )
              })
              .slice(0, 1)}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}
