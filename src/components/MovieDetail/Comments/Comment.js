import React, { createElement, useState } from 'react'
import { Comment as Comm, Tooltip, Avatar } from 'antd'
import moment from 'moment'
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons'

import classes from './Comment.module.css'

const Comment = ({ author, comment, avatar, date }) => {
  const [likes, setLikes] = useState(0)
  const [action, setAction] = useState(null)
  const [dislikes, setDislikes] = useState(0)
  const [readMore, setReadMore] = useState(false)

  const like = () => {
    setLikes(1)
    setDislikes(0)
    setAction('liked')
  }

  const dislike = () => {
    setLikes(0)
    setDislikes(1)
    setAction('disliked')
  }

  const actions = [
    <Tooltip key='comment-basic-like' title='Like'>
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className={classes['comment-action']}>{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key='comment-basic-dislike' title='Dislike'>
      <span onClick={dislike}>
        {React.createElement(
          action === 'disliked' ? DislikeFilled : DislikeOutlined
        )}
        <span className={classes['comment-action']}>{dislikes}</span>
      </span>
    </Tooltip>,
    <span key='comment-basic-reply-to'>Reply to</span>,
  ]

  return (
    <Comm
      className={classes.comment}
      actions={actions}
      author={<p>{author}</p>}
      avatar={<Avatar src={avatar} alt='avatar' />}
      content={
        <div>
          <p className={classes['comment-content']}>
            {readMore ? comment : `${comment.substring(0, 500)}...`}
            {comment.length > 300 && (
              <span onClick={() => setReadMore(!readMore)}>
                {readMore ? 'Show less' : 'Show more'}
              </span>
            )}
          </p>
        </div>
      }
      datetime={
        <Tooltip title={moment().format(date)}>
          <span style={{ color: '#419DD6' }}>{date.slice(0, 10)}</span>
        </Tooltip>
      }
    />
  )
}

export default Comment
