import { Add } from '@mui/icons-material'
import { Paper, Alert, Fab } from '@mui/material'
import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { TrainCarsTable, TrainCarsHeader, DepartureList, UpdateTrainCarDlg } from '../components'

export const TrainCarsContainer = () => {
  const [trainCarOnEdition, setTrainCarOnEdition] = useState()
  const [isOpenUpdateDlg, setIsOpenUpdateDlg] = useState(false)
  const [shouldShowSort, setShouldShowSort] = useState(false)
  const [trainCarsListing, setTrainCarsListing] = useState([])
  const { data: trainCars, loading, error } = useFetch('railRoadCars/list')
  const { data: destinations } = useFetch('railRoadCarDestinations/list')
  const { data: receivers } = useFetch('railRoadCarReceivers/list')

  const showSort = () => {
    console.log('this event is happening')
    setShouldShowSort(true)
  }

  useEffect(() => {
    setTrainCarsListing(trainCars)
  }, [trainCars])

  const onClickEditButton = (trainCar) => {
    setTrainCarOnEdition(trainCar)
    setIsOpenUpdateDlg(true)
  }
  const handleCloseUpdateDlg = () => {
    setTrainCarOnEdition(null)
    setIsOpenUpdateDlg(false)
  }

  const updateItemOnListing = (trainCar) => {
    const foundItemIdx = trainCarsListing.findIndex((item) => item.name === trainCar.name)

    if (foundItemIdx === -1) return

    const updatedItem = { ...trainCarsListing[foundItemIdx], ...trainCar }
    const finalList = [...trainCarsListing]
    finalList[foundItemIdx] = updatedItem

    setTrainCarsListing(finalList)
  }

  if (loading) return <Alert severity="info">Loading...</Alert>
  if (error) return <Alert severity="error">Error while trying to load the car list!</Alert>

  return (
    <Paper sx={{ margin: '10px', padding: (theme) => theme.spacing(2) }}>
      <TrainCarsHeader onAddTrain={() => {}} />
      <TrainCarsTable trainCars={trainCarsListing} onClickEditButton={onClickEditButton} hasActions />
      <Fab variant="extended" color="primary" onClick={showSort}>
        <Add sx={{ mr: 1 }} />
        Sort
      </Fab>
      {shouldShowSort && <DepartureList />}
      <UpdateTrainCarDlg
        isOpen={isOpenUpdateDlg}
        handleClose={handleCloseUpdateDlg}
        trainCarOnEdition={trainCarOnEdition}
        destinations={destinations}
        receivers={receivers}
        updateItemOnListing={updateItemOnListing}
      />
    </Paper>
  )
}
