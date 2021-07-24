import React from 'react'
import Comment from './Comment'

import Wrapper from '../../../ui/Wrapper'
import classes from './Comments.module.css'

const Comments = ({ comms, avatar }) => {
  const [load, loadMore] = React.useState(false)

  return (
    <Wrapper>
      {comms.length ? (
        comms
          .map(comm => {
            return (
              <Comment
                key={comm.id}
                avatar={avatar}
                author={comm.author}
                comment={comm.content}
              />
            )
          })
          .slice(0, 5)
      ) : (
        <div className={classes['not-loaded']}>No Comments to load...</div>
      )}
    </Wrapper>
  )
}

export default Comments
