import Link from "next/link";
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch} from "react-icons/bs";

export default function header() {
  return (
    <header className="bg-green-700">
        <div className="=xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-2">
            <div className="md:flex-none  w-96 h-10 order-2 sm:order-2 flex justify-center py-2 sm:py-0">
                <input type="text" className="input-text" placeholder="Search Products... "/>
                
                <Link href={"/"} className=" bg-green-600 mt-1 items-center h-9"><BsSearch color='white' size={"15"} className="mt-3"/></Link>

            </div>
           
            <div className="px-10 shrink w-80 sm:order-1">
                <Link href={"/"}><BsArrowLeft size={26}/></Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex ml-56 gap-5">
                <Link href={"/"}><BsFillCartFill size={26}/></Link>
                <Link href={"/"}><BsFillPersonFill size={26}/></Link>
                </div>
            </div>
        </div>
    </header>
  )
}
