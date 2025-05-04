import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DistrictView from '../components/DistrictView'
import { District } from '../CityType'

// Mock the Link component from react-router-dom
jest.mock('react-router-dom', () => ({
    Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
        <a href={to}>{children}</a>
    ),
}))

const mockDistrict: District = {
    id: 1,
    name: 'Skyline',
    heat: '1',
    icon: '🔴',
    facilities: [
        { name: 'MegaCorp', link: '/city/megacorp' },
        { name: 'CyberLab', link: '/city/cyberlab' },
        { name: 'VitalClinic', link: '/city/vitalclinic' },
    ],
}

const emptyDistrict: District = {
    id: 2,
    heat: '2',
    name: 'Empty District',
    icon: '⚪',
    facilities: [],
}

describe('DistrictView Component', () => {
    it('renders the component with valid district data', () => {
        render(<DistrictView district={mockDistrict} />)

        // Check if the district name and icon are rendered
        expect(screen.getByText('🔴 Skyline')).toBeInTheDocument()

        // Check if all facilities are rendered
        expect(screen.getByText('MegaCorp')).toBeInTheDocument()
        expect(screen.getByText('CyberLab')).toBeInTheDocument()
        expect(screen.getByText('VitalClinic')).toBeInTheDocument()

        // Check if facility links are correct
        expect(screen.getByRole('link', { name: /megacorp/i })).toHaveAttribute(
            'href',
            '/city/megacorp'
        )
        expect(screen.getByRole('link', { name: /cyberlab/i })).toHaveAttribute(
            'href',
            '/city/cyberlab'
        )
        expect(
            screen.getByRole('link', { name: /vitalclinic/i })
        ).toHaveAttribute('href', '/city/vitalclinic')
    })

    it('renders fallback message when facilities are empty', () => {
        render(<DistrictView district={emptyDistrict} />)

        // Check for the fallback message
        expect(
            screen.getByText('No facilities available in this district.')
        ).toBeInTheDocument()
    })
})
