import React from 'react'
import MissionLayout from './layout/MissionLayout'

const Mission = React.lazy(() => import('./pages/Mission'))
const MissionDetail = React.lazy(() => import('./pages/MissionDetail'))

const MissionRouter = [
  {
    path: '/mission',
    element: <MissionLayout />,
    children: [
      { index: true, element: <Mission /> },
      { path: ':id', element: <MissionDetail /> },
    ],
  },
]

export default MissionRouter