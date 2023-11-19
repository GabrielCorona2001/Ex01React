import img from './imgs/img.svg'


export default function Body() {

    return (

        <div className='div-main'>
            <img src={img}></img>
            <h1 className='body-title'>O seu próximo  <span className='body-title-span'>destino</span> pode estar aqui...</h1>
            <div className='div-body-paragraph'>
                <p>Aqui você encontra uma seleção de <span className='span-grey'>pacotes completos </span>para as suas férias!</p>
                <p className='body-paragraph-mid'>No <span className='span-font-weight'>ConnectFlight</span> você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã,
                    e até seguro viagem com <span className='span-grey'>preços arrasadores!</span></p>
                <p>Se você ainda não tem um destino definido, confira nossa seção de ofertas.   </p>
            </div>
        </div>


    )
}