import { update } from '../helpers/httpClient'
export const updateTrainCar = async (trainCar) => {
  const data = {
    railRoadCar: trainCar,
  }

  return await update('railRoadCars', data)
}
