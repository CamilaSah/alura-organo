import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer_redes-sociais'>
                <a href='https://www.facebook.com' rel='noreferrer' target='_blank'>
                    <img src='/imagens/fb.png' alt='Logo Facebook'/>
                </a>
                <a href='https://www.twitter.com' rel='noreferrer' target='_blank'>
                    <img src='imagens/tw.png' alt='Logo Twitter'/>
                </a>
                <a href='https://www.instagram.com' rel='noreferrer' target='_blank'>
                    <img src='/imagens/ig.png' alt='Logo Instagram'/>
                </a>
            </div>
            <div className='footer_logo'>
                <img src='/imagens/logo.png'alt='Logo organo'/>
            </div>
            <div className='footer_autor'>
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}

export default Footer