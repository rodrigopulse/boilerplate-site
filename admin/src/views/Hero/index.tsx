import React, { useState, useEffect } from 'react'
import { Container, Text, Input, Row, Button } from '../../components'
import { getHero, updateHero } from '../../services/hero'
import { AlertAction, LoadingAction } from '../../store/actions'
import { useDispatch } from 'react-redux'

const Hero: React.FC = () => {
  const dispatch = useDispatch()
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  useEffect(() => {
    onGetHero()
  }, [])
  const onGetHero = () => {
    dispatch(LoadingAction(true))
    getHero()
      .then((res) => {
        dispatch(LoadingAction(false))
        setId(res.data._id)
        setTitle(res.data.title)
      })
      .catch((err) => {
        dispatch(AlertAction(true, 'danger', err.data.message))
        dispatch(LoadingAction(false))
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(LoadingAction(true))
    updateHero({ _id: id, title: title })
      .then((res) => {
        dispatch(LoadingAction(false))
        if (res.status === 200) {
          onGetHero()
          dispatch(AlertAction(true, 'success', res.data.message))
        } else {
          dispatch(AlertAction(true, 'danger', res.data.message))
        }
      })
      .catch((err) => {
        dispatch(LoadingAction(false))
        dispatch(AlertAction(true, 'danger', err.data.message))
      })
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
