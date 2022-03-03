import { Add } from '@mui/icons-material'
import { Box, Typography, Fab } from '@mui/material'

export const TrainCarsHeader = ({ onAddTrain }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: (theme) => theme.spacing(2),
      }}>
      <Typography sx={{ fontSize: (theme) => theme.spacing(3), fontWeight: 'bold' }}>Train Cars</Typography>
      <Fab variant="extended" color="primary" onClick={onAddTrain}>
        <Add sx={{ mr: 1 }} />
        Add Train Car
      </Fab>
    </Box>
  )
}
