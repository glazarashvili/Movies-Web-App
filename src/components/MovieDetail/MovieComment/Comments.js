import React from 'react'
import MovieComment from './MovieComment'

import Wrapper from '../../../ui/Wrapper'

const Comments = ({ comms }) => {
  return (
    <Wrapper>
      {comms.map(comm => {
        return (
          <MovieComment
            key={comm.id}
            author={comm.author}
            comment={comm.content}
          />
        )
      })}
    </Wrapper>
  )
}

export default Comments
