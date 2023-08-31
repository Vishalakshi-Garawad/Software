import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from "next/head"
import Dryfruits from "@/components/dryfruits"

export default function format({children}) {
  return (
<>
        <Head>
        <title>Online Grocery Store</title>
        </Head> 
        
       <Header></Header>
       <main>{children}</main>
       <Footer></Footer>
</>
  )
}
