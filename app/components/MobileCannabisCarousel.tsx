'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '@/styles/styles.css'
import { cannabis } from '@/lib/data';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';


const CannabisCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
            nextEl: '.button-next-slide',
            prevEl: '.button-prev-slide'
          }}
        modules={[FreeMode, Pagination, Navigation]}
        className=""
      >
        {
            cannabis.map((item, i) => {
                return (
                    <SwiperSlide>
                        <Link href={`/cannabis/${item.slug}`}>
                        <div className='flex flex-col gap-4'>
                            <Image 
                                src={`/images${item.image}`}
                                height={300}
                                width={150}
                                alt={item.name}
                            />

                            <h3 className='text-2xl font-semibold'>
                                {item.name}
                            </h3>
                        </div>
                        </Link>
                    </SwiperSlide>
                )
            })
        }
        <div className='ml-2 top-[50%] -translate-y-[50%] absolute z-10 button-prev-slide w-12 h-12
        left-0'>
        <FaArrowLeftLong className='text-green-600 opacity-60 
          hover:opacity-80 text-4xl cursor-pointer transition duration-200
          hover:text-green-400' />
      </div>
      <div className='mr-2 top-[50%] -translate-y-[50%] absolute z-10 button-next-slide w-12 h-12
      right-0'>
        <FaArrowRightLong className='text-green-600 opacity-60 
          hover:opacity-80 text-4xl cursor-pointer transition duration-200
          hover:text-green-400' />
      </div>
      </Swiper>
    </>
  )
}

export default CannabisCarousel
