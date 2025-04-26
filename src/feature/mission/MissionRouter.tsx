import Mission from './Mission'
import MissionDetail from './MissionDetail'
import MissionPerformance from './MissionPerformance'
import MissionRules from './MissionRules'

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
