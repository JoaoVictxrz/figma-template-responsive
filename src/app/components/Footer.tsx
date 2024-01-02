import { FaFacebookF, FaInstagram, FaPinterest, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className='bg-greenLemon w-full h-32 flex flex-col items-center justify-center md:grid md:grid-cols-2 md:pl-[20%]'>
                <div className='flex text-white gap-5 text-xl'>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaPinterest />
                    <FaTiktok />
                    <FaWhatsapp />
                    <FaYoutube />
                </div>
                <div className='pt-3'>
                    <span className='text-white text-xl font-extralight'>© Start, 2022. All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}
