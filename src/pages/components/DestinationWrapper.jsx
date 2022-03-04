import DestinationTable from './DestinationTable'
import ReceiverTable from './ReceiverTable'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export const DestinationWrapper = () => (
  <Box>
    <Grid container spacing={2} columns={16}>
      <Grid item xs={8}>
        <DestinationTable />
      </Grid>
      <Grid item xs={8}>
        <ReceiverTable />
      </Grid>
    </Grid>
  </Box>
)
