'use client'
import style from './user.module.css'
import { PiEnvelope } from "react-icons/pi";
import { PiLockBold } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { Url } from '@/constants/request';
import axios from 'axios';
import { SignUp } from './sign';

export default function User(){
    const query = useQuery({ queryKey: ['background_up'], queryFn: async () => {
        const req = await axios.get(Url.getDataBackground)
        const arr = req?.data?.data
        const idx = Math.floor(Math.random() * arr?.length)
        const img = arr[idx]?.attributes?.Image?.data?.attributes?.url
        return img
    }, retry: 3 })
    const [input, setInput] = useState(false)
    return(
        <div className={style.main}>
            {query?.data && <Image fill src={Url.getImage(query?.data)}/>}
            <div className={style.background}>
                <form action={SignUp} className={style.block_authorization}>
                    <h1 className={style.text_h1}>Авторизация</h1>
                    <div class="relative w-full">
                        <input type="email" className={style.input + " peer"} placeholder="Введите электронную почту" required/>
                        <div className={style.input_icon}>
                            <PiEnvelope className="text-2xl text-white"/>
                        </div>
                    </div>
                    <div class="relative w-full">
                        <input type={input ? 'text' : 'password'} className={style.input + " peer"} placeholder="Введите пароль" required/>
                        <div className={style.input_icon}>
                            <PiLockBold className="text-2xl text-white"/>
                        </div>
                        <button onClick={()=>{setInput(!input)}} className={style.eye_password}>{input ? <PiEyeLight className="text-2xl text-white" /> : <PiEyeSlash className="text-2xl text-white" />}</button>
                    </div>
                    <div class="relative w-full">
                        <input type={input ? 'text' : 'password'} className={style.input + " peer"} placeholder="Введите пароль повторно" required/>
                        <div className={style.input_icon}>
                            <PiLockBold className="text-2xl text-white"/>
                        </div>
                    </div>
                    <div className={style.block_button}>
                        <div className={style.background_button + " col-span-2"}><Link href={'sign_in'} alt='' className={style.button_log_reg}>Войти</Link></div>
                        <div className={style.background_button + " col-span-3"}><button type='submit' className={style.button_log_reg}>Регистрация</button></div>
                    </div>
                </form>
            </div>
        </div>
    );
}