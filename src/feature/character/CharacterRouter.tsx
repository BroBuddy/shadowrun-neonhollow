import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const Character = React.lazy(() => import('../character/pages/Character'))
const ArchetypeDetail = React.lazy(
    () => import('../character/pages/ArchetypeDetail')
)
const MetatypeDetail = React.lazy(
    () => import('../character/pages/MetatypeDetail')
)
const NameDetail = React.lazy(() => import('../character/pages/NameDetail'))

const CharacterRouter = [
  {
    path: '/character',
    children: [
      { index: true, element: <Suspense fallback={<Preloader />}><Character /></Suspense> },
      { path: 'archetype/:id', element: <Suspense fallback={<Preloader />}><ArchetypeDetail /></Suspense> },
      { path: 'metatype/:id', element: <Suspense fallback={<Preloader />}><MetatypeDetail /></Suspense> },
      { path: 'name/:tag', element: <Suspense fallback={<Preloader />}><NameDetail /></Suspense> },
    ],
  },
]

export default CharacterRouter
