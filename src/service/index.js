import axios from 'axios'

export const apiKey = 'abcb68572e6980c3ad6d0e28dc35b6ce'
export const url = 'https://api.themoviedb.org/3'
// const nowPlayingUrl = `${url}/movie/now_playing`
// const topratedUrl = `${url}/movie/top_rated`
// const movieUrl = `${url}/movie`
// const genreUrl = `${url}/genre/movie/list`
// export const moviesUrl = `${url}/discover/movie`
// const personUrl = `${url}/trending/person/week`
export const posterUrl = 'https://image.tmdb.org/t/p/original/'

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

  // console.log(data.results)
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
  // console.log('data', modifiedData)

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
  // console.log('data', modifiedData)

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

  console.log(data.results)
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
  console.log('data', modifiedData)

  return modifiedData
}

// export const searchMovie = async () => {
//   const { data } = axios.get(moviesUrl).then(response => {
//     return response
//   })

//   console.log(data.results)
//   const modifiedData = data.results.map(item => ({
//     id: item.id,
//     title: item.title,
//     image: posterUrl + item?.poster_path,
//     language: item.original_language,
//     desc: item.overview,
//     genre_ids: item.genre_ids,
//     release_date: item.release_date,
//     ranking: item.vote_average,
//     poster: posterUrl + item?.backdrop_path,
//   }))
//   console.log('data', modifiedData)

//   return modifiedData
// }
