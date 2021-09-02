import React, { useState, useRef } from 'react'
import { Button, Container, Row } from '../'
import Resizer from 'react-image-file-resizer'
import { CropImageProps } from './types'
import './styles.scss'

export const CropImage: React.FC<CropImageProps> = ({
  maxWidth,
  maxHeight,
  imageOut
}) => {
  const inputImage = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<any>()

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
      setImage(res)
      imageOut(res)
    })
  }

  return (
    <div className="crop-image">
      <Row>
        <label className="crop-image__label">Imagem Desktop</label>
        <div className="crop-image__image-canvas">
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Preview" />
          ) : (
            'Sem imagem'
          )}
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
        <Button
          label="Trocar Imagem"
          onClick={() => {
            if (inputImage.current) {
              inputImage.current.click()
            }
          }}
        />
      </Container>
    </div>
  )
}
