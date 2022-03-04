import { Box } from '@mui/material'
import { TrainCarsContainer, DestinationWrapper } from './components'

const Home = () => {
  return (
    <Box sx={{ p: (theme) => theme.spacing(2) }}>
      <DestinationWrapper />
      <br />
      <TrainCarsContainer />
    </Box>
  )
}

export default Home
