import React from 'react'
import CityLayout from './layout/CityLayout'

const City = React.lazy(() => import('./pages/City'))
const MegaCorp = React.lazy(() => import('./pages/MegaCorp'))
const ZeroZone = React.lazy(() => import('./pages/ZeroZone'))
const CityDetail = React.lazy(() => import('./pages/CityDetail'))

const CityRouter = [
  {
    path: '/city',
    element: <CityLayout />,
    children: [
      { index: true, element: <City /> },
      { path: 'megacorp', element: <MegaCorp /> },
      { path: 'zerozone', element: <ZeroZone /> },
      { path: ':tag', element: <CityDetail /> },
    ],
  },
]

export default CityRouter
