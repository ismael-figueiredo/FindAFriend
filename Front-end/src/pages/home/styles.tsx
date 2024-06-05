import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 7rem;

  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};

  header {
  }

  main {
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 4.5rem;
      font-style: normal;
      font-weight: 800;
      line-height: 90%;
      letter-spacing: -0.09rem;
      text-align: left;
      max-width: 30rem;
      align-self: end;
    }
  }
`
