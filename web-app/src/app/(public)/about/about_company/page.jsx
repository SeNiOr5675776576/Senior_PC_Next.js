'use client'
import Slider from '../../../../component/slider_company/page'
import style from './about.module.css'

export default function AboutCompany (){
    return(
        <div className={style.main}>
            <div className={style.slider_text}>
                <Slider/>
                <div className={style.text_company}>
                    <h1 className='font-semibold text-2xl'>Компания SENIORPC</h1>
                    <p className='mt-2 text-gray-300'>
                        Компания SENIORPC была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми кампаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.
                    </p>
                    <p className='mt-8 text-gray-300'>
                        Главный офис SENIORPC и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.
                    </p>
                </div>
            </div>
            <div className={style.achievements}>
                <div className={style.blok_achievement}>
                    <h2 className='text-3xl text-white'>14 лет</h2>
                    <p>За 14 лет мы выросли в одного из лидеров на игровом компьютерном рынке</p>
                </div>
                <div className={style.blok_achievement}>
                    <h2 className='text-3xl text-white'>50 000 ПК</h2>
                    <p>Мы произвели более 50 тысяч игровых компьютеров для наших клиентов</p>
                </div>
                <div className={style.blok_achievement}>
                    <h2 className='text-3xl text-white'>70 блогеров</h2>
                    <p>Топовых 70 ютуб блогеров и стримеров выбрали компьютер SENIORPC</p>
                </div>
                <div className={style.blok_achievement}>
                    <h2 className='text-3xl text-white'>60 клубов</h2>
                    <p>Оборудовали 60 компьютерных клубов под ключ, присутствует программа лизинга</p>
                </div>
            </div>
        </div>
    );
}