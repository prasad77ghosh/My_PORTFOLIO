import {
  FiHome,
  FiUser,
  FiFileText,
  FiBriefcase,
  FiBook,
  FiPhone,
} from "react-icons/fi";
import { MENU } from "../types";

export const Menu: MENU[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
    icon: FiHome,
    isActive: false,
  },
  {
    id: 2,
    link: "/about",
    title: "About",
    icon: FiUser,
    isActive: false,
  },
  {
    id: 3,
    link: "/resume",
    title: "Resume",
    icon: FiFileText,
    isActive: false,
  },
  {
    id: 4,
    link: "/portfolio",
    title: "Portfolio",
    icon: FiBriefcase,
    isActive: false,
  },
  {
    id: 5,
    link: "/blog",
    title: "Blog",
    icon: FiBook,
    isActive: false,
  },
  {
    id: 6,
    link: "/contact",
    title: "Contact",
    icon: FiPhone,
    isActive: false,
  },
];
