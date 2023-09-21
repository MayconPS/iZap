import React from "react";
import styled from "styled-components";
import Mensagem from "./Mensagem";

const ListaDeMensagensStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  max-height: 100vh;
  width: 100%;
  justify-content: flex-start;
  height: 100%;
  padding: 8px;
  background-color: transparent;
  background-size: cover;
`;

const ListaDeMensagens = ({ mensagens, onDelete }) => {
  return (
    <ListaDeMensagensStyled>
      {mensagens.map((mensagem, index) => (
        <Mensagem
          key={index}
          remetente={mensagem.remetente}
          conteudo={mensagem.conteudo}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ListaDeMensagensStyled>
  );
};

export default ListaDeMensagens;
