import React, { useState, useRef, useEffect } from 'react'
import { Button, Container, Row } from '../'
import Resizer from 'react-image-file-resizer'
import { CropImageProps } from './types'
import './styles.scss'

export const CropImage: React.FC<CropImageProps> = ({
  maxWidth,
  maxHeight,
  imageOut,
  imageIn
}) => {
  const inputImage = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<any>()

  useEffect(() => {
    typeof imageIn === 'string' &&
      setImage(`http://localhost:3333/images/${imageIn}`)
  }, [imageIn])

  const resizeFile = (file: any) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file.target.files[0],
        maxWidth,
        maxHeight,
        'jpeg',
        60,
        0,
        (uri) => {
          resolve(uri)
        },
        'file'
      )
    })
  const loadImage = (file: any) => {
    resizeFile(file).then((res) => {
      const resizedImage = URL.createObjectURL(res)
      setImage(resizedImage.toString())
      imageOut(res)
    })
  }

  return (
    <div
      className="crop-image"
      onClick={() => {
        if (inputImage.current) {
          inputImage.current.click()
        }
      }}
    >
      <Row>
        <label className="crop-image__label">Imagem Desktop</label>
        <div className="crop-image__image-canvas">
          {image ? <img src={image} alt="Preview" /> : 'Sem imagem'}
        </div>
      </Row>
      <Container justify="end">
        <input
          hidden
          type="file"
          ref={inputImage}
          onChange={(e) => {
            loadImage(e)
          }}
        />
      </Container>
    </div>
  )
}
