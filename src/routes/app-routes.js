export const AppRoutes = [
  {
    path: 'home',
    component: 'HomePage',
    exact: true,
  },
  {
    path: 'movies',
    component: 'MoviesPage',
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
    path: 'tv',
    component: 'TvPage',
    exact: false,
  },

  {
    path: 'cinemania',
    component: 'CinemaniaPage',
    exact: false,
  },
]
