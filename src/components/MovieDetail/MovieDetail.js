import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Comments from './Comments/Comments'
import MovieCard from './MovieInfo/MovieCard'
import MovieInfo from './MovieInfo/MovieInfo'

// import Modal from '../../ui/Modal'

import classes from './MovieDetail.module.css'

import { url, apiKey, posterUrl } from '../../service/index'

export const MovieDetail = () => {
  const params = useParams()

  const [info, setInfo] = React.useState({})
  const [poster, setPoster] = React.useState('')
  const [comments, setComments] = React.useState([])
  const [backdrop, setBackdrop] = React.useState('')
  const [video, setVideo] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`${url}/movie/${params.movieId}?api_key=${apiKey}`)
      .then(response => {
        setInfo(response.data)
        setPoster(posterUrl + response.data.poster_path)
        setBackdrop(posterUrl + response.data.backdrop_path)
      })

    axios
      .get(`${url}/movie/${params.movieId}/reviews?api_key=${apiKey}`)
      .then(response => {
        setComments(response.data.results)
      })

    axios
      .get(`${url}/movie/${params.movieId}/credits?api_key=${apiKey}`)
      .then(response => {
        console.log(response, 'images')
        // aq wamovigebt filmis posterebs
      })

    axios
      .get(`${url}/movie/${params.movieId}/credits?api_key=${apiKey}`)
      .then(response => {
        console.log(response, 'cast')
        // aq wamovigebt filmis casts, msaxiobebs da a.sh.
      })

    axios
      .get(`${url}/movie/${params.movieId}/similar?api_key=${apiKey}`)
      .then(response => {
        console.log(response, 'similar')
        // aq wamovigebt msgavs filmebs
      })

    axios
      .get(`${url}/movie/${params.movieId}/videos?api_key=${apiKey}`)
      .then(response => {
        console.log(response, 'videos')
        setVideo(response.data.results)
        // aq wamovigebt filmis trailers, msaxiobebs da a.sh.
      })
  }, [params.movieId])

  const movieInfo = [
    { name: 'Title', prop: info.title },
    { name: 'Release Date', prop: info.release_date?.slice(0, 4) },
    {
      name: 'Country',
      prop: info.production_countries?.map(item => item.name).join(', '),
    },
    {
      name: 'Production Company',
      prop: info.production_companies
        ?.slice(0, 2)
        .map(item => item.name)
        .join(', '),
    },
    {
      name: 'Genres',
      prop: info.genres?.map(genre => genre.name).join(', '),
    },
    {
      name: 'Budget',
      prop: info.budget ? `${(info.budget / 1000000).toFixed(1)}. mn.` : 'N/A',
    },
    {
      name: 'Revenue',
      prop: info.revenue
        ? `${(info.revenue / 1000000).toFixed(1)}. mn.`
        : 'N/A',
    },
    { name: 'Description', prop: info.overview },
    {
      name: 'Adults',
      prop: info.permission ? 'Not Permitted' : 'Permitted',
    },
    { name: 'IMDb', prop: info.vote_average },
    { name: 'Votes', prop: info.vote_count },
    { name: 'Popularity', prop: info.popularity },
  ]

  return (
    <div className={classes['detail-menu']}>
      <MovieCard
        backdrop={backdrop}
        movieTitle={info.title}
        ranking={info.vote_average}
      />
      {/* <Modal /> */}
      <MovieInfo poster={poster} movieInfo={movieInfo} videoLink={video} />
      <Comments comms={comments} />
    </div>
  )
}
