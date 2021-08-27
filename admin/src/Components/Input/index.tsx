import React from 'react'
import './styles.scss'
import {InputProps} from './types'

export const Input: React.FC<InputProps> = ({ placeholder, type, onChange }) => {
  const onChangeReturn = (e: any) => {
    let element = e.target.value
    if(!element) {
      element = ''
    }
    onChange(element)
  }
  return <input className='input' placeholder={ placeholder } type={ type } onChange={ (e) => onChangeReturn(e) } />
}
