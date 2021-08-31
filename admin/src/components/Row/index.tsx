import React from 'react'
import { RowProps } from './types'
import './styles.scss'

export const Row: React.FC<RowProps> = ({ children, bottom }) => {
  const getClasses = () => {
    const classes = ['row']
    bottom && classes.push(`row-bottom--${bottom}`)
    return classes.join(' ')
  }
  return <div className={getClasses()}>{children}</div>
}

Row.defaultProps = {
  bottom: 'sm'
}
