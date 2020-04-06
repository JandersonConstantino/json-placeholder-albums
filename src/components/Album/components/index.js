import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Lightbox from 'react-image-lightbox'

import usePhotosFetcher from '../hooks/usePhotosFetcher'

import { Container, Row } from './styles'
import Photo from './Photo'

const Album = () => {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const { id } = useParams()
  const { photos } = usePhotosFetcher(id)

  const onClickPhoto = idx => {
    setIsOpen(true)
    setIndex(idx)
  }

  return (
    <Container>
      <Row>
        {photos.map((item, index) => (
          <Photo
            key={item.id}
            onClick={() => onClickPhoto(index)}
            {...item}
          />
        ))}
      </Row>
      {isOpen && (
        <Lightbox
          mainSrc={photos[index]?.url}
          nextSrc={photos[(index + 1) % photos.length]?.url}
          prevSrc={photos[(index + photos.length - 1) % photos.length]?.url}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setIndex((index + photos.length - 1) % photos.length)}
          onMoveNextRequest={() => setIndex((index + 1) % photos.length)}
        />
      )}
    </Container>
  )
}

export default Album
