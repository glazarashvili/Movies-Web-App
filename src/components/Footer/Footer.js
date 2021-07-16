import React from 'react'

import classes from './Footer.module.css'

import igSvg from '../../assets/svg/ig.svg'
import fbSvg from '../../assets/svg/facebook.svg'
import twitterSvg from '../../assets/svg/twitter.svg'

const Footer = () => {
  return (
    <footer className={classes['footer-container']}>
      <div>
        <img className={classes['footer-img']} src={twitterSvg} alt='fb logo' />
        <img className={classes['footer-img']} src={fbSvg} alt='fb logo' />
        <img className={classes['footer-img']} src={igSvg} alt='ig logo' />
      </div>
      <p className={classes.content}>
        2021 © Design by <span>GL</span>
      </p>
    </footer>
  )
}

export default Footer
