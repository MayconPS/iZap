import React from 'react';
import Style from '../Style/Mensagem.module.css';

const Mensagem = ({ remetente, conteudo, onDelete }) => {

 

  const handleDelete = () => {
    onDelete();
  };

  let mensagemClasse = '';
  if (remetente.trim() === 'eu') {

    mensagemClasse = `${Style.mensagem} ${Style.mensagemDireita}`;
  } else {

    mensagemClasse = `${Style.mensagem} ${Style.mensagemEsquerda}`;
  }

  return (
    <div
      onDoubleClick={handleDelete}
      className={mensagemClasse}
    >
      <div className={Style.conteudoMensagem}>
      {remetente !== 'eu' && <strong>{remetente} </strong>}
      {conteudo}
      </div>
      
    </div>
  );
};

export default Mensagem;
