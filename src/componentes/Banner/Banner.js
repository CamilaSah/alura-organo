import './Banner.css'

function Banner() {
    // JSX: é como o React lê o return e transforma em elementos do DOM
    return (
        //O que o React faz por debaixo dos panos é entender isso aqui e fazer o append no DOM
        <header className="banner"> 
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>
    )
}

//Seria equivalente a fazer isso no Javascript puro ou Vanilla Javascript:
//document.createElement('img')
//define o atributo src
//define o atributo alt

export default Banner