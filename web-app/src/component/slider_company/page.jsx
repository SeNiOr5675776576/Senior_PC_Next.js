
import style from './slider.module.css'
import Image from 'next/image';
import img_one from '../../../public/img_company_1 1.svg'
import img_two from '../../../public/img_company_2 1.svg'
import img_three from '../../../public/img_company_3.svg'
import img_four from '../../../public/img_company_4 1.svg'
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/component/ui/carousel"
import { useQuery } from 'react-query';
import { Url } from '@/constants/request';
import axios from 'axios';
import Autoplay from "embla-carousel-autoplay"

export default function Slider() {
    const query = useQuery({
        queryKey: ['product'],
        queryFn: async () => await axios.get(Url.getDataImgCarousel),
    })
    const images = query?.data?.data?.data?.attributes?.Image?.data
    console.log(query?.data?.data?.data)
  return (
    <Carousel opts={{loop: true,}} plugins={[Autoplay({delay: 3000, stopOnInteraction: false,}),]} className="w-full max-w-[400px]">
      <CarouselContent>
        {images?.map((e) => (
          <CarouselItem key={e.id}>
            <div className="p-1 relative h-[400px]">
              <Image className='object-cover ' fill src={Url.getImage(e.attributes.url)} alt='f'/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
