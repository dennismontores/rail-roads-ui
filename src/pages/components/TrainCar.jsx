import { Edit, Delete } from '@mui/icons-material'
import { TableRow, TableCell, Box, IconButton } from '@mui/material'

export const TrainCar = ({ trainCar: { destination, name, receiver }, hasActions = true }) => {
  return (
    <TableRow key={name}>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{destination}</TableCell>
      <TableCell align="center">{receiver}</TableCell>
      {hasActions && (
        <TableCell align="center">
          <Box sx={{ display: 'flex', justifyContent: 'center' }} style={{ gap: '10px' }}>
            <IconButton aria-label="edit">
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
