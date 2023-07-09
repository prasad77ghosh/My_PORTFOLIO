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
  },
  {
    id: 2,
    link: "/about",
    title: "About",
    icon: FiUser,
  },
  {
    id: 3,
    link: "/resume",
    title: "Resume",
    icon: FiFileText,
  },
  {
    id: 4,
    link: "/portfolio",
    title: "Portfolio",
    icon: FiBriefcase,
  },
  {
    id: 5,
    link: "/blog",
    title: "Blog",
    icon: FiBook,
  },
  {
    id: 6,
    link: "/contact",
    title: "Contact",
    icon: FiPhone,
  },
];
