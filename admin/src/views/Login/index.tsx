import React, { useState } from 'react'
import { Container, Input, Button } from '../../Components'
import './styles.scss'

const Login: React.FC = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(e)
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
