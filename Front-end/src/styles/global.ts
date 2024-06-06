import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
     box-sizing: border-box;
  }
  body{

  
  }
  body, input,select, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.primary};
    &::-webkit-scrollbar {
    width: 9px; /* Largura da scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 6px; 
    border: 3px solid ${({ theme }) => theme.colors.white}; 
  }
  }
 `
