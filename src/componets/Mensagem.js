import React, { useState } from 'react';
import Style from '../Style/Mensagem.module.css';

const Mensagem = ({ remetente, conteudo, onDelete }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleDelete = () => {
    onDelete();
  };

  let mensagemClasse = '';
  if (remetente.trim() === '') {
    // Se o remetente estiver vazio, mensagem à direita
    mensagemClasse = `${Style.mensagem} ${Style.mensagemDireita}`;
  } else {
    // Se o remetente estiver preenchido, mensagem à esquerda
    mensagemClasse = `${Style.mensagem} ${Style.mensagemEsquerda}`;
  }

  return (
    <div
      onDoubleClick={handleDelete}
      className={mensagemClasse}
    >
      {remetente !== 'eu' && <strong>{remetente}: </strong>}
      {conteudo}
      <span className="botao-deletar" onClick={handleDelete}>
        &#10060;
      </span>
    </div>
  );
};

export default Mensagem;
