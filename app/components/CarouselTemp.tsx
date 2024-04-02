'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { cannabis } from '@/lib/data';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';

type Props= {
    list: {
        name: string,
        slug: string,
        type: string,
        image: string,
        strain?: string,
        mood?: string,
        flavors?: string,
        description?: string
    }[],
    catalog?: string
}

const CarouselItem = ({ list, catalog }: Props) => {
  const itemFit = catalog === 'merch' ? 'contain' : 'cover'
 
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1080: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
        loop={true}
        navigation={{
            nextEl: '.button-next-slide',
            prevEl: '.button-prev-slide'
          }}
        modules={[FreeMode, Pagination, Navigation]}
      >
        {
            list.map((item, i) => {
                // const type = item.type === 'hemp' ? 'hemp' : 'merch'

                return (
                    <SwiperSlide key={i}>
                        <Link href={`/${catalog}/${item.slug}`}>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <div className='relative w-36 h-60 '>
                                <Image 
                                  src={`/images${item.image}`}
                                  sizes='100vw'
                                  fill
                                  style={{
                                    objectFit: `${itemFit}`
                                  }}
                                  alt={item.name}
                                  className='hover:scale-105 transition duration-200'
                              />
                            </div>
                            <h3 className='text-2xl font-semibold'>
                                {item.name}
                            </h3>
                        </div>
                        </Link>
                    </SwiperSlide>
                )
            })
        }
        <div className='ml-2 top-[50%] -translate-y-[50%] absolute z-10 button-prev-slide 
          left-0 bg-green-600 hover:bg-green-500 transition duration-200 
          py-2 px-2 cursor-pointer group text-gray-200'>
          <FaArrowLeftLong className='text-xl transition duration-200
            ' />
        </div>
        <div className='mr-2 top-[50%] -translate-y-[50%] absolute z-10 button-next-slide 
        right-0 bg-green-600 hover:bg-green-500 transition duration-200 
        px-2 py-2 cursor-pointer group text-gray-200'>
          <FaArrowRightLong className='text-xl transition duration-200
            ' />
        </div>
        
      </Swiper>
    </>
  )
}

export default CarouselItem
