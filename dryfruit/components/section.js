import Dryfruits from "@/components/dryfruits"
import Seeds from "./seeds"
import Footer from "./footer"
export default function section1() {
return (
  <section1 className="py-0">
    {/*<div className="relative w-[1000px]">*/}

        <div className="flex w-full py-0 h-10">
            <img src="dry1.jpg" height={"20%"} width={"100%"} className="h-96"/>
            <div className="absolute items-center justify-center mt-36 px-50 ml-32 text-amber-900">
                <p className="flex mr-70 text-5xl font-bold mx-96 py-50">
                    GET SOME NUTS
                </p>
                <h2 className="flex text-xl ml-0 items-center justify-center px-50 py-50 text-black">
                  Natural Vitamins For Mind & Body
                </h2>
                <p className="flex items-end justify-end mr-96 py-8 px-20 text-black">
                  500gm- Rs170
                </p>
            </div>
        </div>
        <div>
        
        <Dryfruits/>
        
<Seeds/>
        </div>
  </section1>
  
  )
}
