import React from 'react'
import classnames from 'classnames'

const TextInput = (props) => {
  const {
    type = 'text',
    required = false,
    name = '',
    label = '',
    value = '',
    onChange = () => {},
    onFocus = () => {},
    onBlur = () => {},
    rootStyles = {},
    autoComplete = 'off',
    disabled = false,
    inputProps = {},
    inputGroupClassName = '',
    inputClassName = '',
    placeholder = null,
    autoFocus = false,
    variant = 'bordered',
    inputRef = null,
    validateFn = undefined,
    validityErrorMessage = null,
    showValidation = false
  } = props

  let inputType = 'bordered'

  if (variant === 'flat') {
    inputType = 'flat'
  }

  let validityClass = ''
  let isInvalid = false

  if (showValidation && validateFn && !validateFn(value)) {
    validityClass = 'invalid'
    isInvalid = true
  }

  const defaultInputOpts = {
    value: value || '',
    type,
    name,
    required,
    onChange,
    autoComplete,
    disabled,
    onFocus,
    onBlur
  }

  const mergedOpts = {
    ...defaultInputOpts,
    ...inputProps
  }

  return (
    <div
      className={`input-group ${inputGroupClassName}`}
      style={{ ...rootStyles }}
    >
      <input
        {...mergedOpts}
        className={classnames('input', inputType, inputClassName, validityClass)}
        placeholder={`${label || placeholder}${required ? ' *' : ''}`}
        required={required}
        autoFocus={autoFocus}
        ref={inputRef}
      />
      {
        isInvalid && validityErrorMessage && showValidation &&
        <span className="validity-error-message">
          {validityErrorMessage}
        </span>
      }
    </div>
  )
}

export default TextInput
