import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: '2px 0px',
    width: '200px',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

export default function ButtonSizes({ openModal, title }) {
  const classes = useStyles()

  return (
    <div onClick={openModal}>
      <Button
        variant='outlined'
        fullWidth={true}
        size='medium'
        color='primary'
        className={classes.margin}>
        {title}
      </Button>
    </div>
  )
}
