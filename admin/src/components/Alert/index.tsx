import React from 'react'
import './styles.scss'
import { AlertProps } from './types'
import { Button } from '../'

export const Alert: React.FC<AlertProps> = ({ show, type, message }) => {
  const getClasses = () => {
    const classes = ['alert']
    type === 'danger' && classes.push('background--danger')
    type === 'warning' && classes.push('background--warning')
    type === 'success' && classes.push('background--success')
    return classes.join(' ')
  }
  return (
    <>
      {show && (
        <div className={getClasses()}>
          <span>{message}</span>
          <Button label="close" icon />
        </div>
      )}
    </>
  )
}
