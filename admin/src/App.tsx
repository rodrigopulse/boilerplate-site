import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'

import { Token } from './services/auth'
import { UserAction } from './store/actions'

//Components
import { Alert, Loading } from './components'

// Views
import Login from './views/Login'
import Home from './views/Home'
import Hero from './views/Hero'

// TemplateParts
import { Sidebar } from './templateParts'

const App = () => {
  // Loading apenas para verificar se está logado, ele não interfere o component
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
      <Loading />
      {!loading && userState.logged && (
        <>
          <Sidebar />
          <Switch>
            <Route path="/hero">
              <Hero />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </>
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
