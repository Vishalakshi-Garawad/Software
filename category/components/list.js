import Link from "next/link"

export default function list() {
  return (
    <section className="mr-20 mt-2">
        <div className="m-10 mr-16 mt-10 flex flex-row justify-between items-center">
          <Link href={"/"}>
            <div className="ml-4 p-1">
                <img src="veg.png" className=" w-28 h-28 ml-7 rounded-full items-center object-cover"/>
                <p className="text-xs text-black text-center ml-5 mt-1">Fruits and Vegetables</p>
            </div>
            </Link>

            <Link href={"/"}>
            <div className="ml-4 p-1">
               <img src="oil.png" className="w-28 h-28 ml-8 rounded-full items-center object-cover"/>
               <p className="text-xs text-black text-center ml-7 mt-1">MultiGrains and Masala</p>
            </div>
            </Link>
             
            <Link href={"/"}> 
            <div className="ml-4 p-1">
              <img src="dairy.png" className="w-28 ml-5 h-28 rounded-full items-center object-cover"/>
              <p className="text-xs text-black text-center ml-3 mt-1">Eggs and Dairy</p>
            </div>
            </Link>
            
            <Link href={"/"}>
            <div className="ml-2 p-1">
              <img src="bevarage.png" className=" w-28 h-28 ml-10 rounded-full items-center object-cover"/>
              <p className="text-xs text-black text-center ml-12 mt-3">Bevarages</p>
            </div>
            </Link>
            
        </div>

        <div className="px-10 mt-5 flex flex-row justify-evenly">

        <Link href={"/"}>
        <div className="ml-4 p-1">
                <img src="bakery.png" className=" w-28 h-28 ml-7 rounded-full items-center object-cover"/>
                <p className="text-xs text-black text-center ml-8 mt-1">Bakery and Cakes</p>
        </div>
        </Link>
        
        <Link href={"/"}>
        <div className="ml-10 p-1">
                <img src="snacks.png" className=" w-28 h-28 ml-7 rounded-full items-center object-cover"/>
                <p className="text-xs text-black text-center ml-5 mt-1">Snacks and PackedFoods</p>
        </div>
        </Link>

        <Link href={"/"}>
        <div className="ml-5 p-1">
                <img src="detergent.png" className=" w-28 h-28 ml-7 rounded-full items-center object-cover"/>
                <p className="text-xs text-black text-center ml-5 mt-1">Cleaning and Household</p>
        </div>
        </Link>

        <Link href={"/C:\Users\dell\Desktop\Dryfruit\dryfruit\api\index.js"}>
        <div className="ml-5 mr-8 p-1">
                <img src="dry.png" className=" w-28 h-28 ml-7 rounded-full items-center object-cover"/>
                <p className="text-xs text-black text-center ml-8 mt-1">Dryfruits and</p>
        </div>
        </Link>


        </div>

    </section>
  )
}