import { Close } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  FormControl,
  styled,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material'
import { useRef } from 'react'
import { addTrainCar } from '../../services'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export const AddTrainCarDlg = ({ isOpen, handleClose, destinations, receivers, handleAdd }) => {
  const formRef = useRef()

  const handleSubmit = async () => {
    if (!formRef.current) return
    const data = {
      name: formRef.current['name'].value,
      destination: formRef.current['destination'].value,
      receiver: formRef.current['receiver'].value,
    }

    const response = await addTrainCar(data)
    handleAdd()
    handleClose()
  }

  return (
    <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen} fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Add Train Car
        {handleClose && (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}>
            <Close />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent dividers>
        <form ref={formRef} noValidate>
          <FormControl fullWidth sx={{ marginBottom: (theme) => theme.spacing(2) }}>
            <TextField id="name" name="name" label="Car Name" />
          </FormControl>
          <Box sx={{ display: 'flex' }} style={{ gap: '10px' }}>
            <FormControl fullWidth>
              <InputLabel>Destination</InputLabel>
              <Select
                id="destination"
                name="destination"
                label="Destination">
                {destinations?.map(({ value, key }) => (
                  <MenuItem key={value} value={key}>
                    {key}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Receiver</InputLabel>
              <Select id="receiver" name="receiver" label="Receiver">
                {receivers?.map(({ value, key }) => (
                  <MenuItem key={value} value={key}>
                    {key}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </form>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </BootstrapDialog>
  )
}
