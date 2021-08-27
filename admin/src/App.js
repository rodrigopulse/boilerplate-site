import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'

// Views
import Login from './views/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
