import React from 'react'
import CharacterLayout from '../character/layout/CharacterLayout'

const Character = React.lazy(() => import('../character/pages/Character'))
const ArchetypeDetail = React.lazy(() => import('../character/pages/ArchetypeDetail'))
const MetatypeDetail = React.lazy(() => import('../character/pages/MetatypeDetail'))
const NameDetail = React.lazy(() => import('../character/pages/NameDetail'))

const CharacterRouter = [
  {
    path: '/character',
    element: <CharacterLayout />,
    children: [
      { index: true, element: <Character /> },
      { path: 'archetype/:id', element: <ArchetypeDetail /> },
      { path: 'metatype/:id', element: <MetatypeDetail /> },
      { path: 'name/:tag', element: <NameDetail /> },
    ],
  },
]

export default CharacterRouter