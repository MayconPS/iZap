import React, { useState } from "react";
import ListaDeMensagens from "./componets/ListaDeMensagens";
import EntradaDeMensagem from "./componets/EntradaDeMensagem";
import styled from "styled-components";

let img = require('./assets/fundoZap.jpg')

const AppStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  max-width: 600px;
  height: 92vh;
  margin: 0 auto;
  padding: 20px;
  background-image: url(${img});
  background-size: cover;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

function App() {
  const [mensagens, setMensagens] = useState([]);

  const handleEnviar = (remetente, conteudo) => {
    const novaMensagem = {
      remetente,
      conteudo,
    };
    setMensagens([...mensagens, novaMensagem]);
  };

  const handleDeletar = (index) => {
    const mensagensAtualizadas = [...mensagens];
    mensagensAtualizadas.splice(index, 1);
    setMensagens(mensagensAtualizadas);
  };
  return (
    <AppStyled>
      <ListaDeMensagens mensagens={mensagens} onDelete={handleDeletar} />
      <EntradaDeMensagem onEnviar={handleEnviar} />
    </AppStyled>
  );
}

export default App;
