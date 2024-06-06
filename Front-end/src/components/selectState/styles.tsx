import styled from 'styled-components'

export const Select = styled.select`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1.25rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.125rem;
  padding-left: 0.5rem;
  outline: none;
  option {
    color: ${({ theme }) => theme.colors.primary};
  }
`
