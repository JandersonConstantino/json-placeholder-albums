import styled from 'styled-components'
import { Col as RFGCol } from 'react-flexbox-grid'

const Col = styled(RFGCol)`
  padding-top: 20px;
`

const Image = styled.img`
  &:hover {
    cursor: pointer;
  }
`

export { Col, Image }