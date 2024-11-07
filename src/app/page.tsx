"use client";
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Combined from "../../public/img/grouped-vector-bg.png";
import Mobile from "../../public/img/grouped-mobile.png";
import MapStatic from "../../public/img/map-static.png";
import CTA from "../../public/img/CTA.png";
import CTAMobile from "../../public/img/CTA-Mobile.png";
import IconMobile from "../../public/img/iconmobile.png";
import IconDesk from "../../public/img/icondesk.png";
import Hook from "../../public/img/crane-hook.png";
import MapDesktopStatic from "../../public/img/map-desktop-static.png";
import Dummy1 from "../../public/img/dummy-1.png";
import Nav from "./_components/Navbar";
import Link from "next/link";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Footer from './_components/Footer';
import CountUp from 'react-countup';
import { motion, useInView, useScroll, } from 'framer-motion';


export default function Home() {
  const iconsRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [itemOffsets, setItemOffsets] = useState<number[]>([]);
  const [isDesktop, setIsDesktop] = useState<boolean>(true); // Track if screen is desktop
  const itemsRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '0%' });
  const { scrollY } = useScroll();
  useEffect(() => {
    if (iconsRef.current) {
      // Ensure the scroll resets if needed
      const handleScroll = () => {
        if (iconsRef.current) {
          const scrollLeft = iconsRef.current.scrollLeft;
          const scrollWidth = iconsRef.current.scrollWidth;
          const clientWidth = iconsRef.current.clientWidth;

          if (scrollLeft >= scrollWidth - clientWidth) {
            iconsRef.current.scrollLeft = 0; // Reset scroll position
          }
        }
      };

      const interval = setInterval(handleScroll, 100); // Check every 100ms
      return () => clearInterval(interval);
    }
  }, [iconsRef]);
  // Detect screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = () => setIsDesktop(mediaQuery.matches);

    handleResize(); // Set initial value based on screen size
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    // Calculate offsets for each carousel item
    if (itemsRef.current) {
      const items = Array.from(itemsRef.current.children) as HTMLDivElement[];
      const offsets = items.map(
        item => item.getBoundingClientRect().x - itemsRef.current!.getBoundingClientRect().x
      );
      setItemOffsets(offsets);
    }
  }, [itemsRef.current, selectedIndex]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between children
      },
    },
  };
  const scrollingVariants = {
    animate: {
      x: ['0%', '-100%'], // Animate from 0% to -100% (full width)
      transition: {
        duration: 20, // Adjust this value for speed
        ease: 'linear',
        repeat: Infinity, // Repeat indefinitely
      },
    },
  };
  // Variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  // Handle Next and Previous buttons
  const handleNext = () => {
    if (isDesktop) {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % 4);
    } else if (itemsRef.current) {
      const nextIndex = (selectedIndex + 1) % 4;
      itemsRef.current.scrollTo({
        left: itemOffsets[nextIndex],
        behavior: 'smooth'
      });
      setSelectedIndex(nextIndex);
    }
  };

  // Handle Previous button
  const handlePrev = () => {
    if (isDesktop) {
      setSelectedIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
    } else if (itemsRef.current) {
      const prevIndex = selectedIndex === 0 ? 3 : selectedIndex - 1;
      itemsRef.current.scrollTo({
        left: itemOffsets[prevIndex],
        behavior: 'smooth'
      });
      setSelectedIndex(prevIndex);
    }
  };

  const topToBottomVariant = {
    hidden: { y: -50, opacity: 0 }, // start off-screen (top) with no opacity
    visible: { y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } } // animate to original position
  };


  return (
    <main className="w-full h-auto min-h-screen ">
      <Nav />
      <section id="hero" className="md:max-w-8xl mx-auto">
        {/* Header */}
        <motion.div
          id="content"
          className="content relative md:bg-transparent bg-[#DFE2EC] rounded-[30px] md:h-auto md:min-h-full min-h-screen animate-fadeInSlideUp"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Desktop Image */}
          <Image src={Combined} className="md:block hidden" alt="image" />

          {/* Mobile Image */}
          <div className="flex items-center justify-center">
            <Image src={Mobile} className="w-full h-auto md:hidden object-cover relative" alt="image" />
          </div>

          {/* Text Content */}
          <motion.div className="absolute flex items-center md:items-start flex-col inset-0" variants={containerVariants}>
            <motion.h1
              className="text-[32px] mt-[27px] w-[334px] md:text-left text-center md:w-[630px] md:ml-[159px] md:text-[64px] md:mt-[110px] md:leading-[84px] mb-[15px] text-[#012D9A] opacity-80 font-bold font-spaceGrotesk text-4xl"
              variants={itemVariants}
            >
              Expert Construction Service for Every Project
            </motion.h1>

            <motion.div className="flex text-center md:text-left flex-col items-center justify-center md:flex md:items-start md:justify-normal font-epilogue text-[#5F5F5F]" variants={itemVariants}>
              <motion.p
                className="md:ml-[159px] w-[311px] md:w-[495px] md:mt-[34px] text-sm md:text-[20px] mb-[15px]"
                variants={itemVariants}
              >
                General Contractor, Civil Electrical, Power Systems and Telecommunication Network
              </motion.p>

              <motion.div
                className="md:ml-[159px] flex w-[303px] items-center md:w-[392px] md:gap-4 gap-2"
                variants={containerVariants}
              >
                {/* Client Count */}
                <motion.div
                  className="flex px-6 py-1 md:py-2 md:px-8 md:w-3/6 items-center justify-center w-2/6 border rounded-[30px] border-[#012D9A]"
                  variants={itemVariants}
                >
                  <CountUp
                    start={0}
                    end={20}
                    duration={3.5}
                    className="font-spaceGrotesk text-[16px] text-[#012D9A] md:text-[24px] font-medium leading-none flex items-center justify-center tracking-normal"
                  />
                  <p className="font-spaceGrotesk text-[16px] text-[#012D9A] md:text-[20px] font-medium leading-none flex items-center justify-center tracking-normal mr-2">+</p>
                  <span className="font-epilogue relative top-[1px] md:top-[2px] text-[#012D9A] font-normal flex items-center justify-center md:text-[20px] text-[12px] leading-none md:w-[392px]">
                    Clients
                  </span>
                </motion.div>

                {/* Project Count */}
                <motion.div
                  className="flex px-6 py-1 md:py-2 md:px-8 w-full items-center justify-center border rounded-[30px] border-[#012D9A]"
                  variants={itemVariants}
                >
                  <CountUp
                    start={0}
                    end={10}
                    duration={3.5}
                    className="font-spaceGrotesk text-[16px] text-[#012D9A] md:text-[24px] font-medium leading-none flex items-center justify-center tracking-normal"
                  />
                  <p className="font-spaceGrotesk text-[16px] text-[#012D9A] md:text-[20px] font-medium leading-none flex items-center justify-center tracking-normal mr-1">+</p>
                  <span className="font-epilogue relative top-[1px] md:top-[2px] text-[#012D9A] font-normal flex items-center justify-center md:text-[20px] text-[12px] leading-none md:w-[185px]">
                    Project Completed
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative md:left-0 z-10">
          <div className={`hidden md:px-12 md:py-8 md:-top-[92px] md:rounded-tr-[60px] md:block md:absolute md:left-0 px-4 py-4 -top-[40px] left-[90px] bg-white rounded-[60px] md:rounded-tl-none`}>
            <div
              id="contact-top-left"
              className={`md:absolute md:left-0 md:-top-[47px] md:z-50 md:w-12 md:h-12 md:bg-white [mask-image:radial-gradient(circle_at_100%_0%,transparent_0,transparent_71%,black_71%)]`}
            ></div>
            <div
              id="contact-top-right"
              className={`md:absolute md:-right-[60px] md:bottom-[56px] md:z-50 md:w-16 md:h-16 md:bg-white md:[mask-image:radial-gradient(circle_at_100%_0%,transparent_0,transparent_71%,black_71%)]`}
            ></div>
            <motion.button
              className="hidden md:w-[612px] md:flex md:items-center md:justify-between md:py-4 font-bold bg-[#FE0000] rounded-full text-[#FFF7F7] font-epilogue md:text-[34px] hover:bg-white hover:text-[#FE0000] transition-all duration-300 transform ease-in-out hover:border-2 border-[#FE0000] border-2"
              whileHover={{ scale: 1.05 }} // Optional: subtle scaling effect on hover
            >
              <span className="flex-1 text-center md:ml-20">Contact Us</span>
              <motion.div
                whileHover={{

                  transition: { duration: 0.5, repeat: Infinity },
                }}
                className="mr-8"
              >
                <IoIosArrowForward size={40} />
              </motion.div>
            </motion.button>
          </div>
          <div className="md:hidden items-center justify-center flex h-[72px] -top-8 relative bg-white w-[206px] mx-auto rounded-[80px]">
            <div
              id="contact-top-left"
              className={`absolute -left-[13px] top-[11px] z-50 w-4 h-6 bg-white [mask-image:radial-gradient(circle_at_0%_0%,transparent_0,transparent_71%,black_71%)]`}
            ></div>
            <div
              id="contact-top-right"
              className={`absolute -right-[13px] top-[11px] z-50 w-4 h-6 bg-white [mask-image:radial-gradient(circle_at_100%_0%,transparent_0,transparent_71%,black_71%)]`}
            ></div>
            <button className="md:hidden w-[170px] flex items-center justify-center py-3 font-bold bg-[#FE0000] rounded-full text-[#FFF7F7] font-epilogue text-[14px] hover:bg-white hover:text-[#FE0000] transition-all duration-300 transform ease-in-out hover:border-2 border-[#FE0000] border-2">Contact Us</button>
          </div>
        </div>
        {/* About */}
        <motion.div
          ref={ref}
          id="about"
          className="flex flex-col mx-[24px] md:items-center md:justify-center z-50 md:mx-[174px] md:mt-20 md:mb-[133px]"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Animate when in view
          variants={containerVariants}
        >
          <motion.h1
            className="font-medium font-spaceGrotesk md:text-[16px] text-[#FE0000] tracking-widest"
            variants={itemVariants}
          >
            WHO ARE WE
          </motion.h1>

          <motion.h1
            className="text-[#012D9A] md:text-black font-bold text-[32px] leading-[36px] md:mb-[16px] mb-[21px] text-left font-spaceGrotesk md:text-[36px] md:leading-[84px]"
            variants={itemVariants}
          >
            PT Sumber Artho Bersaudara
          </motion.h1>

          <motion.p
            className="md:items-center font-normal text-[14px] md:text-center mb-[21px] md:mt-[16px] text-[#808080] font-epilogue md:text-[18px] md:mb-[32px]"
            variants={itemVariants}
          >
            PT. Sumber Artho Bersaudara is a dynamic company specializing in Civil, Contractor Civil, Electrical Power Systems, and Telecommunication Network services. With a commitment to excellence and a focus on delivering high-quality solutions, we pride ourselves on our expertise and dedication to meeting the diverse needs of our clients.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }} // Adds scale effect on hover
              transition={{ duration: 0.3 }} // Optional: duration of the scaling effect
            >
              <Link
                href="/about-us"
                className="text-center mr-auto md:mx-auto px-16 py-3 border-2 text-[#FE0000] border-[#FE0000] rounded-full bg-white font-epilogue md:text-[20px] font-medium hover:bg-[#FE0000] hover:text-white transition-all duration-300 transform ease-in-out"
              >
                See Details
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Animate when in view
          variants={containerVariants}
          id="our-project"
          className="flex flex-col mt-[53px] mx-[16px] md:mx-0">
          <div className="flex gap-4 mb-[43px] md:mb-[35px]">
            <motion.h1
              variants={itemVariants}
              className="font-bold font-spaceGrotesk text-[28px] md:text-[36px] leading-[120%] md:ml-[159px] text-[#012D9A]">
              Our Project
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="font-bold bg-[#EEEEEE] text-[28px] font-spaceGrotesk md:text-[36px] leading-[120%] text-[#012D9A]">
              Footprints
            </motion.h1>
          </div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'} // Animate when in view
            variants={containerVariants}
            className="relative w-full">
            <motion.div
              variants={itemVariants}
              className="md:mx-[106px] bg-[#EEEEEE] rounded-br-[52px] rounded-bl-[52px]">
              <div className=" relative bg-[#012D9A] w-full h-[134px] rounded-br-[52px] rounded-bl-[52px]">
                <div className="relative w-full mx-auto">
                  <Link href="/projects" className="bg-[#FE0000] hover:bg-white hover:text-[#FE0000] hover:outline-[#FE0000] hover:outline-4 rounded-[120px] w-[115px] -bottom-[115px] px-4 py-2  flex items-center justify-center relative mx-auto h-[37px] outline outline-[7px] outline-[#EEEEEE] text-white  transition-all duration-300 transform ease-in-out">
                    <span className="font-spaceGrotesk font-bold text-[14px] flex items-center text-center">SEE MORE
                      <IoIosArrowForward size={17} className="" />
                    </span>
                  </Link>
                </div>
              </div>
              <Image src={MapStatic} alt="map-static" className="md:hidden object-cover h-auto w-full mx-auto" />
              <div className="w-full">
                <Image src={MapDesktopStatic} alt="map-desktop-static" className="hidden md:flex md:object-cover w-full h-auto mx-auto" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Project Milestone */}
        <motion.div className="flex flex-col md:flex-row mt-[80px] mx-[16px] md:items-center md:mt-[128px] md:ml-[159px] md:mb-[23px]">
          <div className="flex flex-row md:flex-col relative md:mr-auto">
            <h1 className="font-bold z-50 font-spaceGrotesk md:text-[36px] bg-[#EEEEEE] px-2 relative right-2 text-[28px] leading-[120%] text-[#012D9A]">Project</h1>
            <h1 className="font-bold font-spaceGrotesk text-[28px] md:text-[36px] right-2 relative leading-[120%] text-[#012D9A]">Milestone</h1>
          </div>
          <div className="mt-[19px] md:mr-[166px] md:w-[304px]">
            <p className="font-epilogue text-[18px] text-[#5F5F5F]">General Contractor, Civil Electrical, Power Systems and Telecomunication Network</p>
          </div>
        </motion.div>
        {/* Crane */}
        <div className="flex mx-auto flex-col md:mx-[159px] overflow-hidden mt-[36px]">
          {/* Desktop Navigation Buttons */}
          <div id="button" className="hidden md:flex items-center justify-end gap-[30px] md:mb-[99px] md:mr-[165px]">
            <div
              id="button-left"
              onClick={handlePrev}
              className="flex justify-center items-center border-2 border-[#D9D9D9] w-[48px] h-[48px] rounded-full cursor-pointer"
            >
              <FaArrowLeftLong size={15} className="text-[#D9D9D9]" />
            </div>
            <div
              id="button-right"
              onClick={handleNext}
              className="flex justify-center items-center bg-[#FE0000] border-2 border-[#FE0000] w-[48px] h-[48px] rounded-full cursor-pointer"
            >
              <FaArrowRightLong size={15} className="text-[#D9D9D9]" />
            </div>
          </div>

          {/* Line and Hook */}
          <div id="line-wrapper" className="w-full md:max-w-8xl flex flex-col relative mx-auto overflow-visible">
            <div id="line" className="flex bg-[#D6DBEA] border-2 border-[#D6DBEA]" />
            <motion.div
              id="hooks"
              className="relative flex items-center -top-[6px] md:-top-[6px] md:left-[90px]"
              animate={isDesktop ? { x: itemOffsets[selectedIndex] || 0 } : { x: "42%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ transform: isDesktop ? "" : "translateX(-50%)" }} // Keep centered on mobile
            >
              <div className="relative z-0">
                <Image src={Hook} alt="hook" />
              </div>
            </motion.div>

            {/* Image Carousel */}
            <div
              id="images"
              ref={itemsRef}
              className="flex md:max-w-8xl md:items-center md:justify-center gap-[24px] flex-row md:gap-[40px] z-50 md:mb-[88px] overflow-visible snap-x snap-mandatory scrollbar-hide"
            >
              {[Dummy1, Dummy1, Dummy1, Dummy1].map((src, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer flex-shrink-0 md:w-[247px] w-auto snap-center"
                  onClick={() => handleSelect(index)}
                >
                  <Image
                    src={src}
                    alt={`dummy${index}`}
                    className={`rounded-[40px] md:rounded-[55px] transition-transform duration-300 ease-in-out ${selectedIndex === index ? '-translate-y-4' : 'translate-y-0'}`}
                  />
                  {selectedIndex === index && (
                    <div
                      className={`absolute inset-0 w-full bg-[#D9D9D9] rounded-[40px] md:rounded-[55px] transition-opacity duration-500 ease-in-out ${selectedIndex === index ? 'opacity-70 -translate-y-4' : 'opacity-0 translate-y-0'}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div id="button" className="md:hidden flex items-center justify-center mt-[38px] mb-[73px] gap-[30px]">
            <div
              id="button-left"
              onClick={handlePrev}
              className="flex justify-center items-center border-2 border-[#D9D9D9] w-[48px] h-[48px] rounded-full cursor-pointer"
            >
              <FaArrowLeftLong size={15} className="text-[#D9D9D9]" />
            </div>
            <div
              id="button-right"
              onClick={handleNext}
              className="flex justify-center items-center bg-[#FE0000] border-2 border-[#FE0000] w-[48px] h-[48px] rounded-full cursor-pointer"
            >
              <FaArrowRightLong size={15} className="text-[#D9D9D9]" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div id="CTA" className="w-full mb-[61px]">
          <div className="relative flex items-center justify-center mx-[19px] md:mx-[149px]">
            <Image src={CTA} alt="cta-1" className="hidden md:flex" />
            <div>
              <Image src={CTAMobile} alt="cta-2" className="md:hidden flex" />
            </div>
            <div className="absolute flex flex-col items-center justify-center w-[314px] text-center md:w-[618px]">
              <h1 className="font-spaceGrotesk font-bold text-[32px] leading-[50px] text-white">Expert Construction Service For Every Project</h1>
              <Link href="/contact-us" className="px-8 py-2 bg-[#FF0000] font-medium font-spaceGrotesk text-white mt-[15px] rounded-[70px]">Contact Us</Link>
            </div>
          </div>
        </div>
        {/* Icons */}
        <div id="icons" className="flex flex-col w-full overflow-hidden">
          <div className="relative font-spaceGrotesk font-bold md:mx-auto mx-[19px] md:text-[36px] text-[28px] text-[#012D9A] mb-[26px]">
            <h1 className="md:hidden mr-1 px-1 py-1 flex -left-1 w-[112px] relative bg-[#EEEEEE]">Trusted
              <span className="md:hidden ml-1">By</span>
            </h1>
            <h1 className="md:hidden">The 10+ Companies</h1>
            <h1 className="hidden md:flex">Trusted By The 10+ Companies</h1>
          </div>
          <div className="w-full flex overflow-hidden">
            <div className="flex md:scroll-x space-x-4 mb-[83px] md:mx-[116px] w-[200%] md:mb-[83px]">
              {/* Original Icons */}
              <Image src={IconDesk} alt="icons" className="hidden md:flex w-full h-auto object-cover" />
              <Image src={IconMobile} alt="icons" className="md:hidden mx-auto object-cover" />
              <div className="hidden md:flex">
                <Image src={IconDesk} alt="icons" className="hidden md:flex w-full h-auto object-cover" />
                <Image src={IconMobile} alt="icons" className="md:hidden mx-auto object-cover" />
              </div>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </main>
  );
}