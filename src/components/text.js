import React from 'react'

export const Text = (props) => {
  let { value, onChange, onKeyPress } = props
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  )
}
