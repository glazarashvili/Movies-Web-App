import React from 'react'
import MovieItem from './MovieItem'

import classes from './Movies.module.css'

const DATA = [
  {
    id: 0,
    duration: '1,58',
    desc: '...',
    title: 'inception',
    date: 2019,
    country: 'US',
    img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362',
  },
  {
    id: 1,
    duration: '2.43',
    desc: '...',
    title: 'inception',
    date: 1992,
    country: 'US',
    img: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217',
  },
  {
    id: 2,
    duration: '3.23',
    desc: '...',
    title: 'memento',
    date: 2019,
    country: 'Germany',
    img: 'https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg',
  },
  {
    id: 3,
    duration: '1.32',
    desc: '...',
    title: 'interstellar',
    date: 2019,
    country: 'UK',
    img: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88205/90762/Dunkirk-2017-Advance-Style-Poster-buy-original-movie-posters-at-starstills__51424.1496229224.jpg?c=2?imbypass=on',
  },
  {
    id: 4,
    duration: '2.31',
    desc: '...',
    title: 'inception',
    date: 2012,
    country: 'Denmark',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_60ZCWthGY0B4C8qMNDj8U-ll-aPgMAUYg&usqp=CAU',
  },
  {
    id: 5,
    duration: '2.31',
    desc: '...',
    title: 'inception',
    date: 2012,
    country: 'Denmark',
    img: 'https://assets.mubicdn.net/images/notebook/post_images/19893/images-w1400.jpg?1449196747',
  },
  {
    id: 6,
    duration: '2.31',
    desc: '...',
    title: 'inception',
    date: 2012,
    country: 'Denmark',
    img: 'https://www.joblo.com/assets/images/oldsite/posters/images/full/logan-poster-sunset-2_thumb.jpg',
  },
  {
    id: 7,
    duration: '2.31',
    desc: '...',
    title: 'inception',
    date: 2012,
    country: 'Denmark',
    img: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2',
  },
  {
    id: 8,
    duration: '1,58',
    desc: '...',
    title: 'inception',
    date: 2019,
    country: 'US',
    img: 'https://etcanada.com/wp-content/uploads/2018/05/dr-seuss-the-grinch-grc_adv1sheet_grinchface_rgb_2_rgb.jpg?quality=80&strip=all&w=605',
  },
  {
    id: 9,
    duration: '1,58',
    desc: '...',
    title: 'inception',
    date: 2019,
    country: 'US',
    img: 'https://cdn.shopify.com/s/files/1/1057/4964/products/the-craft-vintage-movie-poster-original-1-sheet-27x41.jpg?v=1593378233',
  },
  {
    id: 10,
    duration: '1,58',
    desc: '...',
    title: 'inception',
    date: 2019,
    country: 'US',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NsUkIk_MNLD8u8I0RbLuWFoQpkHUOVPAGg&usqp=CAU',
  },
  {
    id: 11,
    duration: '1,58',
    desc: '...',
    title: 'inception',
    date: 2019,
    country: 'US',
    img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289',
  },
  {
    id: 12,
    duration: '1,58',
    desc: '...',
    title: 'inception',
    date: 2019,
    country: 'US',
    img: 'https://assets.mubicdn.net/images/notebook/post_images/17514/images-w1400.jpg?1418357012',
  },
  {
    id: 13,
    duration: '1,58',
    desc: '...',
    title: 'inception',
    date: 2019,
    country: 'US',
    img: 'https://d2kektcjb0ajja.cloudfront.net/images/assets/images/000/000/196/medium-1466556840-160617_TomaszOpasinskiMoviePosterDesignTips_Oblivion.jpg?1466556840',
  },
  {
    id: 14,
    duration: '1,58',
    desc: '...',
    title: 'inception',
    date: 2019,
    country: 'US',
    img: 'https://pbs.twimg.com/profile_images/452673604094664704/GB8t_Aqk.jpeg',
  },
]

const Movies = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
      console.log('windowwidth', windowWidth)
      console.log(1200 > window.innerWidth)
    })
  })

  return (
    <div className={classes['movies-menu']}>
      {DATA.map(movie => {
        return (
          <MovieItem
            key={movie.id}
            desc={movie.desc}
            image={movie.img}
            date={movie.date}
            title={movie.title}
            country={movie.country}
            duration={movie.duration}
            leftPosition={classes['left-position']}
            rightPosition={classes['right-position']}
          />
        )
      })}
    </div>
  )
}

export default Movies
