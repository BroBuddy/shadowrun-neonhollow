import Mission from './pages/Mission'
import MissionDetail from './pages/MissionDetail'
import MissionPerformance from './pages/MissionPerformance'
import MissionRules from './pages/MissionRules'

const MissionRouter = [
    {
        path: '/mission',
        children: [
            {
                index: true,
                element: <Mission />,
            },
            {
                path: 'rules',
                element: <MissionRules />,
            },
            {
                path: 'performance',
                element: <MissionPerformance />,
            },
            {
                path: ':missionId',
                element: <MissionDetail />,
            },
        ],
    },
]

export default MissionRouter
