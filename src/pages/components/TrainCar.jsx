import { Edit, Delete } from '@mui/icons-material'
import { TableRow, TableCell, Box, IconButton } from '@mui/material'

export const TrainCar = ({ trainCar, onClickEditButton, hasActions = true }) => {
  return (
    <TableRow key={trainCar.name}>
      <TableCell align="center">{trainCar.name}</TableCell>
      <TableCell align="center">{trainCar.destination}</TableCell>
      <TableCell align="center">{trainCar.receiver}</TableCell>
      {hasActions && (
        <TableCell align="center">
          <Box sx={{ display: 'flex', justifyContent: 'center' }} style={{ gap: '10px' }}>
            <IconButton aria-label="edit" onClick={() => onClickEditButton(trainCar)}>
              <Edit />
            </IconButton>
            <IconButton aria-label="delete">
              <Delete />
            </IconButton>
          </Box>
        </TableCell>
      )}
    </TableRow>
  )
}
