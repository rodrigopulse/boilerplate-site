import React, { useState, useEffect } from 'react'
import {
  Container,
  Text,
  Input,
  Row,
  Button,
  CropImage
} from '../../components'
import { getHero, updateHero } from '../../services/hero'
import { AlertAction, LoadingAction } from '../../store/actions'
import { useDispatch } from 'react-redux'

const Hero: React.FC = () => {
  const dispatch = useDispatch()
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [heroDesktop, setHeroDesktop] = useState('')
  useEffect(() => {
    onGetHero()
  }, [])
  const onGetHero = () => {
    dispatch(LoadingAction(true))
    getHero()
      .then((res) => {
        console.log(res)
        dispatch(LoadingAction(false))
        setId(res.data._id)
        setTitle(res.data.title)
      })
      .catch((err) => {
        dispatch(AlertAction(true, 'danger', 'erro'))
        dispatch(LoadingAction(false))
      })
  }
  const handleSubmit = () => {
    dispatch(LoadingAction(true))
    const data = new FormData()
    data.append('_id', id)
    data.append('title', title)
    data.append('heroDesktop', heroDesktop)
    updateHero(data)
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
        dispatch(AlertAction(true, 'danger', 'erro'))
      })
  }
  return (
    <Container content>
      <Row bottom="lg">
        <Text size="lg" color="primary">
          Hero
        </Text>
      </Row>
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
      <Row>
        <CropImage
          maxWidth={640}
          maxHeight={640}
          imageOut={(e) => {
            setHeroDesktop(e)
          }}
        />
      </Row>
      <Container justify="center">
        <Button label="Salvar" onClick={() => handleSubmit()} />
      </Container>
    </Container>
  )
}

export default Hero
