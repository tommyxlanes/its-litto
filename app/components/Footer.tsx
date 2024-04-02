import { footerInfo } from '@/lib/data'
import Link from 'next/link'
import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import Search from './Search';

const Footer = () => {
    const now = new Date()
    const getFullYear = now.getFullYear()

  return (
    <footer className='w-full px-4 pt-12 pb-6 bg-[#080808]'>
      <div className='m-auto max-w-[1080px] flex flex-col lg:flex-row p-4 
      gap-y-24 gap-x-24 lg:grid lg:grid-cols-3 text-gray-200'>
        <div className='border-b-[1px] border-gray-800 lg:border-none pb-16'>
            <ul className='flex flex-col gap-2 font-light'>
                {
                    footerInfo.map(info => (
                        <Link href={`/${info.url}`} className='hover:text-green-600 transition
                        duration-200'>
                            <li key={info.link}>{info.link}</li>
                        </Link>
                    ))
                }
            </ul>
        </div>
        <div className='flex flex-col font-light uppercase pb-24
        border-b-[1px] border-gray-800 lg:border-none'>
            <h2 className='text-2xl relative gap-2 text-gray-200 flex items-center'>
                <span><IoLocationSharp className='text-green-600'/></span>Find litto near you
            </h2>

            <div className='text-gray-900 mt-4 bg-gray-200 rounded-sm font-normal'>
                <Search />
            </div>
        </div>
        <div className='pb-12'>
            <div className='text-gray-200 text-left font-light text-2xl uppercase mb-4'>
                Subscribe to our <span className='text-green-600'>newsletter</span>
            </div>
            <form action="" className='flex flex-col gap-2'>
                <div>
                    <input type="text" className='rounded-sm text-gray-900 outline-none w-full p-2' placeholder='First Name' />
                </div>
                <div>
                    <input type="text" className='rounded-sm text-gray-900 outline-none w-full p-2' placeholder='Last Name' />
                </div>
                <div>
                    <input type="text" className='rounded-sm text-gray-900 outline-none w-full p-2' placeholder='Email' />
                </div>
                <div>
                    <input type="text" className='rounded-sm text-gray-900 outline-none w-full p-2' placeholder='Birthday' />
                </div>
                
                <button className='rounded-sm font-semibold w-full bg-green-500 text-[#080808] p-2
                    hover:bg-green-600 transition duration-200'>Subscribe</button>
            </form>
        </div>
      </div>

      <div className='text-center text-sm text-gray-500'>
        ©{getFullYear}, LITTO, C12-0000266-LIC
      </div>
    </footer>
  )
}

export default Footer
