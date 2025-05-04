import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import City from '../pages/City'
import { getCityData } from '../cityData'
import { District } from '../CityType'

// Mock the `getCityData` function
jest.mock('../cityData', () => ({
    getCityData: jest.fn(),
}))

jest.mock('../components/CityHeader', () => () => <div>Mocked CityHeader</div>)
jest.mock(
    '../components/DistrictView',
    () =>
        ({ district }: { district: District }) => (
            <div>Mocked DistrictView: {district.name}</div>
        )
)

describe('City Component', () => {
    it('renders the component with valid city data', () => {
        const mockCityData: District[] = [
            { id: 1, name: 'Skyline', heat: '2', icon: '🔴', facilities: [] },
            { id: 2, name: 'Central', heat: '4', icon: '🟠', facilities: [] },
        ]
        ;(getCityData as jest.Mock).mockReturnValue(mockCityData)

        render(<City />)

        // Check if the headline is rendered
        expect(screen.getByText('NeonHollow')).toBeInTheDocument()

        // Check if the CityHeader is rendered
        expect(screen.getByText('Mocked CityHeader')).toBeInTheDocument()

        // Check if DistrictView is rendered for each district
        expect(
            screen.getByText('Mocked DistrictView: Skyline')
        ).toBeInTheDocument()
        expect(
            screen.getByText('Mocked DistrictView: Central')
        ).toBeInTheDocument()
    })

    it('renders fallback message when no city data is available', () => {
        ;(getCityData as jest.Mock).mockReturnValue([])

        render(<City />)

        // Check for the fallback message
        expect(screen.getByText('No city data available.')).toBeInTheDocument()
    })
})
