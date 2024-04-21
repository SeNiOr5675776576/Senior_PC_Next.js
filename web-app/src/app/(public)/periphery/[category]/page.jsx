'use client'
import style from './main.module.css'
import Card from '../../../../card/card_periphery/page'
import axios from 'axios'
import { useQuery } from 'react-query';
import { Url } from '@/constants/request';

export default function Category({params}){
    const query = useQuery({
        queryKey: ['periphery'],
        queryFn: async () => await axios.get(Url.getDataPeriphery+'&filters[category][$eq]='+params.category),
    })
    return(
        <div className={style.card_block}>
            {query?.data?.data?.data?.map((e)=><span className={style.card}><Card periphery={e.attributes}/></span>)}
        </div>
    );
}