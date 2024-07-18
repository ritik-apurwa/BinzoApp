"use client";

import {Navlinks} from "@/data";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Menu from "./MenuToggle";

const Logo = () => (
  <div className="text-2xl font-bold text-white">
    <Link href="/">Logo</Link>
  </div>
);

interface MenuProps {
  children?: React.ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ active, setActive }: MenuProps) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <motion.div
      initial={false}
      animate={{ height: active ? "auto" : 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden lg:hidden"
    >
      {active && (
        <div className="flex flex-col items-center mt-2">
          {Navlinks.map((item) => (
            <div key={item.id} className="p-2">
              <Link href={item.href}>
                <span  className="text-white text-lg">{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const LgNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="hidden lg:flex flex-row gap-x-4 items-center">
      {Navlinks.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href={item.href}>
            <span  className="text-white text-lg">{item.name}</span>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

const Navbar = () => {
  const [active, setIsActive] = React.useState(false);

  return (
    <section className="w-screen bg-black/20">
      <header className="max-w-7xl flex flex-row justify-between items-center gap-x-4 mx-auto p-4">
        <Logo />
        <LgNav />
        <div className="lg:hidden flex flex-col items-center relative">
          <Menu active={active} setActive={setIsActive} />
          <MobileNav active={active} setActive={setIsActive} />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
