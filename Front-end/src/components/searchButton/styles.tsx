import styled from 'styled-components'

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  svg {
    width: 2rem;
    height: 2rem;
  }
`
