import React from 'react'
import './styles.scss'
import { useSelector, RootStateOrAny } from 'react-redux'

export const Loading: React.FC = () => {
  const loadingState = useSelector(
    (state: RootStateOrAny) => state.LoadingReducer
  )
  return (
    <>
      {loadingState.show && (
        <div className="loading">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  )
}
