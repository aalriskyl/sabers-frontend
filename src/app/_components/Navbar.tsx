"use client";
import React, { useState } from "react";
import LogoSabers from "../../../public/img/logo.png";
import Link from "next/link";
import Image from 'next/image';

export default function Nav() {
    const [navOpen, setNavOpen] = useState(false);

    const handleNavToggle = () => {
        setNavOpen(!navOpen);
    };

    return (
        <main className=" md:max-w-8xl md:mx-auto md:h-[100px] overflow-hidden md:animate-fadeInSlideUp">
            <nav className="ml-[17px] mr-[24px] md:ml-[156px] md:mr-[163px] md:mb-[23px] mt-[13px] md:mt-[29px] mb-[14px]">
                <div className="flex items-center justify-between md:justify-between md:gap-[42px]">
                    <Image src={LogoSabers} className="w-[106px] md:w-[156px] mr-[208px] md:mr-auto" alt="Logo Sabers" />

                    {/* Flex container for nav links */}
                    <div className="hidden md:flex flex-grow items-center justify-center space-x-8">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                    </div>

                    {/* Contact Us button */}
                    <Link
                        className="hidden md:flex border border-[#FE0000] bg-[#FE0000] text-[14px] text-white font-bold px-10 py-3 rounded-[81px] hover:bg-white hover:text-[#FE0000] transition-all duration-300 ease-in-out"
                        href="/contact-us"
                    >
                        Contact Us
                    </Link>

                    {/* Hamburger for Mobile */}
                    <div className="md:hidden">
                        <button onClick={handleNavToggle} className="focus:outline-none">
                            {navOpen ? (
                                <span className="text-2xl text-red-600">X</span>
                            ) : (
                                <div className="space-y-1.5">
                                    <span className="block w-5 h-0.5 bg-red-600"></span>
                                    <span className="block w-5 h-0.5 bg-red-600"></span>
                                    <span className="block w-5 h-0.5 bg-red-600"></span>
                                </div>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {navOpen && (
                    <div className="fixed max-h-96 inset-0 bg-white z-50 flex flex-col items-center py-4">
                        <button onClick={handleNavToggle} className="relative top-0 text-red-600 text-2xl mb-4">
                            X
                        </button>
                        <Link href="/" className="text-lg mb-2 " onClick={handleNavToggle}>Home</Link>
                        <Link href="/about" className="text-lg mb-2" onClick={handleNavToggle}>About</Link>
                        <Link href="/services" className="text-lg mb-2" onClick={handleNavToggle}>Services</Link>
                        <Link
                            className="border border-[#FE0000] bg-[#FE0000] text-white text-[14px] font-bold px-6 py-2 rounded-[81px] hover:bg-white hover:text-[#FE0000] transition-all duration-300 ease-in-out"
                            href="/contact-us"
                            onClick={handleNavToggle}
                        >
                            Contact Us
                        </Link>
                    </div>
                )}
            </nav>
        </main>
    );
}
