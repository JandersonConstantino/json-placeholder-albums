import React from 'react'
import Album from './Album'
import { Container, Row } from './styles'

import useAlbumsFetcher from '../hooks/useAlbumsFetcher'

const Albums = () => {
  const { albums } = useAlbumsFetcher()

  return (
    <Container>
      <Row>
        {albums.map(item => <Album key={item.id} {...item} />)}
      </Row>
    </Container>
  )
}

export default Albums
