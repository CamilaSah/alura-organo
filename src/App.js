import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Nivel from './componentes/Nivel';

function App() {

  const niveis = [
    {
      nome: 'Rank A',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Rank B',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Rank C',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Rank D',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Rank E',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario niveis={niveis.map(nivel => nivel.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

      {niveis.map(nivel => <Nivel key={nivel.nome} nome={nivel.nome} corPrimaria={nivel.corPrimaria} corSecundaria={nivel.corSecundaria}/>)}

    </div>
  );
}

export default App;
