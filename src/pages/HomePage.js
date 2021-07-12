import React from 'react'

import Movies from '../components/Movies/Movies'
import MainLayout from '../components/MainLayout/MainLayout'

const HomePage = () => {
  return (
    <React.Fragment>
      <MainLayout />
      <Movies />
    </React.Fragment>
  )
}

export default HomePage
