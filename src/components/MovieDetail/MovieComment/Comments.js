import React from 'react'
import MovieComment from './MovieComment'

import Wrapper from '../../../ui/Wrapper'
import classes from './Comments.module.css'

const Comments = ({ comms, avatar }) => {
  return (
    <Wrapper>
      {comms.length ? (
        comms.map(comm => {
          return (
            <MovieComment
              key={comm.id}
              avatar={avatar}
              author={comm.author}
              comment={comm.content}
            />
          )
        })
      ) : (
        <div className={classes['not-loaded']}>No Comments to load...</div>
      )}
    </Wrapper>
  )
}

export default Comments
