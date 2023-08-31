import Link from "next/link"
export default function dryfruits() {
  return (
    //Heading
    <section className="py-96"> 
        <h1 className="text-5xl px-5">Dry Fruits</h1>
        <div className="flex my-5 px-0 md:px-0"></div>

      {/*first row fruits*/}
      <div className="flex flex-row justify-evenly">
          
        <div className=" ml-4 p-1 w-48 h-52 bg-gray-50 rounded-2xl">
          <img src="almond.png" className="flex w-28 h-28 ml-9 justify-center items-center hover:bg-contain"/>
          <h2 className="py-2 text-black text-xs text-center">Almonds</h2>
          <p className=" ml-9 justify-center text-xs">500gm - Rs380</p>
          <div className="flex justify-center items-center"></div>
          <button class="h-5 px-3 m-2 ml-5 self self-stretch text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Add</button>
          <button class="h-5 px-3 m-2 ml-5 text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Buynow</button>
        </div>




          <div className="p-1 w-48 h-52 bg-gray-50 rounded-2xl">
          <img src="chashewnuts.png" className="flex w-28 h-28 ml-9 justify-center items-center hover:bg-contain"/>
          <h2 className="py-2 text-black text-xs text-center">Cashewnuts</h2>
          <p className=" ml-9 justify-center text-xs">200gm  - Rs325</p>
          <button class="h-5 px-3 m-2 ml-5 self self-stretch text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Add</button>
          <button class="h-5 px-3 m-2 text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Buynow</button>
          </div>


          <div className="p-1 w-48 h-52 bg-gray-50 rounded-2xl">
           <img src="anjir1.png" className="flex w-28 h-28 ml-9 justify-center items-center hover:bg-contain"/>
           <h2 className="py-2 text-black text-xs text-center">Anjir</h2>
           <p className=" ml-9 justify-center text-xs">500gm  - Rs450</p>
           <button class="h-5 px-3 m-2 ml-5 self self-stretch text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Add</button>
           <button class="h-5 px-3 m-2 text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Buynow</button>
          </div>


        
          <div className="p-1 w-48 h-52 bg-gray-50 rounded-2xl">
            <img src="apricot.png" className="flex w-28 h-28 ml-9 justify-center items-center hover:bg-contain"/>
            <h2 className="py-2 text-black text-xs text-center">Apricot</h2>
            <p className=" ml-9 justify-center text-xs">200gm  - Rs245</p>
            <button class="h-5 px-3 m-2 ml-5 self self-stretch text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Add</button>
            <button class="h-5 px-3 m-2 text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Buynow</button>         
          </div>


          <div className="p-1 w-48 h-52 bg-gray-50 rounded-2xl">
            <img src="hazelnut.png" className="flex w-28 h-28 ml-9 justify-center items-center hover:bg-contain"/>
            <h2 className="py-2 text-black text-xs text-center">Hazel Nuts</h2>
            <p className=" ml-9 justify-center text-xs">500gm  - Rs170</p>
            <button class="h-5 px-3 m-2 ml-5 self self-stretch text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Add</button>
            <button class="h-5 px-3 m-2 text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Buynow</button>         
          </div>
          
      </div>


      <div className=" mt-10 flex flex-row justify-evenly">
          
          <div className="p-1 ml-5 w-48 h-52 bg-gray-50 rounded-2xl">
            <img src="pista.png" className="flex w-28 h-28 ml-9 justify-center items-center hover:bg-contain"/>
            <h2 className="py-2 text-black text-xs text-center">Pista</h2>
            <p className=" ml-9 justify-center text-xs">500gm  - Rs550</p>
            <button class="h-5 px-3 m-2 ml-5 self self-stretch text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Add</button>
            <button class="h-5 px-3 m-2 text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Buynow</button>
          </div>
          
          
          <div className="p-1 w-48 h-52 bg-gray-50 rounded-2xl">
            <img src="brownraisins.png" className="flex w-28 h-28 ml-9 justify-center items-center hover:bg-contain"/>
            <h2 className="py-2 text-black text-xs text-center">Raisins(Brown)</h2>
            <p className=" ml-9 justify-center text-xs">500gm  - Rs200</p>
            <button class="h-5 px-3 m-2 ml-5 self self-stretch text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Add</button>
            <button class="h-5 px-3 m-2 text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Buynow</button>
          </div>


          <div className="p-1 w-48 h-52 bg-gray-50 rounded-2xl">
          <img src="drykajur.png" className="flex w-28 h-28 ml-9 justify-center items-center hover:bg-contain"/>
            <h2 className="py-2 text-black text-xs text-center">Dry kajur</h2>
            <p className=" ml-9 justify-center text-xs">500gm  - Rs200</p>
            <button class="h-5 px-3 m-2 ml-5 self self-stretch text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Add</button>
            <button class="h-5 px-3 m-2 text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Buynow</button>
          </div>


          <div className="p-1 w-48 h-52 bg-gray-50 rounded-2xl">
          <img src="walnuts.png" className="flex w-28 h-28 ml-9 justify-center items-center hover:bg-contain"/>
            <h2 className="py-2 text-black text-xs text-center">Walnuts</h2>
            <p className=" ml-9 justify-center text-xs">1kg  - Rs450</p>
            <button class="h-5 px-3 m-2 ml-5 self self-stretch text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Add</button>
            <button class="h-5 px-3 m-2 text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Buynow</button>
          </div>

          <div className="p-1 w-48 h-52 bg-gray-50 rounded-2xl">
          <img src="blackraisins.png" className="flex w-28 h-28 ml-9 justify-center items-center hover:bg-contain"/>
            <h2 className="py-2 text-black text-xs text-center">Raisins(Black)</h2>
            <p className=" ml-9 justify-center text-xs">200gm  - Rs84</p>
            <button class="h-5 px-3 m-2 ml-5 self self-stretch text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Add</button>
            <button class="h-5 px-3 m-2 text-xs font-semibold bg-green-700 rounded-full focus:shadow-outline hover:bg-green-700">Buynow</button>
          </div>
        </div>


    </section>

  )

}