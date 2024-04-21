'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import style from './main.module.css'
import Slider from '../../component/slider_card/page'
import Image from 'next/image';
import { PiShieldCheckBold } from "react-icons/pi";
import { MdCheck } from "react-icons/md";
import { PiGiftBold } from "react-icons/pi";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { PiFadersBold } from "react-icons/pi";
import { PiGearBold } from "react-icons/pi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiMapTrifoldBold } from "react-icons/pi";
import { MdOutlineMap } from "react-icons/md";
import { PiAlarmBold } from "react-icons/pi";
import { PiAlarm } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";
import { PiHeadsetBold } from "react-icons/pi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { PiStickerBold } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";

import logo_company from '../../../public/logo_company.svg';

export default function home() {
  function clickHandler(){
    document.getElementById('advantages').scrollIntoView({behavior:'smooth', block:'start'})
  }
  return (
    <div className={style.main}>
      <div className={style.slider}>
        <Slider/>
      </div>
      <div onClick={()=>{clickHandler()}} className={style.arrow_down}><HiChevronDown /></div>
      <h1 id='advantages' className={style.nameblock_advantages}>Advantages</h1>
      <div className={style.container_advantages}>
        <div className={style.top_row}>
          <div className={style.block_top}>
            <PiShieldCheckBold className='text-7xl mb-1' />
            <p className={style.text_block_advantages}>Гарантия</p>
          </div>
          <div className={style.line_vertical}></div>
          <div className={style.block_top}>
            <PiGiftBold className='text-7xl mb-1' />
            <p className={style.text_block_advantages}>Подарки</p>
          </div>
          <div className={style.line_vertical}></div>
          <div className={style.block_top}>
            <PiFadersBold className='text-7xl mb-1' />
            <p className={style.text_block_advantages}>Кастомизация</p>
          </div>
          <div className={style.line_vertical}></div>
          <div className={style.block_top}>
            <PiMapTrifoldBold className='text-7xl mb-1' />
            <p className={style.text_block_advantages}>СНГ</p>
          </div>
        </div>
        <div className={style.line_horizontal}></div>
        <div className={style.bottom_row}>
          <div className={style.block_bottom}>
            <PiAlarmBold className='text-7xl mb-1' />
            <p className={style.text_block_advantages}>Быстро</p>
          </div>
          <div className={style.line_vertical}></div>
          <div className={style.block_bottom}>
            <PiHeadsetBold className='text-7xl mb-1' />
            <p className={style.text_block_advantages}>Поддержка</p>
          </div>
          <div className={style.line_vertical}></div>
          <div className={style.block_bottom}>
            <PiStickerBold className='text-7xl mb-1' />
            <p className={style.text_block_advantages}>Стикеры</p>
          </div>
        </div>
      </div>
      <div className={style.container_logo_company}>
          <Image src={logo_company} className={style.logo_company}></Image>
      </div>
    </div>
  );
}
