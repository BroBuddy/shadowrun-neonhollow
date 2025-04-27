import Resource from './pages/Resource'
import ResourceDetail from './pages/ResourceDetail'

const ResourceRouter = [
    {
        path: '/resource',
        children: [
            {
                index: true,
                element: <Resource />,
            },
            {
                path: ':resourceTag',
                element: <ResourceDetail />,
            },
        ],
    },
]

export default ResourceRouter
