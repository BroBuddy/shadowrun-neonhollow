import City from './pages/City'
import CityDetail from './pages/CityDetail'

const CityRouter = [
    {
        path: '/city',
        children: [
            {
                index: true,
                element: <City />,
            },
            {
                path: ':facilityTag',
                element: <CityDetail />,
            },
        ],
    },
]

export default CityRouter
