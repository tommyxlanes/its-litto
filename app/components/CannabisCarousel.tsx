'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import useScreenSize from '@/lib/useScreenSize';

import { cannabis } from '@/lib/data';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';

const CannabisCarousel = () => {
    const screenSize = useScreenSize()

    console.log(screenSize.width)
    
  return (
    <>
      <Swiper
        slidesPerView={screenSize.width < 500 ? 2 : 4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={{
            nextEl: '.button-next-slide',
            prevEl: '.button-prev-slide'
          }}
        modules={[FreeMode, Pagination, Navigation]}
      >
        {
            cannabis.map((item, i) => {
                return (
                    <SwiperSlide>
                        <Link href={`/cannabis/${item.slug}`}>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <Image 
                                src={`/images${item.image}`}
                                height={400}
                                width={200}
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
        <div className='ml-2 top-[50%] -translate-y-[50%] absolute z-10 button-prev-slide 
        left-0 bg-green-600 hover:bg-green-500 transition duration-200 py-2 px-2 cursor-pointer group'>
        <FaArrowLeftLong className='text-white opacity-90 
          group-hover:opacity-80 text-xl transition duration-200
          group-hover:text-green-400' />
      </div>
      <div className='mr-2 top-[50%] -translate-y-[50%] absolute z-10 button-next-slide 
      right-0 bg-green-600 hover:bg-green-500 transition duration-200 px-2 py-2 cursor-pointer group'>
        <FaArrowRightLong className='text-white opacity-60 
          group-hover:opacity-80 text-xl transition duration-200
          group-hover:text-green-400' />
      </div>
      </Swiper>
    </>
  )
}

export default CannabisCarousel
