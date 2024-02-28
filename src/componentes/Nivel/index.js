import Jogador from '../Jogador'
import './Nivel.css'

const Nivel = (props) => {
    const css = {backgroundColor: props.corSecundaria}

    return (
        (props.jogadores.length > 0) ? <section className='nivel' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador => <Jogador corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} pontos={jogador.pontos} imagem={jogador.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Nivel