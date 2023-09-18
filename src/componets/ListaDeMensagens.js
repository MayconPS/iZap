import React from 'react';
import Mensagem from './Mensagem';

import Style from '../Style/ListaDeMensagens.module.css'

const ListaDeMensagens = ({ mensagens, onDelete }) => {
  return (
    <div className={Style.lista}>
      {mensagens.map((mensagem, index) => (
        <Mensagem
          key={index}
          remetente={mensagem.remetente}
          conteudo={mensagem.conteudo}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default ListaDeMensagens;
