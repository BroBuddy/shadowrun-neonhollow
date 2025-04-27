import City from './pages/City'
import MegaCorp from './pages/MegaCorp'
import NeuralNexus from './pages/NeuralNexus'
import PatrolHub from './pages/PatrolHub'

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
                path: 'neuralnexus',
                element: <NeuralNexus />,
            },
            {
                path: 'patrolhub',
                element: <PatrolHub />,
            },
        ],
    },
]

export default CityRouter
