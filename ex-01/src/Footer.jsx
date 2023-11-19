import wave from './imgs/wave.svg'


export default function Footer() {
    return (
        <footer>
            <nav className="nav-footer">
                <a>Destinos</a>
                <a>Ofertas</a>
                <a>Contato</a>
            </nav>
            <img src={wave} className='footer-wave'></img>
        </footer>
    )
}