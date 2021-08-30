import React from 'react'
import './styles.scss'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { AlertAction } from '../../store/actions'
import { Button } from '../'

export const Alert: React.FC = () => {
  const alertState = useSelector((state: RootStateOrAny) => state.AlertReducer)
  const dispatch = useDispatch()
  const getClasses = () => {
    const classes = ['alert']
    alertState.alertType === 'danger' && classes.push('background--danger')
    alertState.alertType === 'warning' && classes.push('background--warning')
    alertState.alertType === 'success' && classes.push('background--success')
    return classes.join(' ')
  }
  const closeAlert = () => {
    dispatch(AlertAction(false, '', ''))
  }
  return (
    <>
      {alertState.show && (
        <div className={getClasses()} onClick={() => closeAlert()}>
          <span>{alertState.message}</span>
          <Button label="close" icon onClick={() => closeAlert()} />
        </div>
      )}
    </>
  )
}
