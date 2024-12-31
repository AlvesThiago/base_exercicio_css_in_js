import styled from 'styled-components'

// Use `React.ComponentPropsWithoutRef` para propagar todas as propriedades do elemento <form>
const Form = styled.form.attrs(() => ({}))<
  React.ComponentPropsWithoutRef<'form'>
>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export default Form

type BotaoProps = {
  onClick?: () => void
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export const Botao = styled.button<BotaoProps>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    text-align: center;
  }
`

type CampoProps = {
  placeholder?: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Campo = styled.input<CampoProps>`
  border: 1px solid var(--cor-principal);
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
`
