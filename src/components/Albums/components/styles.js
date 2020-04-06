import styled from 'styled-components'
import { Row as RFBRow } from 'react-flexbox-grid'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Row = styled(RFBRow)`
  max-width: 70vw;
`

export { Container, Row }