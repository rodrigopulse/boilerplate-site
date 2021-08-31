import React, { useState, useEffect } from 'react'
import { Container, Text, Input, Row, Button } from '../../components'
import { getHero } from '../../services/hero'

const Hero = () => {
  const [title, setTitle] = useState('')
  useEffect(() => {
    getHero().then((res) => {
      setTitle(res.data.title)
    })
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Container content>
      <Row bottom="lg">
        <Text size="lg" color="primary">
          Hero
        </Text>
      </Row>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          handleSubmit(e)
        }}
      >
        <Row>
          <Input
            label="Título"
            value={title}
            placeholder="Adicione o título para o hero"
            onChange={(e) => {
              setTitle(e)
            }}
          />
        </Row>
        <Container justify="center">
          <Button label="Salvar" type="submit" />
        </Container>
      </form>
    </Container>
  )
}

export default Hero
