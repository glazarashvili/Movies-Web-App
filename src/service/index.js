import axios from 'axios'

const apiKey = 'abcb68572e6980c3ad6d0e28dc35b6ce'
const url = 'https://api.themoviedb.org/3'
// const nowPlayingUrl = `${url}/movie/now_playing`
// const topratedUrl = `${url}/movie/top_rated`
// const movieUrl = `${url}/movie`
// const genreUrl = `${url}/genre/movie/list`
// const moviesUrl = `${url}/discover/movie`
// const personUrl = `${url}/trending/person/week`
const posterUrl = 'https://image.tmdb.org/t/p/original/'

export const fetchMovies = async () => {
  const { data } = await axios
    .get(`${url}/movie/now_playing/?api_key=${apiKey}`)
    .then(response => {
      return response
    })
  console.log(data.results)
  const modifiedData = data.results.map(item => ({
    id: item.id,
    title: item.title,
    image: posterUrl + item.poster_path,
    language: item.original_language,
    desc: item.overview,
    release_date: item.release_date.slice(0, 4),
    ranking: item.vote_average,
  }))
  console.log('data', modifiedData)

  return modifiedData
}
