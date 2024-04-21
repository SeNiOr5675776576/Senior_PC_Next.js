import Link from 'next/link';
import style from './header.module.css'
import { PiBagBold } from "react-icons/pi";
import { PiUserSquareBold } from "react-icons/pi";
export default function Header(){
    return(
        <div className={style.block_content}>
            <Link className={style.logo} href={'/'}>SENIORPC</Link>
            <nav className={style.nav}>
                <Link href={''}>Компьютеры</Link>
                <Link href={'/periphery/monitors'}>Периферия</Link>
                <Link href={'/about/about_company'}>О нас</Link>
            </nav>
            <div className={style.bag_user}>
                <Link href={''} alt=''><PiBagBold className={style.icons} /></Link>
                <Link href={'/sign_in'} alt=''><PiUserSquareBold className={style.icons} /></Link>
            </div>
        </div>
    );
}