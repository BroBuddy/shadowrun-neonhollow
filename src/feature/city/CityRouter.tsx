import City from './pages/City'
import CityDetail from './pages/CityDetail'
import MegaCorp from './pages/MegaCorp'

const CityRouter = [
    {
        path: '/city',
        children: [
            {
                index: true,
                element: <City />,
            },
            {
                path: 'megacorp',
                element: <MegaCorp />,
            },
            {
                path: ':facilityTag',
                element: <CityDetail />,
            },
        ],
    },
]

export default CityRouter
