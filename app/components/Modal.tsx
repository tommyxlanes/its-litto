'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

import { motion } from 'framer-motion'

const Modal = () => {
    const [isOpen, setIsopen] =  useState(true)

    // useEffect(() => {
    //     setIsopen(true)
    // }, []) 

  return (
    <>
      {isOpen && (
        <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm transition-opacity"></div>
  
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center 
           p-4 text-center sm:items-center sm:p-0">
            
            <div className="relative transform overflow-hidden rounded-lg bg-gray-900 
            text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div
                className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-200 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.65m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    {/* <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                      Age confirmation
                    </h3> */}
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                      If you are not legally able to purchase tobacco or nicotine products in the place where you live, please do not enter this site.
                      </p>
                      
                      <p className="text-gray-800 font-semibold mt-4">
                      You must be 21 years of age or older to access this website
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 px-4 py-3 flex gap-4 flex-col">
                <div className="flex gap-4">
                  <button 
                  onClick={() => setIsopen(false)}
                  className="bg-green-500 py-2 px-4 font-semibold 
                  w-full rounded-md hover:bg-green-400 transition duration-200">
                    Yes, I am over 21
                  </button>
                  <Link href='https://www.google.com/' className="bg-red-600 hover:bg-red-500 py-2 px-4 font-semibold 
                  w-full rounded-md text-white text-center transition duration-200">
                    No, I am underage
                  </Link>
                </div>
  
                <div className="text-xs w-2/3 m-auto text-center 
                font-extralight text-gray-400">
                By entering this website, you agree to our terms and conditions and our privacy policy.
                </div>
              {/* <button type="button" className="mt-3 w-full 
                justify-center rounded-md bg-green-500 px-3 py-2 text-sm 
                font-semibold text-gray-900 shadow-sm
                hover:bg-green-400 sm:mt-0 sm:w-auto uppercase">Yes, I am over 21 </button>
                <button type="button" className="mt-3 w-full 
                justify-center rounded-md bg-red-600 px-3 py-2 text-sm 
                font-semibold text-gray-100 shadow-sm
                hover:bg-red-500 sm:mt-0 sm:w-auto uppercase">no, i am underage</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Modal
