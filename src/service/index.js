import axios from 'axios'

export const url = 'https://api.themoviedb.org/3'
export const apiKey = 'abcb68572e6980c3ad6d0e28dc35b6ce'
export const posterUrl = 'https://image.tmdb.org/t/p/original'
export const defaultIcon =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HcS2JpDEqN5_Z6nMyHZ3PlYT-1FlQpiU2W6Vby4yMcw3ZjbkAi4U3zPJ1Ubb_6ygWuE&usqp=CAU'

export const fetchOnGoingMovies = async () => {
  const { data } = await axios({
    method: 'get',
    url: `${url}/movie/now_playing/?api_key=${apiKey}`,
    params: {
      page: Math.floor(Math.random() * 4) + 1,
    },
  }).then(response => {
    return response
  })

  const modifiedData = data.results.map(item => ({
    id: item.id,
    title: item.title,
    image: posterUrl + item?.poster_path,
    language: item.original_language,
    desc: item.overview,
    release_date: item.release_date.slice(0, 4),
    ranking: item.vote_average,
    poster: posterUrl + item?.backdrop_path,
  }))

  return modifiedData
}

export const fetchPopularMovies = async () => {
  const { data } = await axios({
    method: 'get',
    url: `${url}/movie/popular/?api_key=${apiKey}`,
    params: {
      page: Math.floor(Math.random() * 10) + 1,
    },
  }).then(response => {
    return response
  })

  console.log(data.results)
  const modifiedData = data.results.map(item => ({
    id: item.id,
    title: item.title,
    image: posterUrl + item?.poster_path,
    language: item.original_language,
    desc: item.overview,
    release_date: item.release_date,
    ranking: item.vote_average,
    poster: posterUrl + item?.backdrop_path,
  }))

  return modifiedData
}

export const fetchTopRatedMovies = async () => {
  const { data } = await axios({
    method: 'get',
    url: `${url}/movie/top_rated/?api_key=${apiKey}`,
    params: {
      page: Math.floor(Math.random() * 10) + 1,
    },
  }).then(response => {
    return response
  })

  const modifiedData = data.results.map(item => ({
    id: item.id,
    title: item.title,
    image: posterUrl + item?.poster_path,
    language: item.original_language,
    desc: item.overview,
    genre_ids: item.genre_ids,
    release_date: item.release_date,
    ranking: item.vote_average,
    poster: posterUrl + item?.backdrop_path,
  }))

  return modifiedData
}
