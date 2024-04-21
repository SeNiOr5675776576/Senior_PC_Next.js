import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper/modules';
import Card from '../../card/card_computer/page'
import style from './slider.module.css'
import axios from 'axios'
import { useQuery } from 'react-query';
import { Url } from '@/constants/request';

export default function Slider(){
    const query = useQuery({
      queryKey: ['product'],
      queryFn: async () => await axios.get(Url.getData),
  })
    return(
      <Swiper
      style={{
        '--swiper-pagination-color': 'white'
      }}
      effect={'coverflow'}
      loop='true'
      spaceBetween={100}
      grabCursor={true}
      slidesPerView={2}
      centeredSlides
      initialSlide={1}
      coverflowEffect={{
        rotate: 0,
        stretch: 115,
        depth: 150,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className={style.swiper}
    >
      {query?.data?.data?.data?.map((e)=><SwiperSlide className={style.swiperslide}><Card img = {e.attributes.image.data.attributes.url} title = {e.attributes.name} price = {e.attributes.price} desc_cpu_card = {e.attributes.desc_cpu} desc_gpu_card = {e.attributes.desc_gpu} desc_ram_card = {e.attributes.desc_ram}/></SwiperSlide>)}
    </Swiper>
    )
}