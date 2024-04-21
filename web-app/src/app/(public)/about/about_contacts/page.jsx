import style from './about.module.css'
import Image from 'next/image';

export default function AboutContacts(){
    return(
        <div className={style.main}>
            <div className={style.block}>
                <Image className={style.image_block_left} src={'../../../../public/aoc-24g2spu-bk-389x219.jpg'} alt=''></Image>
                <span className={style.text_block_right}>
                    <h2 className={style.text_title}>Вопросы о покупке</h2>
                    <p  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis labore accusamus magni, dolores vel atque repudiandae itaque illo, totam ipsam voluptatum.</p>
                </span>
            </div>
            <div className={style.block}>
                <span className={style.text_block_left}>
                    <h2 className={style.text_title}>Техническая поддержка</h2>
                    <p className={style.text_info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi pariatur vitae ratione, atque officiis natus totam soluta? Minima, autem!</p>
                </span>
                <Image className={style.image_block_right} src={'../../../../public/aoc-24g2spu-bk-389x219.jpg'} alt=''></Image>
            </div>
            <div className={style.block}>
                <Image className={style.image_block_left} src={'../../../../public/aoc-24g2spu-bk-389x219.jpg'} alt=''></Image>
                <span className={style.text_block_right}>
                    <h2 className={style.text_title}>Магазин и сервис-центр</h2>
                    <p className={style.text_info}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi aspernatur, ipsum enim suscipit optio similique obcaecati nihil quo alias, quod magni nisi ipsa magnam fugiat.</p>
                </span>
            </div>
            <div className={style.block}>
                <h3 className={style.text_title}>Сотрудничество</h3>
                <p className={style.text_info}>Lorem, ipsum dolor.</p>
            </div>
            <div className={style.block}>
                <h2 className={style.text_title}>Реквизиты</h2>
                <p className={style.text_info}></p>
            </div>
        </div>
    );
}