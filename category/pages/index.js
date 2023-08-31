import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/header'
import styles from '@/styles/Home.module.css'
import List from '@/components/list'
import Section from '@/components/section'
import Footer from '@/components/footer'




export default function Home() {
  return (
   <div>
    <Head>
            <title> Online Grocery store</title>
        </Head>
    <Header></Header>
    <Section/>
    <List/>
    <Footer/>
   </div>
  )
}
