import React, { useState } from 'react';
import ListaDeMensagens from './componets/ListaDeMensagens';
import EntradaDeMensagem from './componets/EntradaDeMensagem';
import Style from './Style/App.module.css';

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
    <div className={Style.app}>
      <ListaDeMensagens mensagens={mensagens} onDelete={handleDeletar} />
      <EntradaDeMensagem onEnviar={handleEnviar} />
    </div>
  );
}

export default App;
