import React from 'react'
import { LuSearch } from "react-icons/lu"; 
import List from './list';
import Link from 'next/link';


export default function section() {
  return (
    <section className="flex flex-row row-span-2 justify-between">

        {/*...........Content............*/}
        <div>
          <h1 className="mt-5 px-5 text-3xl font-bold">What are you hunting for.?</h1>
          <p className="text-lg px-8 font-serif absolute font-semibold mt-0">Test Our top Catgories</p>
        </div>

        {/*...........Search Box............*/}

        <div className="bg-gray-400 mt-8 ml-14 mr-52 w-32 h-4 sm:order-2 flex justify-start py-10 sm:py-0">
        <input type="search" placeholder="Search Product..." className="text-center"/>
        <Link href={"/"} className="xl:container  bg-green-600 h-4 py-1 mb-32 w-16"><LuSearch color='white' size={"10"}/></Link>

        </div>
    

    </section>
  )
}
