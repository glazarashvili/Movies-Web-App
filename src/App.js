import Header from './components/Header/Header'
import React from 'react'
// import axios from 'axios'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  // React.useEffect(() => {
  //   axios
  //     .get('http://www.omdbapi.com/?apikey=31790adb&t=interstellar')
  //     .then(response => console.log(response))
  // })

  return (
    <Router>
      <Header />
      <Route pathname='/' exact>
        <HomePage />
      </Route>
    </Router>
  )
}

export default App
