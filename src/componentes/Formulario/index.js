import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [pontos, setPontos] = useState('')
    const [imagem, setImagem] = useState('')
    const [nivel, setNivel] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nome: nome,
            pontos: pontos,
            imagem: imagem,
            nivel: nivel
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Pontos do Ranking" 
                    placeholder="Digite seus pontos do ranking"
                    valor={pontos}
                    aoAlterado={valor => setPontos(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Nível" 
                    itens={props.niveis}
                    valor={nivel}
                    aoAlterado={valor => setNivel(valor)}
                />
                <Botao>
                    Criar Card
                </Botao> 
            </form>
        </section>
    )
}

export default Formulario