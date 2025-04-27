import Character from './Character'

const CharacterRouter = [
    {
        path: '/character',
        children: [
            {
                index: true,
                element: <Character />,
            },
        ],
    },
]

export default CharacterRouter
