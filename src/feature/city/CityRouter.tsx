import City from './City'
import MegaCorp from './MegaCorp'
import NeuralNexus from './NeuralNexus'
import PatrolHub from './PatrolHub'

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
