import Character from './pages/Character'
import Rule from './pages/Rule'
import RuleDetail from './pages/RuleDetail'

const RuleRouter = [
    {
        path: '/rule',
        children: [
            {
                index: true,
                element: <Rule />,
            },
            {
                path: 'character',
                element: <Character />,
            },
            {
                path: ':ruleId',
                element: <RuleDetail />,
            },
        ],
    },
]

export default RuleRouter
