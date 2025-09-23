"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { motion } from "framer-motion";

import { GoHomeFill } from "react-icons/go";
import { BsFillCreditCardFill, BsImage } from "react-icons/bs";
import { TiVideo } from "react-icons/ti";
import { ImMagicWand } from "react-icons/im";
import { IoPencil } from "react-icons/io5";
import { PiCompassTool } from "react-icons/pi";
import { FaDiscord, FaFolder } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { ImageIcon, Headset, Bell, SunDim } from "lucide-react";

import HoverCard from "@/app/_components/HoverCard";
import Logo from "@/app/_components/Logo";
import Avatar from "@/app/_components/ui/Avatar";
import { useDarkMode } from "@/app/_context/useDarkMode";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const Navigation = () => {
  const pathname = usePathname();
  const [isHoveringHome, setIsHoveringHome] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const navItems = [
    { route: "/", icon: GoHomeFill, name: "Home" },
    { route: "/image", icon: BsImage, name: "Image" },
    { route: "/video", icon: TiVideo, name: "Video" },
    { route: "/enhancer", icon: ImMagicWand, name: "Enhancer" },
    { route: "/realtime", icon: IoPencil, name: "Realtime" },
    { route: "/edit", icon: PiCompassTool, name: "Edit" },
    { route: "/asset", icon: FaFolder, name: "Asset" },
  ];

  function handleDropDown() {
    setIsDropdownOpen((prev) => !prev);
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="flex items-center justify-between w-full px-4 py-3 bg-white dark:bg-black md:px-6 lg:py-2 lg:bg-transparent">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          <motion.div className="flex items-center justify-center gap-8 ">
            <Logo />
            <div className="relative">
              <div className="items-center hidden space-x-3 cursor-pointer lg:flex">
                <Avatar />
                <p className="text-[1rem] font-normal">henrydave812</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle nav */}
        <div className="hidden lg:flex justify-center items-center p-[6px] bg-gray-100 dark:bg-[#1c1c1c] rounded-2xl z-50 ml-16 ">
          {navItems.map((item, index) => {
            const isActive = pathname === item.route;
            const isHome = item.route === "/";

            return (
              <>
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => {
                    if (isHome) setIsHoveringHome(true);
                  }}
                >
                  <Link href={item.route}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative p-3 px-5 rounded-2xl transition-colors  ${
                        isActive
                          ? "bg-white text-black shadow-sm"
                          : "hover:bg-gray-50 hover:dark:bg-[#181818]"
                      }`}
                    >
                      <item.icon size={17} />

                      {/* Tooltip for non-home icons */}
                      {!isHome && (
                        <div
                          className={`absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-100 dark:bg-[#1c1c1c] px-2 flex justify-center items-center text-[.8rem] font-medium rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
                        >
                          {item.name}
                        </div>
                      )}
                    </motion.button>
                  </Link>
                </div>
              </>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="items-center hidden gap-2 px-2 py-1 font-medium text-black transition-colors bg-gray-100 dark:bg-[#1c1c1c] lg:flex justify-ceter rounded-xl dark:text-white"
          >
            <ImageIcon size={17} />
            Gallery
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="items-center hidden gap-2 px-2 py-1 font-medium transition-colors bg-gray-100 dark:bg-[#1c1c1c] lg:flex justify-ceter rounded-xl"
          >
            <Headset size={17} />
            Support
          </motion.button>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="items-center hidden gap-2 p-2 font-medium transition-colors bg-gray-100 dark:bg-[#1c1c1c] rounded-lg lg:flex justify-ceter"
            >
              <Bell size={17} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={toggleDarkMode}
              className="flex items-center gap-2 p-2 font-medium transition-colors bg-gray-100 dark:bg-[#1c1c1c] rounded-lg justify-ceter"
            >
              {isDarkMode ? <IoMdMoon /> : <IoMdSunny size={17} />}
            </motion.button>
            <motion.div
              whileHover={{ scale: 1 }}
              onClick={() => handleDropDown()}
            >
              <Avatar />
            </motion.div>

            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute w-48 p-1 mt-2 overflow-hidden bg-white dark:bg-[#1c1c1c] rounded-lg shadow-md top-12 right-6 "
              >
                <Link
                  href=""
                  className="flex items-center w-full px-2 py-2 space-x-3 text-left transition-colors rounded-lg hover:bg-gray-100"
                >
                  <RiSettings4Fill />
                  <span>Manage Account</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center w-full px-2 py-2 space-x-3 transition-colors rounded-lg hover:bg-gray-100"
                >
                  <BsFillCreditCardFill />
                  <span>Plans & Pricing</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center w-full px-2 py-2 space-x-3 transition-colors rounded-lg hover:bg-gray-100"
                >
                  <FaDiscord />
                  <span>Join community</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center w-full px-2 py-2 space-x-3 transition-colors rounded-lg hover:bg-gray-100"
                >
                  <LuLogOut />
                  <span>Logout</span>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {isHoveringHome && (
        <div className="fixed -top-[.7%] left-0 right-0  w-full flex justify-center items-center  ">
          <HoverCard setIsHoveringHome={setIsHoveringHome} />
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;
