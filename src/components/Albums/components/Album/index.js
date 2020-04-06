import React from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Label } from './styles'

const Album = ({ id, title }) => {
  const history = useHistory()

  const onClick = () => {
    history.push(`/album/${id}`)
  }

  return (
    <Col xs={3} onClick={onClick}>
      <Label>
        {title}
      </Label>
    </Col>
  )
}

export default Album
