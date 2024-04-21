import Link from 'next/link';
import style from './main.module.css'

export default function Layout({children, params}){
    console.log(params)
    return(
        <div className={style.main}>
            <div className={style.top_block}>
                <Link className={params.category=='monitors' ? style.nav_active : style.nav_button} href={'/periphery/monitors'}>Monitor</Link>
                <span>/</span>
                <Link className={params.category=='mouse' ? style.nav_active : style.nav_button} href={'/periphery/mouse'}>Mouse</Link>
                <span>/</span>
                <Link className={params.category=='keyboard' ? style.nav_active : style.nav_button} href={'/periphery/keyboard'}>Keyboard</Link>
                <span>/</span>
                <Link className={params.category=='mat' ? style.nav_active : style.nav_button} href={'/periphery/mat'}>Mat</Link>
                <span>/</span>
                <Link className={params.category=='headphones' ? style.nav_active : style.nav_button} href={'/periphery/headphones'}>Headphones</Link>
                <span>/</span>
                <Link className={params.category=='microphone' ? style.nav_active : style.nav_button} href={'/periphery/microphone'}>Microphone</Link>
                <span>/</span>
                <Link className={params.category=='chair' ? style.nav_active : style.nav_button} href={'/periphery/chair'}>Chair</Link>
            </div>
            {children}
        </div>
    );
}