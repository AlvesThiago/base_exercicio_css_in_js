import { createGlobalStyle } from 'styled-components'
import type { Theme } from './themes/light'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --cor-principal: ${(props) => (props.theme as Theme).corPrincipal};
    --cor-secundaria: ${(props) => (props.theme as Theme).corSecundaria};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
    background-color:  ${(props) => (props.theme as Theme).corDeFundo};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }
`

type BotaoProps = {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

export const Botao = styled.button<BotaoProps>`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`;

export default GlobalStyle
