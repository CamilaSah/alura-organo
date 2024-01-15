import Jogador from '../Jogador'
import './Nivel.css'

const Nivel = (props) => {
    const css = {backgroundColor: props.corSecundaria}

    return (
        <section className='nivel' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <Jogador />
            <Jogador />
        </section>
    )
}

export default Nivel