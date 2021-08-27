import React, { useState } from 'react'
import { Container, Input } from '../../Components'
import './styles.scss'

const Login: React.FC = () => {
  const [ user, setUser ] = useState('')
  const [ password, setPassword ] = useState('')
  return (
    <Container full justify="center" align="center" background="secondary">
      <div className="login__content">
        <Input placeholder="Usuário" onChange={ (e) => setUser(e) } value={ user } />
        <Input placeholder="Senha" onChange={ (e) => setPassword(e) } value={ password }/>
      </div>
    </Container>
  )
}

export default Login
