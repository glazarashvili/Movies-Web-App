import React from 'react'

import Template from '../../../UI/Template'

import { posterUrl } from '../../../service/index'

import PropTypes from 'prop-types'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 300,
    justifyContent: 'center',
    margin: '0 auto',
    marginBottom: '30px',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}))

const SimilarMovies = ({ similarMovies }) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Template className={classes.root}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        className={classes.tabs}>
        {similarMovies.map((movie, index) => {
          return (
            <Tab key={movie.id} label={movie.title} {...a11yProps(index)}></Tab>
          )
        })}
      </Tabs>
      {similarMovies.map((movie, index) => {
        return (
          <TabPanel key={movie.id} value={value} index={index}>
            <div>
              <img
                src={posterUrl + movie.poster_path}
                alt='similar-movie-img'
                style={{ width: '150px', height: '225px' }}
              />
            </div>
          </TabPanel>
        )
      })}
    </Template>
  )
}

export default SimilarMovies
