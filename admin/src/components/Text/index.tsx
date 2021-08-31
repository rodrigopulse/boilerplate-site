import React from 'react'
import { TextProps } from './types'
import { ColorProps } from '../../types/Color.types'

import './styles.scss'

export const Text: React.FC<TextProps & ColorProps> = ({
  children,
  size,
  color
}) => {
  const getClasses = () => {
    const classes = ['text']
    size && classes.push(`text-size--${size}`)
    color && classes.push(`color--${color}`)
    return classes.join(' ')
  }
  return <span className={getClasses()}>{children}</span>
}

Text.defaultProps = {
  size: 'sm'
}
