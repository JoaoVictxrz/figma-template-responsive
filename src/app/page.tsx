"use client";
import Navbar from './components/navbar'
import Image from 'next/image';
import Page1 from './components/page1';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Page1 />
        <div className='flex flex-col items-center bg-white px-8'>
          <div className=' flex flex-col items-center justify-center text-center gap-5'>
            <h1 className='uppercase text-greenLemon font-bold text-xl pt-12'>Partners</h1>
            <h2 className='font-bold text-2xl'>Lorem ipsum Dolor</h2>
            <h3 className='font-light text-xl'>Lorem ipsum, dolor sit amet consectetur<br />
              adipisicing elit.</h3>
          </div>
          <div className='flex flex-col items-center py-14 gap-8 md:grid md:grid-cols-5'>
            <Image
              src='/partners/Google.svg'
              width={180}
              height={100}
              alt='Google' />
            <Image
              src='/partners/microsoft.svg'
              width={220}
              height={100}
              alt='microsoft' />
            <Image
              src='/partners/airbnb.svg'
              width={180}
              height={100}
              alt='airbnb' />
            <Image
              src='/partners/facebook.svg'
              width={200}
              height={100}
              alt='Facebook' />
            <Image
              src='/partners/spotify.svg'
              width={180}
              height={100}
              alt='spotify' />
          </div>
          <button className='text-white bg-zinc-900 text-xl h-12 w-48 rounded-md'>Learn More</button>
          <div className='md:flex md:items-center'>
            <Image
              src='/Group2.svg'
              width={500}
              height={500}
              alt='group2'
              className='pt-14 md:px-20 md:w-[800px] md:h-[867px] md:pt-0' />
            <div className='flex flex-col float-left gap-5 pt-5 px-10 md:pl-16 md:pr-32 '>
              <h1 className='font-semibold text-3xl md:text-5xl'>Lorem ipsum dolor sit amet consectetur </h1>
              <h2 className='text-black/50 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</h2>
              <button className='text-white bg-zinc-900 text-xl h-12 w-48 rounded-md'>Learn More</button>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}
