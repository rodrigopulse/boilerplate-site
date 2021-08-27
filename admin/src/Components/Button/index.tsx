import React from 'react'
import { ButtonProps } from './types'
import './styles.scss'

export const Button: React.FC<ButtonProps> = ({ label, full, onClick }) => {
  const getClasses = () => {
    const classes = ['button']
    full && classes.push('button--full')
    return classes.join(' ')
  }
  return (
    <button className={getClasses()} onClick={(e) => onClick && onClick(e)}>
      {label}
    </button>
  )
}
