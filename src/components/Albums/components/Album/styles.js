import styled from 'styled-components'
import { Col as RFGCol } from 'react-flexbox-grid'

const Col = styled(RFGCol)`
  border: 1px solid #CCC;
  padding: 20px;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3)
  }
`

const Label = styled.label`
  color: #CCC;
`

export {
  Col,
  Label
}