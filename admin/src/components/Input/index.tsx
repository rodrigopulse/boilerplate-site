import React from 'react'
import './styles.scss'
import { InputProps } from './types'

export const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  onChange,
  label,
  value
}) => {
  const onChangeReturn = (e: any) => {
    let element = e.target.value
    if (!element) {
      element = ''
    }
    onChange(element)
  }
  return (
    <>
      {label && <label className="label">{label}</label>}
      <input
        className="input"
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => onChangeReturn(e)}
      />
    </>
  )
}
