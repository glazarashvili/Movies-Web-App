import React from 'react'
import Comment from './Comment'

import Template from '../../../ui/Template'
import classes from './Comments.module.css'
import CommentsFilter from './CommentsFilter'

import { posterUrl, defaultIcon } from '../../../service/index'

const Comments = ({ comms }) => {
  return (
    <Template className={classes['comments-menu']}>
      {comms.length ? (
        <section>
          <div className={classes['comments-header']}>
            <p>{comms.length} Comments</p>
            <CommentsFilter />
          </div>

          {comms.map(elem => {
            return (
              <Comment
                key={elem.id}
                avatar={
                  !elem.author_details.avatar_path
                    ? defaultIcon
                    : elem.author_details.avatar_path?.includes('http')
                    ? elem.author_details.avatar_path.slice(1)
                    : posterUrl + '/' + elem.author_details.avatar_path
                }
                author={elem.author}
                comment={elem.content}
                date={elem.created_at}
              />
            )
          })}
        </section>
      ) : (
        <section className={classes['not-loaded']}>
          No Comments to load...
        </section>
      )}
    </Template>
  )
}

export default Comments
