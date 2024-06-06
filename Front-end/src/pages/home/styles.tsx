import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 1000px;
  padding: 3rem 7rem;
  overflow-y: auto;

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
    image {
      width: 37rem;
    }
  }
  footer {
    margin-top: 7.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .FirstSection {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2.125rem;
    }
    .SecondSection {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-right: 1.4rem;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.125rem;
      }
      div:first-of-type {
        margin-left: 0.7rem;
      }
      button:first-of-type {
        margin-left: 2rem;
      }
    }
  }
`
