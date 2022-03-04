import { update, remove } from '../helpers/httpClient'
export const updateTrainCar = async (trainCar) => await update('railRoadCars', trainCar)

export const removeTrainCar = async (idTrainCar) => await remove('railRoadCars/' + idTrainCar)
