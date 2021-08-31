import React, { useState } from 'react'
import { Container, Input, Button } from '../../components'
import { useDispatch } from 'react-redux'
import { AlertAction, UserAction } from '../../store/actions'
import './styles.scss'
import { useHistory } from 'react-router-dom'

// Api
import { LoginService } from '../../services/auth'

const Login: React.FC = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const dispatch = useDispatch()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    LoginService({ email: user, password: password }).then((res) => {
      if (res.status === 200) {
        dispatch(UserAction(true, '', ''))
        localStorage.setItem('token', res.data.token)
        history.push('/')
      } else {
        dispatch(AlertAction(true, 'danger', 'Usuário e/ou senha incorretos'))
      }
    })
  }

  return (
    <Container full justify="center" align="center" background="secondary">
      <div className="login__content">
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            handleSubmit(e)
          }}
        >
          <Input
            placeholder="Usuário"
            onChange={(e) => setUser(e)}
            value={user}
            type="text"
          />
          <Input
            placeholder="Senha"
            onChange={(e) => setPassword(e)}
            value={password}
            type="password"
          />
          <Button label="Entrar" type="submit" full />
        </form>
      </div>
    </Container>
  )
}

export default Login
