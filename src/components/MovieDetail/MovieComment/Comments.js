import React from 'react'
import MovieComment from './MovieComment'

import Wrapper from '../../../ui/Wrapper'

const Comments = ({ comms, avatar }) => {
  return (
    <Wrapper>
      {comms.map(comm => {
        return (
          <MovieComment
            key={comm.id}
            author={comm.author}
            comment={comm.content}
            avatar={avatar}
          />
        )
      })}
    </Wrapper>
  )
}

export default Comments
