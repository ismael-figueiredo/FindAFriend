import { Container, Select } from './styles'

export function SelectCity({ ...rest }) {
  return (
    <Container>
      <Select {...rest} />
    </Container>
  )
}
