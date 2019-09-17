import React from 'react'
import classnames from 'classnames'
import Textarea from 'react-textarea-autosize'

const TextArea = (props) => {
  const {
    type = 'text',
    required = false,
    name = '',
    label = '',
    value = '',
    onChange = () => { },
    onFocus = () => { },
    rootStyles = {},
    className = '',
    disabled = false,
    readOnly = false,
    textAreaProps = {},
    textAreaClassName = '',
    placeholder = null,
    autoFocus = false,
    variant = 'bordered',
    maxRows = 10,
    minRows = 1,
    textAreaStyles = {}
  } = props

  const defaultTextAreaProps = {
    value,
    type,
    name,
    required,
    onChange,
    disabled,
    readOnly,
    onFocus,
    maxRows,
    minRows
  }

  const opts = {
    ...defaultTextAreaProps,
    ...textAreaProps
  }

  let textAreaStyle = 'bordered'

  if (variant === 'flat') {
    textAreaStyle = 'flat'
  }

  return (
    <div
      className={classnames('textarea-group', className)}
      style={{ ...rootStyles }}
    >
      <Textarea
        {...opts}
        className={classnames('textarea', textAreaStyle, textAreaClassName)}
        placeholder={`${label || placeholder}${required ? ' *' : ''}`}
        required={required}
        autoFocus={autoFocus}
        style={{ ...textAreaStyles }}
      />
    </div>
  )
}

export default TextArea
