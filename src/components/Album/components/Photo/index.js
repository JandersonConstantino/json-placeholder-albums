import React from 'react'
import { Col, Image } from './styles'

const Photo = ({ thumbnailUrl, onClick }) => (
  <Col xs={3}>
    <Image src={thumbnailUrl} alt="" onClick={onClick} />
  </Col>
)

export default Photo
