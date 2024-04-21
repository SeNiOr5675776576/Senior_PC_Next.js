import { Url } from '@/constants/request';
import style from './card.module.css'
import Image from 'next/image';

export default function CardPeriphery({periphery}){
    const state = periphery.state
    const available = state == 1 ? 'available': undefined
    const onRequest = state == 2 ? 'on request': undefined
    const unavailable = state == 3 ? 'unavailable': undefined
    return(
        <div className={style.background}>
            <div className={style.block}>
                <img className={style.img} width={380} height={100}  src={Url.getImage(periphery.image.data[0].attributes.url)} alt=''/>
                <div className={style.bottom_block}>
                    <span>
                        <h3 className={style.title}>{periphery.title}</h3>
                        <p className={state == 1 && style.state || state == 2 && style.state2 || state == 3 && style.state3}>{available || onRequest || unavailable}</p>
                    </span>
                    <span className={style.bottom_part}>
                        <p className={style.price}>Price &#x24;{periphery.price}</p>
                        <span className={style.block_button}><button className={style.button_buy}>Buy</button></span>
                    </span>
                </div>
            </div>
        </div>
    );
}