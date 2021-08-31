import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import './App.scss'
import { Alert } from './components'
import { Token } from './services/auth'
import { UserAction } from './store/actions'

// Views
import Login from './views/Login'
import Home from './views/Home'

const App = () => {
  const [loading, setLoading] = useState(true)
  const userState = useSelector((state: RootStateOrAny) => state.UserReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token')
    Token({
      token: token
    }).then((res) => {
      if (res.status === 200) {
        setLoading(false)
        dispatch(UserAction(true, '', ''))
      } else {
        setLoading(false)
        dispatch(UserAction(false, '', ''))
      }
    })
  }, [])

  return (
    <Router>
      <Alert />
      {!loading && userState.logged && (
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      )}
      {!loading && !userState.logged && (
        <Route path="/">
          <Login />
        </Route>
      )}
    </Router>
  )
}

export default App
