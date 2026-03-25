import { cityData } from "../data/cityData"
import { District } from "../types/CityType"

const getCityData = (): District[] => {
    return cityData
}

export { cityData, getCityData }