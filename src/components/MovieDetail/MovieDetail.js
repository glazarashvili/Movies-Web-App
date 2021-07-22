import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import MovieCard from './MovieCard'
import MovieInfo from './MovieInfo'
import Comments from './MovieComment/Comments'

import classes from './MovieDetail.module.css'

import { url, apiKey, posterUrl } from '../../service/index'

export const MovieDetail = () => {
  const params = useParams()
  const [info, setInfo] = React.useState({})
  const [comments, setComment] = React.useState([])
  const [poster, setPoster] = React.useState('')
  const [backdrop, setBackdrop] = React.useState('')
  const [avatar, setAvatar] = React.useState('')

  React.useEffect(() => {
    axios
      .get(`${url}/movie/${params.movieId}?api_key=${apiKey}`)
      .then(response => {
        setInfo(response.data)
        setBackdrop(posterUrl + response.data.backdrop_path)
        setPoster(posterUrl + response.data.poster_path)
      })

    axios
      .get(`${url}/movie/${params.movieId}/reviews?api_key=${apiKey}`)
      .then(response => {
        setComment(response.data.results)
        // setAvatar(response.data.results[0].author_details.avatar_path.slice(1))
        setAvatar(
          response.data.results.map(
            result => result.author_details.avatar_path.slice(1)[0]
          )
        )
        console.log(
          response.data.results.map(result =>
            result.author_details.avatar_path.slice(1)
          )
        )
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

  // console.log(comments.author)

  return (
    <div className={classes['detail-menu']}>
      <MovieCard
        backdrop={backdrop}
        movieTitle={info.title}
        ranking={info.vote_average}
      />
      <MovieInfo poster={poster} movieInfo={movieInfo} />
      <Comments
        comms={comments}
        author={comments.author}
        avatar={avatar}
        comment={comments.comment}
      />
    </div>
  )
}
