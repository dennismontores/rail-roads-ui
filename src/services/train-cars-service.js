import { update, remove, add, get } from '../helpers/httpClient'
export const updateTrainCar = async (trainCar) => await update('railRoadCars', trainCar)

export const removeTrainCar = async (idTrainCar) => await remove('railRoadCars/' + idTrainCar)

export const addTrainCar = async (trainCar) => await add('railRoadCars', trainCar)

export const getTrainCars = async () => await get('railRoadCars/list')