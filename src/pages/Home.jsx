import { Paper, Typography, Fab, Box, Alert } from '@mui/material'
import { Add, Delete, Edit } from '@mui/icons-material'
import useFetch from '../hooks/useFetch'
import { TrainCar } from './components/TrainCar'
import { TrainCarsTable } from './components/TrainCarsTable'

const Home = () => {
  const { data, loading, error } = useFetch('railRoadCars/list')

  if (loading) return <Alert severity="info">Loading...</Alert>
  if (error) return <Alert severity="error">Error while trying to load the car list!</Alert>

  return (
    <Paper sx={{ margin: '10px', padding: (theme) => theme.spacing(2) }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: (theme) => theme.spacing(2),
        }}>
        <Typography sx={{ fontSize: (theme) => theme.spacing(3), fontWeight: 'bold' }}>Train Cars</Typography>
        <Fab variant="extended" color="primary">
          <Add sx={{ mr: 1 }} />
          Add Train Car
        </Fab>
      </Box>
      <TrainCarsTable trainCars={data} hasActions />
    </Paper>
  )
}

export default Home
