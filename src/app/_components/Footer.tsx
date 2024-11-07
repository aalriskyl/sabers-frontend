"use client";
import Link from "next/link"
import Image from 'next/image'
import Linked from "../../../public/img/linkedin.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Facebook from "../../../public/img/facebook.png";
import Twitter from "../../../public/img/twitter.png";
import Logo from "../../../public/img/SabersWhite.png";


export default function Footer() {
    return (
        <footer className="w-full h-auto bg-[#012D9A] overflow-hidden">
            <section id="container" className=" w-full mx-auto md:max-w-8xl">
                <div className="font-spaceGrotesk flex flex-col">
                    <div id="title" className="md:pt-[75px] pt-[34px] flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
                        <h1 className="text-[40px] md:ml-[160px] w-[305px] md:w-[602px] md:h-[300px] text-[#FFFFFF] md:text-right text-center md:text-[96px] font-medium md:leading-[150px] md:tracking-[-0.025em]">Want to Start a Project?</h1>
                        <div id="desktop_wrapper" className="flex flex-col md:mr-[156px] gap-[22px]">
                            <div id="contacts" className="hidden md:flex ml-auto items-center md:gap-[22px]">
                                <Image src={Linked} alt="linked_in" />
                                <Image src={Facebook} alt="Facebook" />
                                <Image src={Twitter} alt="Twitter" />
                            </div>
                            <div id="phone" className="hidden md:flex flex-col md:gap-[14px] items-end justify-end font-epilogue leading-[24px] text-[14px] text-white pb-[32px]">
                                <h1>(+62) 21 8243 6541</h1>
                                <h1>tsupport@sabers.co.id</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-[22px] pb-[33px] md:pt-[23px]">
                        <Link href="/contact-us" className="flex items-center justify-between py-2 px-2 bg-[white] font-bold font-spaceGrotesk text-[14px] md:text-[22px] leading-[27px] md:leading-[36px] tracking-[-0.025em] text-[#012D9A] rounded-[100px] hover:underline hover:underline-offset-4 hover:transition-all hover:ease-in-out hover:duration-500">
                            <span className="mr-3 ml-4">Let&apos;s Talk</span>
                            <span className="flex items-center justify-center w-[21px] h-[21px] md:w-[44px] md:h-[44px] rounded-full bg-[#FE0000]">
                                <FaArrowRightLong size={20} className="hidden md:flex text-white" />
                                <FaArrowRightLong size={8} className="md:hidden text-white" />

                            </span>
                        </Link>
                    </div>
                    <div id="contacts" className="md:hidden flex mx-auto items-center mb-[22px] md:mr-[154px] gap-[17px] md:gap-[22px]">
                        <Image src={Linked} alt="linked_in" className="w-[40px] md:w-full" />
                        <Image src={Facebook} alt="Facebook" className="w-[40px] md:w-full" />
                        <Image src={Twitter} alt="Twitter" className="w-[40px] md:w-full" />
                    </div>
                    <div id="phone" className="md:hidden flex flex-col mx-auto gap-[14px] items-center justify-center font-epilogue leading-[24px] text-[14px] text-white pb-[32px]">
                        <h1>(+62) 21 8243 6541</h1>
                        <h1>tsupport@sabers.co.id</h1>
                    </div>
                    <div id="logo-nav" className="md:flex md:pt-[53px] items-center justify-center md:justify-between md:mx-[160px] md:pb-[16px] mb-[30px]">
                        <Image src={Logo} alt="sabers" className="mx-auto md:mx-0 w-2/6 md:mr-auto md:w-auto" />
                        <div className="gap-[42px] hidden md:flex font-spaceGrotesk text-[18px] text-left text-white">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/project">Project</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                    <div id="line" className="hidden md:flex w-[1131px] h-[3px] bg-white opacity-20 mx-auto mb-[24px]">
                    </div>
                    <div id="copyright" className="hidden md:flex w-full h-auto md:mb-[30px]">
                        <div className="hidden md:mx-auto md:flex font-epilogue text-[15px] text-white">
                            <h1>© 2024 Sumber Artho Bersaudara. All rights reserved</h1>
                        </div>
                    </div>
                </div>

            </section>
        </footer>
    );
};