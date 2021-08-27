import React from 'react'
import {InputProps} from './types'

export const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <input placeholder={placeholder} />
}
