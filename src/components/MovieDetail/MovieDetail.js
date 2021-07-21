import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { url, apiKey, posterUrl } from '../../service/index'

import MovieBackdrop from './MovieBackdrop'
import MovieDescription from './MovieDescription'

export const MovieDetail = () => {
  const params = useParams()
  const [movieDetail, setMovieDetail] = React.useState({})
  const [poster, setPoster] = React.useState('')
  const [backdrop, setBackdrop] = React.useState('')

  React.useEffect(() => {
    axios
      .get(`${url}/movie/${params.movieId}?api_key=${apiKey}`)
      .then(response => {
        setMovieDetail(response.data)
        setBackdrop(posterUrl + response.data.backdrop_path)
        setPoster(posterUrl + response.data.poster_path)
      })
  }, [params.movieId])

  console.log('thaaat', poster)

  return (
    <div style={{ marginTop: '92px' }}>
      <MovieBackdrop
        backdrop={backdrop}
        movieTitle={movieDetail.title}
        ranking={movieDetail.vote_average}
      />
      <MovieDescription poster={poster} />
    </div>
  )
}