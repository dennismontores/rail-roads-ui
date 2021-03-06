import { Box, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@mui/material'
import { TrainCar } from './TrainCar'

export const TrainCarsTable = ({ trainCars, onClickEditButton, onClickRemoveButton, hasActions = true }) => {
  console.log(trainCars)
  return (
    <TableContainer component={Box}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Car Name</TableCell>
            <TableCell align="center">Destination</TableCell>
            <TableCell align="center">Receiver</TableCell>
            {hasActions && <TableCell align="center">Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {trainCars?.map((car) => (
            <TrainCar
              key={car.id}
              trainCar={car}
              hasActions={hasActions}
              onClickEditButton={onClickEditButton}
              onClickRemoveButton={onClickRemoveButton}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
