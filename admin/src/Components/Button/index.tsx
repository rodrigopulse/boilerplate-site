import React from 'react'
import { ButtonProps } from './types'
import './styles.scss'

export const Button: React.FC<ButtonProps> = ({ label, full }) => {
  const getClasses = () => {
    const classes = ['button']
    full && classes.push('button--full')
    return classes.join(' ')
  }
  return <button className={getClasses()}>{label}</button>
}
