import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { url, apiKey, posterUrl } from '../../service/index'

import MovieCard from './MovieCard'
import MovieInfo from './MovieInfo'

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

  const movieInfo = [
    { name: 'Title', prop: movieDetail.release_date },
    { name: 'Release Date', prop: 'release' },
    { name: 'Country', prop: 'country' },
    { name: 'Genres', prop: 'genres' },
    { name: 'Budget', prop: 'budget' },
    { name: 'Revenue', prop: 'revenue' },
    { name: 'Description', prop: 'description' },
    { name: '+18', prop: 'permission' },
    { name: 'Popularity', prop: 'popularity' },
  ]

  console.log('thaaat', movieDetail)

  return (
    <div style={{ marginTop: '74px' }}>
      <MovieCard
        backdrop={backdrop}
        movieTitle={movieDetail.title}
        ranking={movieDetail.vote_average}
      />
      <MovieInfo
        poster={poster}
        movieInfo={movieInfo}
        // popularity={movieDetail.popularity}
        // permission={movieDetail.adult}
        // description={movieDetail.revenue}
        // country={movieDetail.original_language}
        // revenue={movieDetail.revenue}
        // description={movieDetail.overview}
        // release={movieDetail.release_date}
        // budget={movieDetail.budget}
        // genres={movieDetail.genres}
      />
    </div>
  )
}
