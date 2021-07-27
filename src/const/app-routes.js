export const appRoutes = [
  {
    path: 'home',
    component: 'HomePage',
    exact: true,
  },
  {
    path: 'movies',
    component: 'PopularMovies',
    exact: true,
  },
  {
    path: 'movies/:movieId',
    component: 'MovieDetail',
    exact: false,
  },
  {
    path: 'tvshows',
    component: 'TvShowsPage',
    exact: false,
  },
  {
    path: 'top-rated',
    component: 'TopRatedMovies',
    exact: false,
  },

  {
    path: 'newmovies',
    component: 'NewMovies',
    exact: false,
  },
]
