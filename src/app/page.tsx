"use client";
import Navbar from './components/navbar'
import Image from 'next/image';
import Page1 from './components/page1';
import Page2 from './components/page2';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Page1 />
        <Page2 />
        <div>

        </div>
      </main >
    </>
  )
}
