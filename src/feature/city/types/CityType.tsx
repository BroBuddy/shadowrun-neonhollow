type District = {
    id?: number
    name: string
    noto: number
    icon: string
    facilities?: FacilityType[]
}

type FacilityType = {
    name: string
    link: string
}

export type { District, FacilityType }
