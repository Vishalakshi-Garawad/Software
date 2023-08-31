import React from 'react'

export default function footer() {
  return (
    <section>
        <div className="mt-10 px-5">
            <h1 className="text-4xl">Ranged Selections Just for You</h1>
            <p className="text-sm ml-2 font-semibold font-serif"> Check Out Our Booming Stores</p>
        </div>

        <div className="mt-10 flex flex-row justify-evenly">
          <img src="footer.png" className="w-80 h-40 rounded-md"/>
          <img src="footer1.png" className=" w-80 h-40 rounded-md"/>

        </div>
        
        </section>
  )
}
