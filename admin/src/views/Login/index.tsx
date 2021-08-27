import React, { useState } from 'react'
import { Container, Input, Button } from '../../Components'
import './styles.scss'

const Login: React.FC = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container full justify="center" align="center" background="secondary">
      <div className="login__content">
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
        <Button label="Entrar" full />
      </div>
    </Container>
  )
}

export default Login
