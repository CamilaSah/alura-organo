import './Jogador.css'

const Jogador = ({nome, pontos, imagem, corDeFundo}) => {
    return (
        <div className='jogador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{pontos}</h5>
            </div>
        </div>
    )
}

export default Jogador
