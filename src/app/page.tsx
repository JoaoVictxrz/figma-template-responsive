"use client";
import Navbar from './components/navbar'
import { FaFacebookF, FaInstagram, FaPinterest, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </main >
      <Footer />
    </>
  )
}
