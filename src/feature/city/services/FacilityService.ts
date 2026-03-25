import { facilityData } from "../data/facilityData"
import { Facility } from "../types/FacilityType"

const getFacilityByTag = (tag: string): Facility => {
    return facilityData.find((item: Facility) => item.tag === tag) as Facility
}

export { facilityData, getFacilityByTag }