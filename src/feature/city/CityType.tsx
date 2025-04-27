type CityDistrict = {
    name: string
    heat: string
    facilities: CityFacility[]
}

type CityFacility = {
    name: string
    link: string
    image: string
}

export type { CityDistrict, CityFacility }
