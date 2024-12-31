import { useState } from 'react';
import Form from './FormVagas.module';
import { Botao, Campo } from './FormVagas.module';

type Props = {
  aoPesquisar: (termo: string) => void;
};

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('');

  const aoEnviarForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Botao type="submit">Pesquisar</Botao>
    </Form>
  );
};

export default FormVagas;
