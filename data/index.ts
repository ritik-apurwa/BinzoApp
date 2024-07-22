import { IconType } from "react-icons";
import hti1 from "@/public/htiimages/dhoni_step1.webp";
import hti2 from "@/public/htiimages/dhoni_step2.webp";
import hti3 from "@/public/htiimages/dhoni_step3.webp";
import hti4 from "@/public/htiimages/Step-3-Englishv2.webp";
import hti5 from "@/public/htiimages/Step-4-Englishv2.webp";
import {
  FaHome,
  FaInfoCircle,
  FaQuestionCircle,
  FaPhone,
  FaLightbulb,
  FaTrophy,
  FaDownload,
  FaGamepad,
} from "react-icons/fa";
import homebg from "@/public/home/homebg.jpg";
import aboutbg from "@/public/home/aboutusimg.jpg";
import bannersvg from "@/public/home/banner.svg";

import WhyUsSecure from "@/public/WhyUs/WhyUsSecure.webp";
import WhyUsService from "@/public/WhyUs/WhyUsService.webp";
import WhyUsLanguage from "@/public/WhyUs/WhyUsLanguage.webp";
import WhyUsNoBot from "@/public/WhyUs/WhyUsNoBot.webp";

import TopGamesLudo from "@/public/gamescard/ludo.jpg";
import TopGamesSnake from "@/public/gamescard/snakeladders.jpg";
import TopGamesCarrrom from "@/public/gamescard/carrom.webp";
import TopGamesPool from "@/public/gamescard/pool.jpg";
import TopGamesFruitNinja from "@/public/gamescard/fruitsmurai.webp";
import { StaticImageData } from "next/image";

import user1 from "@/public/testimonial/user1.jpg";
import user2 from "@/public/testimonial/user2.jpg";
import user3 from "@/public/testimonial/user3.jpg";
import user4 from "@/public/testimonial/user4.jpg";
import user5 from "@/public/testimonial/user5.webp";


import heroBanner1 from "@/public/home/heroBanner.jpeg"
import heroBanner2 from "@/public/home/heroBanner2.jpeg"
import pLogo from "@/public/home/logopng.png"

export interface Testimonial {
  id: number;
  name: string;
  image: StaticImageData;
  reviewDescription: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    image: user1,
    reviewDescription:
      "The online games provided by this platform are truly engaging and exciting. I especially like the money-back guarantee feature, which shows their commitment to customer satisfaction. Highly recommended!",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Sneha Patel",
    image: user2,
    reviewDescription:
      "As an avid gamer, I appreciate the variety and quality of games offered here. Their best games policies ensure a fair and enjoyable gaming experience. Five stars!",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Amit Sharma",
    image: user3,
    reviewDescription:
      "I've had a great experience with this platform. The games are top-notch, and the money-back guarantee provides peace of mind. Excellent service!",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Pooja Singh",
    image: user4,
    reviewDescription:
      "Fantastic customer support and a wide range of games to choose from. I'm impressed with their commitment to quality and customer satisfaction. Highly satisfied!",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Anand Mishra",
    image: user5,
    reviewDescription:
      "The best online gaming platform I've come across. Their money-back guarantee and best games policies set them apart from others. Great job!",
    rating: 4.5,
  },
];

export { WhyUsSecure, WhyUsService, heroBanner1, pLogo,  heroBanner2,  WhyUsLanguage, WhyUsNoBot };

export { homebg, aboutbg, bannersvg };
interface Navlink {
  id: number;
  href: string;
  name: string;
  Icon: IconType;
}
export interface howToInsallSteps {
  id: number;
  imageUrl: StaticImageData;
  title: string;
  description: string;
}

export const howToInsallSteps: howToInsallSteps[] = [
  {
    id: 1,
    imageUrl: hti1,
    title: "step-1",
    description: "click 'download' button in the popup below to continue   ",
  },
  {
    id: 2,
    imageUrl: hti2,
    title: "step-1",
    description: "click 'download' button in the popup below to continue   ",
  },
  {
    id: 3,
    imageUrl: hti3,
    title: "step-1",
    description: "click 'download' button in the popup below to continue   ",
  },
  {
    id: 4,
    imageUrl: hti4,
    title: "step-1",
    description: "click 'download' button in the popup below to continue   ",
  },
  {
    id: 5,
    imageUrl: hti5,
    title: "step-1",
    description: "click 'download' button in the popup below to continue   ",
  },
];

export const navlinks:Navlink[] = [
  { id: 1, href: "/#home", name: "Home", Icon: FaHome },
  { id: 2, href: "/#about", name: "About", Icon: FaInfoCircle },
  { id: 4, href: "/#faq", name: "FAQ", Icon: FaQuestionCircle },
  { id: 5, href: "/#top-games", name: "Top Games", Icon: FaGamepad },
  { id: 6, href: "/#why-binzo", name: "Why Binzo", Icon: FaLightbulb },
  { id: 7, href: "/#binzo-winners", name: "Binzo Winners", Icon: FaTrophy },
  { id: 8, href: "/#how-to-install", name: "How to Install & Download App", Icon: FaDownload },
];

export interface TopGame {
  id: number;
  name: string;
  image: StaticImageData;
  staticImage: string;
  description: string;
}

export const topGames: TopGame[] = [
  {
    id: 1,
    name: "Ludo",
    image: TopGamesLudo,
    staticImage: "/gamescard/ludo.jpg",
    description:
      "A classic board game where players race their tokens to the finish line.",
  },
  {
    id: 2,
    name: "Snake and Ladders",
    image: TopGamesSnake,
    staticImage: "/gamescard/snakeladders.jpg",
    description:
      "A fun game of chance involving navigating a board with snakes and ladders.",
  },
  {
    id: 3,
    name: "Carrom",
    image: TopGamesCarrrom,
    staticImage: "/gamescard/carrom.webp",
    description:
      "A popular tabletop game where players flick discs into pockets.",
  },
  {
    id: 4,
    name: "Pool",
    image: TopGamesPool,
    staticImage: "/gamescard/pool.jpg",
    description:
      "A billiards game where players aim to pot balls into the pockets.",
  },
  {
    id: 5,
    name: "Fruit Ninja",
    image: TopGamesFruitNinja,
    staticImage: "/gamescard/fruitsmurai.webp",
    description:
      "A fast-paced game where players slice fruits with a swipe of their finger.",
  },
];
