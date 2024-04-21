'use client'
import style from './card.module.css'
import { FaMemory } from "react-icons/fa";
import { BsGpuCard } from "react-icons/bs";
import { TbCpu } from "react-icons/tb";
import Image from 'next/image';
import { Url } from '@/constants/request';

export default function Card({img, title, price, desc_cpu_card, desc_gpu_card, desc_ram_card}){
    console.log(title)
    return(
        <div className={style.background}>
            <div className={style.contain}>
                <div className={style.image}><Image fill src={Url.getImage(img)} alt="comp" /></div>
                <p className={style.name}>{title}</p>
                <p className={style.price}>&#x24;{price}</p>
                <hr className={style.line} />
                <div className={style.info_block}>
                    <div className={style.cpu}><TbCpu className={style.cpu_icon} /><p className={style.text_info}>{desc_cpu_card}</p></div>
                    <div className={style.gpu}><BsGpuCard className={style.gpu_icon} /><p className={style.text_info}>{desc_gpu_card}</p></div>
                    <div className={style.ram}><FaMemory className={style.ram_icon} /><p className={style.text_info}>{desc_ram_card}</p></div>
                </div>
            </div>
        </div>
    );
}
