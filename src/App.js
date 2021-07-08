import Header from './components/Header/Header'
import React from 'react'
// import axios from 'axios'
import MainLayout from './components/MainLayout/MainLayout'
import MovieItem from './components/Movies/MovieItem'
import Movies from './components/Movies/Movies'

function App() {
  // React.useEffect(() => {
  //   axios
  //     .get('http://www.omdbapi.com/?apikey=31790adb&t=interstellar')
  //     .then(response => console.log(response))
  // })

  return (
    <div className='App'>
      <Header />
      <MainLayout />
      <Movies />
    </div>
  )
}

export default App
