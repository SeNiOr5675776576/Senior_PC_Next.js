'use client'
import style from './user.module.css'
import { PiEnvelope } from "react-icons/pi";
import { PiLockBold } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { useState } from 'react';
import Link from 'next/link';

export default function User(){
    const [input, setInput] = useState(false)
    return(
        <div className={style.main}>
            <div className={style.background}>
                <div className={style.block_authorization}>
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
                        <div className={style.background_button + " col-span-3"}><button className={style.button_log_reg}>Регистрация</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}