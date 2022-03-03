import {Paper, Typography, Fab, Box, Alert, Button} from '@mui/material'
import { Add, Delete, Edit } from '@mui/icons-material'
import useFetch from '../hooks/useFetch'
import { TrainCarsTable } from './components/TrainCarsTable'
import {useState} from "react";
import DepartureList from "./components/DepartureList";

const Home = () => {
  const { data, loading, error } = useFetch('railRoadCars/list')
  const [errorDepartureList, setErrorDepartureList] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [departureList, setDepartureList] = useState([]);

  function getDepartureList() {
      const headers = {'Accept': 'application/json'}
      fetch("http://localhost:8080/railroadoperations/departList/", {headers})
          .then(res => res.json())
          .then(
              (data) => {
                  setIsLoaded(true);
                  setDepartureList(data);
              },
              (error) => {
                  setIsLoaded(true);
                  setErrorDepartureList(error);
              }
          )
  }

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
      <div><Button variant="contained" onClick={getDepartureList}>Sort</Button></div>
      <DepartureList isLoaded={isLoaded} departureList={departureList} error={errorDepartureList}/>
    </Paper>
  )
}

export default Home