import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';

function App({ title, edition }) {
  const navigate = useNavigate();
  const [ user, setUser ] = useState('BrunoSobralDev');
  const [ erro, setErro ] = useState(false);
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];

      repositories.forEach((repository) => {
        repositoriesName.push(repository.name);
      });
      
      localStorage.setItem('RepositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      navigate('/repositories');
    })
    .catch(err => {
      setErro(true);
    });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <h1>Hiring Coders #3</h1>
        <p>Usuário: { user }</p>
        <S.Input value={user} onChange={e => setUser(e.target.value)} className="userInput" placeholder="Usuário"/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente!</S.ErrorMsg> : '' }
      
    </S.HomeContainer>
  );
}

export default App;
