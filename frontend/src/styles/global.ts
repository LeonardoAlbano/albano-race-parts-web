import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    background: rgb(1,72,113);
    background: linear-gradient(152deg, rgba(1,72,113,0.9556786703601108) 0%, rgba(215,239,226,1) 56%);
    background-repeat: no-repeat;
    min-height: 100vh;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 18px;
    font-weight: 500;

    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-family: "Dancing Script", cursive;
    font-size: 42px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.GREEN}; 
    text-shadow: rgba(168,207,69,1) 0px 0px 19px;
  }
  
`;


