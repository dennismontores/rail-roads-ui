import { update, remove } from '../helpers/httpClient'
export const updateTrainCar = async (trainCar) => {
  const data = {
    railRoadCar: trainCar,
  }

  return await update('railRoadCars', data)
}

export const removeTrainCar = async (idTrainCar) => {
  return await remove('railRoadCars/' + idTrainCar);
}
