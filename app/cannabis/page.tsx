'use client'

import { useActiveSelection } from '@/context/ActiveContext'
import { cannabisType } from '@/lib/data'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CarouselItem from '../components/CarouselTemp'

const page = () => {
  const {activeSelection, setActiveSelection} = useActiveSelection()
  const cannaArray = cannabisType.map(cana => (cana.type))

  const blend = ['original', 'exotic', 'live resin']

  const filterList = cannabisType.filter(item => item.type === activeSelection)
  
  return (
    <div className='m-auto max-w-[1080px] flex flex-col'>
      <div className='w-full'>
        <Image 
          src='/images/cannabis-header.jpg'
          height={300}
          width={300}
          quality={70}
          unoptimized={true}
          alt='cannabis hero'
          className='h-96 w-full object-cover'
        />
        <div className='bg-[#080808] p-4 lg:p-8 flex items-center justify-center'>
          <ul className='flex gap-4'>
            {blend.map(t => (
                <li className='text-xl flex items-center justify-center'>
                  <Link 
                  onClick={() => setActiveSelection(t)}
                  href={`/cannabis/#${t}`}
                  className={clsx(`bg-[#111] hover:text-white hover:bg-green-500 transition duration-200 
                  uppercase text-gray-500 rounded-md px-4 py-2`, {
                    'text-white bg-[#22c55e]' : activeSelection === t
                  })}>
                    {t}
                  </Link>
                </li>
            ))}
          </ul>
        </div>
        
        <div className='my-8'>
          <CarouselItem list={filterList} catalog='cannabis' />
        </div>
      </div>
    </div>
  )
}

export default page
