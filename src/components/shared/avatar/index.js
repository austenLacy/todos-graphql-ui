import React from 'react'
import initials from 'initials'

const DEFAULT_AVATAR = 'https://www.gravatar.com/avatar?f=y&d=mp'

const Avatar = ({
  srcUrl,
  rootStyles = {},
  imgStyles = {},
  imgProps = {},
  alt,
  rootClassname = '',
  imgClassName = '',
  initialsClassName = '',
  name = ''
}) => {
  return (
    <div
      className={`avatar ${rootClassname}`}
      style={rootStyles}
    >
      {
        srcUrl &&
        <img
          onError={(e)=>{ e.target.onerror = null; e.target.src=DEFAULT_AVATAR }}
          src={srcUrl}
          style={imgStyles}
          className={imgClassName}
          alt={alt || 'user_img'}
          {...imgProps}
        />
      }
      {
        !srcUrl &&
        <span className={`avatar-initials ${initialsClassName}`}>
          {initials(name)}
        </span>
      }
    </div>
  )
}

export default Avatar
