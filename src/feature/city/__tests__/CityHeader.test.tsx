import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CityHeader from '../components/CityHeader'
import { District } from '../CityType'

const mockCityData: District[] = [
    { name: 'Skyline', heat: '2', icon: '🔴' },
    { name: 'Central', heat: '4', icon: '🟠' },
    { name: 'Quarter', heat: '6', icon: '🟡' },
    { name: 'Depths', heat: '8', icon: '🟢' },
]

describe('CityHeader Component', () => {
    it('renders the component with valid cityData', () => {
        render(<CityHeader cityData={mockCityData} />)

        // Check if the image is rendered
        const image = screen.getByAltText('NeonHollow')
        expect(image).toBeInTheDocument()

        // Check if the title is rendered
        const title = screen.getByText('District Lockdowns:')
        expect(title).toBeInTheDocument()

        // Check if the first three districts are rendered
        expect(screen.getByText('🔴 Heat 2 → Skyline')).toBeInTheDocument()
        expect(screen.getByText('🟠 Heat 4 → Central')).toBeInTheDocument()
        expect(screen.getByText('🟡 Heat 6 → Quarter')).toBeInTheDocument()

        // Ensure the fourth district is not rendered
        expect(screen.queryByText('🟢 Heat 8 → Depths')).not.toBeInTheDocument()
    })

    it('renders fallback message when cityData is empty', () => {
        render(<CityHeader cityData={[]} />)

        // Check for the fallback message
        const fallbackMessage = screen.getByText('No districts available.')
        expect(fallbackMessage).toBeInTheDocument()
    })
})
