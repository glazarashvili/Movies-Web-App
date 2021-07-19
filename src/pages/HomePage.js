import React from 'react'

import Movies from '../components/Movies/Movies'
import MainLayout from '../components/MainLayout/MainLayout'

export const HomePage = () => {
  return (
    <React.Fragment>
      <MainLayout />
      <Movies />
    </React.Fragment>
  )
}
