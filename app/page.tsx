import Image from "next/image";
import Carousel from "./components/Carousel";
import MobileCarousel from "./components/ModileCarousel";
import Footer from "./components/Footer";
import { cannabis, hemp, merch, products } from "@/lib/data";
import Link from "next/link";

import slugify from 'slugify'
// import CannabisCarousel from "./components/CannabisCarousel";
import dynamic from "next/dynamic";

const DynamicCarousel = dynamic(() => import('./components/CannabisCarousel'), {
  ssr: false
})

export default function Home() {
  return (
    <main className="m-auto max-w-[1080px] flex flex-col">
      <section className="mt-0 xl:mt-8">
        <div className="hidden lg:block">
          <Carousel />
        </div>
        <div className="lg:hidden">
          <MobileCarousel />
        </div>
      </section>
      
      <section>
        <div className="mt-6 mb-12 border-b-[1px] border-gray-300">
          <h3 className="uppercase m-auto text-green-500 font-semibold w-fit 
          rounded-lg text-2xl px-4 py-2">Cannabis</h3>
        </div>

        <DynamicCarousel />
        
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cannabis.map((item, i) => (
            <Link 
              href={`/cannabis/${slugify(item.name)}`}
              className="flex flex-col items-center group cursor-pointer ">
              <Image 
                alt={item.name}
                src={`/images${item.image}`}
                width={200}
                height={300}
                className="overflow-hidden group-hover:scale-105 transition duration-200 ease-in"
              />

              <p className="uppercase text-gray-900 font-semibold
                text-sm">{item.name}</p>
            </Link>
          ))}
        </div> */}
      </section>

      <section className="mt-6">
        <div className="mt-6 mb-12 border-b-[1px] border-gray-300 ">
          <h3 className="uppercase m-auto text-green-500 font-semibold w-fit rounded-lg text-2xl px-4 py-2">
            hemp
          </h3>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {hemp.map((item, i) => (
            <Link 
              href={`/hemp/${slugify(item.name)}`}
              className="flex flex-col gap-4 items-center group cursor-pointer ">
              <Image 
                alt={item.name}
                src={`/images${item.image}`}
                width={200}
                height={300}
                className="overflow-hidden group-hover:scale-105 transition duration-200 ease-in"
              />

              <p className="uppercase text-gray-900 font-semibold
                text-xl">{item.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section  className="mt-6 mb-12">
        <div className="mt-6 mb-12 border-b-[1px] border-gray-300 ">
          <h3 className="uppercase m-auto text-green-500 font-semibold w-fit rounded-lg text-2xl px-4 py-2">
            Merch
          </h3>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {merch.map((item, i) => (
            <Link 
              href={`/merch/${slugify(item.name)}`}
              className="flex flex-col items-center group cursor-pointer ">
              <Image 
                alt={item.name}
                src={`/images${item.image}`}
                width={200}
                height={300}
                className="overflow-hidden group-hover:scale-105 transition duration-200 ease-in"
              />

              <p className="uppercase text-gray-900 font-semibold
                text-xl">{item.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
