import React from 'react'
import classnames from 'classnames'

const Button = (props) => {
  const {
    name = '',
    onClick = () => {},
    rootStyles = {},
    children = null,
    variant = 'contained',
    disabled,
    className,
    link = false,
    href = '',
    target = '_blank',
    title = '',
    showLoading = false
  } = props

  let btnTypeClass = ''

  switch (variant) {
    case 'contained':
      btnTypeClass = 'button-contained'
      break
    case 'contained-split':
      btnTypeClass = 'button-contained button-split'
      break
    case 'outlined':
      btnTypeClass = 'button-outlined'
      break
    case 'outlined-light':
      btnTypeClass = 'button-outlined-light'
      break
    case 'flat':
      btnTypeClass = 'button-flat'
      break
    case 'icon':
      btnTypeClass = 'button-icon'
      break
    default:
      btnTypeClass = 'button-contained'
  }

  const disabledClass = disabled ? 'disabled' : ''

  if (link || variant === 'link') {
    return (
      <a
        name={name}
        href={href}
        className={
          classnames(
            'button',
            'button-link',
            disabledClass,
            showLoading ? 'button-loading' : '',
            className
          )
        }
        style={{ ...rootStyles }}
        target={target}
        rel="noopener noreferrer"
        title={title}
        onClick={onClick}
      >
        {!showLoading && children}
      </a>
    )
  }

  return (
    <button
      name={name}
      onClick={onClick}
      className={
        classnames(
          'button',
          btnTypeClass,
          disabledClass,
          showLoading ? 'button-loading' : '',
          className
        )
      }
      style={{ ...rootStyles }}
      disabled={disabled || showLoading}
      title={title}
    >
      {!showLoading && children}
    </button>
  )
}

export default Button
