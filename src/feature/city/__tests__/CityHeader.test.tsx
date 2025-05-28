import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import CityHeader from '../components/CityHeader'
import { District } from '../CityType'

const mockCityData: District[] = [
    { name: 'Skyline', heat: '2', icon: '🔴' },
    { name: 'Central', heat: '4', icon: '🟠' },
    { name: 'Quarter', heat: '6', icon: '🟡' },
    { name: 'Depths', heat: '8', icon: '🟢' },
]

describe('CityHeader Component', () => {
    it('renders the component with valid cityData', async () => {
        render(<CityHeader cityData={mockCityData} />)

        jest.mock(
            '@/components/FadeIn',
            () =>
                ({ children }: { children: React.ReactNode }) => {
                    return <>{children}</>
                }
        )

        // Wait for the title to appear
        const title = await waitFor(() =>
            screen.getByRole('heading', { name: 'District Lockdowns:' })
        )
        expect(title).toBeInTheDocument()

        // Check if the first three districts are rendered
        expect(
            screen.getByText(
                (_, element) => element?.textContent === '🔴 Heat 2 → Skyline'
            )
        ).toBeInTheDocument()
        expect(
            screen.getByText(
                (_, element) => element?.textContent === '🟠 Heat 4 → Central'
            )
        ).toBeInTheDocument()
        expect(
            screen.getByText(
                (_, element) => element?.textContent === '🟡 Heat 6 → Quarter'
            )
        ).toBeInTheDocument()

        // Ensure the fourth district is not rendered
        expect(
            screen.queryByText(
                (_, element) => element?.textContent === '🟢 Heat 8 → Depths'
            )
        ).not.toBeInTheDocument()
    })

    it('renders fallback message when cityData is empty', () => {
        render(<CityHeader cityData={[]} />)

        // Check for the fallback message
        const fallbackMessage = screen.getByText('No districts available.')
        expect(fallbackMessage).toBeInTheDocument()
    })
})
