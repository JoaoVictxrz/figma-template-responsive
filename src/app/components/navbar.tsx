"use client";
import { useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="bg-greenLemon text-white fixed w-full px-16 py-5 flex justify-between items-center md:px-32">
            <div className="">
                <Image src="/Logo.png" width={129} height={38} alt="Logo" />
            </div>
            <div className="hidden md:flex items-center">
                <ul className="flex gap-10 font-extralight text-3xl">
                    <Link href='/'>Home</Link>
                    <Link href='/portfolio'>Portfolio</Link>
                    <Link href='/services'>Services</Link>
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
                        <Link href='/' className="listNavBar">Home</Link>
                        <Link href='/portfolio' className="listNavBar">Portfolio</Link>
                        <Link href='/services' className="listNavBar">Services</Link>
                        <li className="listNavBar"><a href="">Contact</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
}
