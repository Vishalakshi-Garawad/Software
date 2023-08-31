import Head from 'next/head'
import Image from 'next/image'
import Format from '@/layout/format'
import Header from '@/components/header'
import Link from 'next/link'

//Components
import Section from '@/components/section'


export default function Home() {
  return (
    <Format>
    <Link href={"/index.js"}><Section/></Link>
     
    </Format>
  )
}