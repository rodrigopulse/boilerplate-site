import React from 'react'
import './styles.scss'
import { AlertProps } from './types'

export const Alert: React.FC<AlertProps> = ({ show, type, message }) => {
  const getClasses = () => {
    const classes = ['alert']
    type === 'danger' && classes.push('background--danger', 'color--light')
    type === 'warning' && classes.push('background--warning', 'color--dark')
    type === 'success' && classes.push('background--success', 'color--light')
    return classes.join(' ')
  }
  return (
    <>
      {show && (
        <div className={getClasses()}>
          <span>{message}</span>
        </div>
      )}
    </>
  )
}
