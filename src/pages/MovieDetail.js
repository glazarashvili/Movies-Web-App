import React from 'react'
import axios from 'axios'
import { url, apiKey } from '../service/index'

import { useParams } from 'react-router-dom'

// import classes from './MovieDetail.module.css'

export const MovieDetail = () => {
  const params = useParams()

  const movieUrl = `${url}/movie/${params.movieId.slice(1)}?api_key=${apiKey}`

  React.useEffect(() => {
    const searchMovie = async () => {
      await axios.get(movieUrl).then(response => console.log('resp', response))
    }
    searchMovie()
  }, [movieUrl])

  return <div style={{ marginTop: '92px' }}>{params.movieId.slice(1)}</div>
}
