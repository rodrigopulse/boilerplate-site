import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import { Alert } from './components'

// Views
import Login from './views/Login'

const App: React.FC = () => {
  return (
    <Router>
      <Alert />
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
