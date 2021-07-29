// import React from 'react'
// import PropTypes from 'prop-types'
// import { makeStyles } from '@material-ui/core/styles'
// import AppBar from '@material-ui/core/AppBar'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
// import Typography from '@material-ui/core/Typography'
// import Box from '@material-ui/core/Box'

// import Template from '../../../UI/Template'

// import { posterUrl } from '../../../service/index'

// function TabPanel(props) {
//   const { children, value, index, ...other } = props

//   return (
//     <div
//       role='tabpanel'
//       hidden={value !== index}
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}>
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   )
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// }

// function a11yProps(index) {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     'aria-controls': `scrollable-auto-tabpanel-${index}`,
//   }
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     marginBottom: '20px',
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     justifyContent: 'center',
//     margin: '0 auto',
//   },
// }))

// export default function SimilarMovies({ similarMovies }) {
//   const classes = useStyles()
//   const [value, setValue] = React.useState(0)

//   const handleChange = (event, newValue) => {
//     setValue(newValue)
//   }

//   return (
//     <Template className={classes.root}>
//       <AppBar position='static' color='default'>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor='primary'
//           textColor='primary'
//           variant='scrollable'
//           scrollButtons='auto'
//           aria-label='scrollable auto tabs example'>
//           {similarMovies.map((movie, index) => {
//             return (
//               <Tab
//                 key={movie.id}
//                 label={movie.title}
//                 {...a11yProps(index)}></Tab>
//             )
//           })}
//         </Tabs>
//       </AppBar>
//       {similarMovies.map((movie, index) => {
//         return (
//           <TabPanel key={movie.id} value={value} index={index}>
//             <Template>
//               <div style={{ display: 'flex', paddingLeft: '0px' }}>
//                 <img
//                   src={posterUrl + movie.poster_path}
//                   alt='similar-movie-img'
//                   style={{ width: '200px', height: '300px' }}
//                 />
//                 <div>FIlm</div>
//               </div>
//             </Template>
//           </TabPanel>
//         )
//       })}
//     </Template>
//   )
// }

import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Template from '../../../UI/Template'

import { posterUrl } from '../../../service/index'

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

export default function SimilarMovies({ similarMovies }) {
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
