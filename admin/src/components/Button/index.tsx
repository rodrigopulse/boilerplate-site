import React from 'react'
import { ButtonProps } from './types'
import { ColorProps } from '../../types/Color.types'
import './styles.scss'

export const Button: React.FC<ButtonProps & ColorProps> = ({
  label,
  full,
  icon,
  onClick,
  color
}) => {
  const getClasses = () => {
    const classes = ['button']
    full && classes.push('button--full')
    if (icon) {
      classes.pop()
      classes.push('button material-icons')
    }
    color && classes.push(`color color--${color}`)
    return classes.join(' ')
  }
  return (
    <button className={getClasses()} onClick={(e) => onClick && onClick(e)}>
      {label}
    </button>
  )
}

Button.defaultProps = {
  color: 'dark'
}
