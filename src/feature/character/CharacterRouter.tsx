import { Preloader } from '@/main'
import React, { Suspense } from 'react'

const Character = React.lazy(() => import('../character/pages/Character'))

const CharacterRouter = [
  {
    path: '/character',
    element: <Suspense fallback={<Preloader />}><Character /></Suspense>,
  },
]

export default CharacterRouter