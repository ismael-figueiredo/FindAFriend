import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17.5rem;
  height: 4.5rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.dangerDark};
  cursor: pointer;
`
export const Select = styled.select`
  background-color: transparent;
  border: none;
  outline: none;

  font-size: 1.25rem;
  font-weight: 800;
  line-height: 2.125rem;
  color: ${({ theme }) => theme.colors.white};
  option {
    color: ${({ theme }) => theme.colors.primary};
  }
`
