import React, { useState } from "react";

import Style from '../Style/EntradaDeMensagens.module.css';

const EntradaDeMensagem = ({ onEnviar }) => {
  const [remetente, setRemetente] = useState("");
  const [conteudo, setConteudo] = useState("");

  const handleEnviar = () => {
    const remetenteFinal = remetente.trim() === "" ? "eu" : remetente;
    if (conteudo.trim() !== "") {
      onEnviar(remetenteFinal, conteudo);
      setRemetente("");
      setConteudo("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEnviar();
    }
  };

  return (
    <div className={Style.entrada}>
      <input className={Style.entradaRemetente}
        type="text"
        placeholder="Nome do remetente"
        value={remetente}
        onChange={(e) => setRemetente(e.target.value)}
      />
      <input
        className={Style.entradaMensagem}
        type="text"
        placeholder="Digite sua mensagem"
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className={Style.button} onClick={handleEnviar}>
        <i className="fa-solid fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default EntradaDeMensagem;
