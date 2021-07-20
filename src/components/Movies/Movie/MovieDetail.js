import React from 'react'

import axios from 'axios'

import { useParams } from 'react-router-dom'

// import classes from './MovieDetail.module.css'

export const MovieDetail = () => {
  const params = useParams()

  const apiKey = 'abcb68572e6980c3ad6d0e28dc35b6ce'

  const url = 'https://api.themoviedb.org/3'

  const moviesUrl = `${url}/movie/${params.movieId.slice(1)}?api_key=${apiKey}`

  React.useEffect(() => {
    const fetch = async () => {
      await axios
        .get(moviesUrl)
        .then(response => console.log('eeeeee', response))
    }

    fetch()
  }, [moviesUrl])

  console.log(params)

  return <div style={{ marginTop: '92px' }}>{params.movieId.slice(1)}</div>
}
