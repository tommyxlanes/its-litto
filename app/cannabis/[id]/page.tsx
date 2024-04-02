'use client'

import Selector from '@/app/components/Selector'
import { cannabisType, products } from '@/lib/data'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { PiPlant } from "react-icons/pi";
import { FaEyeDropper } from "react-icons/fa6";
import { PiMaskHappyLight } from "react-icons/pi";

type Props = {
    params: {
      id: string
    }
}

const page = ({ params }: Props) => {
  const item = cannabisType.find(item => {
    if(item.slug === params.id) return item
  })

  if(!item) return 

  return (
    <div className="m-auto max-w-[1080px] flex flex-col px-2 lg:px-24">
      <div className="mt-16 p-8 flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 justify-center">
        <div>
          <Image 
            src={`/images${item.image}`}
            height={600}
            width={300}
            alt={item.slug}
            />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
            <h3 className='font-semibold text-3xl text-gray-900'>{item.name}</h3>

            <div className='flex gap-2'>
            <Selector /> <button className=' px-4 rounded-lg bg-green-600 text-white'>Add To Cart</button>
            </div>

            <div className='mt-8 flex flex-col gap-4'>
              <div>
                <div className='font-semibold text-gray-800 flex gap-2 items-center'>
                <PiPlant className='text-gray-800 text-4xl' /> Strain 
                </div>
                <p className='text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fuga iusto accusantium ex temporibus porro aspernatur, accusamus, facere eos, pariatur in labore odio laboriosam libero aut adipisci exercitationem. Tempora, molestias.
                </p>
              </div>

              <div>
                <div className='font-semibold text-gray-800 flex gap-2 items-center'>
                <PiMaskHappyLight className='text-gray-800 text-4xl' /> Mood 
                </div>
                <p className='text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repudiandae temporibus, amet vitae esse repellendus illum deserunt distinctio obcaecati quasi labore voluptate. Facilis aliquam blanditiis, unde est nulla a officia.
                </p>
              </div>

              <div>
                <div className='font-semibold text-gray-800 flex gap-2 items-center'>
                <FaEyeDropper className='text-gray-800 text-4xl' /> Flavors 
                </div>
                <p className='text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis suscipit impedit. Amet, eligendi atque quisquam voluptate voluptas maiores nam excepturi cumque dolorem. Molestias, architecto. A eaque adipisci laborum suscipit.
                </p>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
