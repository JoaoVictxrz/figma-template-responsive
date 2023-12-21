import { useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="bg-greenLemon text-white px-16 py-5 flex justify-between items-center">
            <div className="">
                <Image src="/Logo.png" width={129} height={38} alt="Logo" />
            </div>
            <div className="hidden md:flex items-center float-right">
                <ul className="flex gap-10 font-extralight text-lg">
                    <li><a href="">Home</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div onClick={handleClick} className="md:hidden cursor-pointer fixed right-8">
                {isOpen ? (
                    <div className="fixed right-6 top-6">
                        <IoClose size={50} />
                    </div>
                ) : (
                    <LuAlignJustify size={50} />
                )}
            </div>
            {isOpen && (
                <div className="md:hidden w-full h-auto flex justify-center items-center pt-10">
                    <ul className="flex flex-col gap-5 items-center font-semi-bold text-lg ">
                        <li className="listNavBar"><a href="">Home</a></li>
                        <li className="listNavBar"><a href="">Portfolio</a></li>
                        <li className="listNavBar"><a href="">Services</a></li>
                        <li className="listNavBar"><a href="">Contact</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
}
