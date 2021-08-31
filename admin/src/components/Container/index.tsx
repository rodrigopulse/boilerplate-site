import React from 'react'
import './styles.scss'
import { ContainerProps } from './types'
import { ColorProps } from '../../types/Color.types'

export const Container: React.FC<ContainerProps & ColorProps> = ({
  children,
  justify,
  align,
  direction,
  full,
  background,
  content
}) => {
  const getClasses = () => {
    const classes = ['container']
    justify && classes.push(`justify--${justify}`)
    align && classes.push(`align--${align}`)
    direction && classes.push(`align--${direction}`)
    full && classes.push('container--full')
    background && classes.push(`background--${background}`)
    content && classes.push('container--content')
    return classes.join(' ')
  }
  return <div className={getClasses()}>{children}</div>
}

Container.defaultProps = {
  full: false,
  content: false
}
