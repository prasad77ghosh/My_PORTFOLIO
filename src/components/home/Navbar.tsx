"use client";
import Link from "next/link";
import { useState } from "react";
import { HiArrowLeftCircle } from "react-icons/hi2";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";
import { Menu } from "@/utils/menu";
import Tooltip from "../general/Tooltip";
import { usePathname } from "next/navigation";
import ProfilePic from "../../../public/Profile_2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <nav
      className={`min-h-screen bg-secondary_clr ${
        isOpen ? "w-[11.5rem]" : "w-[5rem]"
      } relative transition-all ease-out duration-300 text-txt_primary px-1`}
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
            isOpen ? `basis-[15%] p-4` : `basis-[10%] p-[0.3rem] mt-2`
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
            isOpen ? `basis-[70%]` : `basis-[80%]`
          } flex flex-col justify-around px-2`}
        >
          {Menu.map((item) => {
            const isActive = pathname.startsWith(item.link);
            return (
              <Link
                href={item.link}
                key={item.id}
                className={`flex items-center gap-5 ${
                  !isOpen ? `justify-center py-3` : `px-2 py-[0.8rem]`
                } bg-tertiary_clr bg-opacity-5 rounded-lg hover:bg-opacity-30 hover:text-tertiary_clr hover:transition-all hover:ease-out hover:duration-300 ${
                  isActive && "bg-opacity-30 text-tertiary_clr"
                }`}
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
            );
          })}
        </div>
        <div
          className={` ${
            isOpen ? `basis-[15%]` : "basis-[13%]"
          } flex flex-col justify-center`}
        >
          <div
            className={`flex items-center gap-5 px-4 py-3 cursor-pointer ${
              !isOpen && "justify-center"
            }`}
          >
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
