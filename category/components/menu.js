import Link from 'next/link'
import React from 'react'

const data =[
    { id: 1, name: "Select Category", url: "/"},
    { id: 2, name: "Discount Products", url: "/"},
    { id: 3, name: "Best Cellers", url: "/"}
];

export default function menu() {
  return (
    
    <ul className="flex md:flex flex-row mr-36 text-xs text-center gap-5 mt-0 font-medium text-black">
                {data.map((item) => {
                    return(
                     
                        <React.Fragment key={item.id}>
                          <li className="cursor-pointer">
                            
                            <Link href={item.url}>
                               {item.name}
                            </Link>
                          </li>                            
                        </React.Fragment>
                     
                    )

                } )
                
                }
            </ul>   
            
  )
}