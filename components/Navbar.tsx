"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { navlinks, pLogo } from "@/data";
import Menu from "./MenuToggle";

interface MenuProps {
  children?: React.ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logo = () => (
  <div className="text-2xl font-bold">
    <Link href="/">
      <Image
        src={pLogo}
        alt="Logo"
        height={300}
        width={300}
        className="object-contain w-20 h-16 transition-transform duration-300 hover:scale-110"
      />
    </Link>
  </div>
);

const MobileNav = ({ active, setActive }: MenuProps) => {
  const router = useRouter();

  const handleRoute = (href: string) => {
    setActive(false);
    router.push(href);
  };

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-gradient-morphism animate-morphism absolute top-full left-0 w-full"
        >
          <div className="flex flex-col items-center py-4">
            {navlinks.map((item) => (
              <motion.div
                key={item.id}
                className="p-2 w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="flex cursor-pointer flex-row items-center justify-center gap-x-4 text-white hover:text-accent transition-colors duration-300"
                  onClick={() => handleRoute(item.href)}
                >
                  <span className="text-2xl">
                    <item.Icon />
                  </span>
                  <span className="text-lg font-semibold">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LgNav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex text-white flex-row gap-x-6 items-center">
      {navlinks.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href={item.href}
            className={`text-lg font-semibold hover:text-accent transition-colors duration-300 ${
              pathname === item.href ? "text-accent" : ""
            }`}
          >
            {item.name}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

const Navbar = () => {
  const [active, setIsActive] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-morphism animate-morphism">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <LgNav />
          <div className="lg:hidden">
            <Menu active={active} setActive={setIsActive} />
          </div>
        </div>
      </div>
      <MobileNav active={active} setActive={setIsActive} />
    </header>
  );
};

export default Navbar;