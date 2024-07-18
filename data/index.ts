import { IconType } from 'react-icons';
import { FaHome, FaInfoCircle, FaQuestionCircle, FaPhone, FaLightbulb, FaTrophy, FaDownload, FaGamepad } from 'react-icons/fa';
import homebg from '@/public/home/homebg.jpg'
import aboutbg from '@/public/home/aboutusimg.jpg'
import bannersvg from "@/public/home/banner.svg"

import WhyUsSecure from "@/public/WhyUs/WhyUsSecure.webp"
import WhyUsService from "@/public/WhyUs/WhyUsService.webp"
import WhyUsLanguage from "@/public/WhyUs/WhyUsLanguage.webp"
import WhyUsNoBot from "@/public/WhyUs/WhyUsNoBot.webp"


export {WhyUsSecure, WhyUsService, WhyUsLanguage, WhyUsNoBot}

export {homebg, aboutbg, bannersvg}
interface Navlink {
  id: number;
  href: string;
  name: string;
  Icon: IconType;
}

export const Navlinks: Navlink[] = [
  { id: 1, href: '#home', name: 'Home', Icon: FaHome },
  { id: 2, href: '#about', name: 'About', Icon: FaInfoCircle },
  { id: 3, href: '#faq', name: 'FAQ', Icon: FaQuestionCircle },
  { id: 4, href: '#contact', name: 'Contact', Icon: FaPhone },
  { id: 5, href: '#why-binzo', name: 'Why Binzo', Icon: FaLightbulb },
  { id: 6, href: '#binzo-winners', name: 'Binzo Winners', Icon: FaTrophy },
  { id: 7, href: '#how-to-install', name: 'How to Install & Download App', Icon: FaDownload },
  { id: 8, href: '#top-games', name: 'Top Games', Icon: FaGamepad },
];

