"use client";
import Link from "next/link";
import { useState } from "react";
import { HiArrowLeftCircle } from "react-icons/hi2";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";
import { Menu } from "@/utils/menu";
import Tooltip from "../general/Tooltip";
import ProfilePic from "../../../public/Profile_2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav
      className={`min-h-screen bg-secondary_clr ${
        isOpen ? "w-[10.5rem]" : "w-[5rem]"
      } relative transition-all ease-out duration-300 text-txt_primary`}
    >
      <div
        className={`absolute -right-3 text-[1.5rem] top-[5rem] cursor-pointer ${
          isOpen ? "rotate-0 top-[7rem]" : "rotate-180 top-[5rem]"
        } transition-all ease-out duration-300 hover:text-[1.7rem] hover:text-tertiary_clr text-tertiary_muted_clr`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiArrowLeftCircle />
      </div>
      <div className="flex flex-col h-full">
        <div
          className={` ${
            isOpen ? `basis-[15%] p-4` : `basis-[10%] p-[0.6rem]`
          }`}
        >
          <Image
            src={ProfilePic}
            alt="Profile Pic"
            className="rounded-full border-[2px] border-tertiary_muted_clr cursor-pointer hover:border-tertiary_clr hover:border-[3px] transition-all ease-out duration-300 rotate-1"
            width={150}
            height={150}
          />
        </div>
        <div
          className={`mt-4 ${
            isOpen ? `basis-[65%]` : `basis-[70%]`
          } flex flex-col justify-around px-2`}
        >
          {Menu.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex items-center gap-5 px-4 py-3"
            >
              {isOpen ? (
                <>
                  <item.icon size={23} />
                </>
              ) : (
                <>
                  <Tooltip text={item.title} orientation="right">
                    <item.icon size={24} />
                  </Tooltip>
                </>
              )}

              {isOpen && <p className="text-[1rem]">{item.title}</p>}
            </Link>
          ))}
        </div>
        <div className="basis-[18%] mt-4 px-2 flex flex-col justify-center">
          <div className="flex items-center gap-5 px-4 py-3 cursor-pointer">
            {isOpen ? (
              <>
                <FiSettings size={23} />
              </>
            ) : (
              <>
                <Tooltip text="Setting" orientation="right">
                  <FiSettings size={23} />
                </Tooltip>
              </>
            )}

            {isOpen && <p className="text-[1rem]">Setting</p>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
