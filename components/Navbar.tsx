"use client";

import { navlinks } from "@/data";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Menu from "./MenuToggle";

const Logo = () => (
  <div className="text-2xl font-bold text-black">
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

  const handleRoute = (href: string) => {
    setActive(false);
router.push(href);
  };

  return (
    <motion.div
      initial={false}
      animate={{ height: active ? "auto" : 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden lg:hidden"
    >
      {active && (
        <div className="flex flex-col items-center mt-2">
          {navlinks.map((item) => {
            const { Icon, href, id, name } = item;
            return (
              <div key={item.id} className="p-2">
                <div
                  className="flex flex-row items-center gap-x-4"
                  onClick={() => handleRoute(href)}
                >
                  <span>
                    <Icon className="" />
                  </span>
                  <span className=" text-lg">{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

// const LgNav = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   return (
//     <nav className="hidden lg:flex flex-row gap-x-4 items-center">
//       {navlinks.map(((item) => (
//         <motion.div
//           key={item.id}
//           whileHover={{ scale: 1.1 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <Link href={item.href}>
//             <span className="text-black text-lg">{item.name}</span>
//           </Link>
//         </motion.div>
//       ))}

//     </nav>
//   );
// };

const Navbar = () => {
  const [active, setIsActive] = React.useState(false);

  return (
    <section className="w-screen flex flex-col items-center ">
      <header className="max-w-7xl w-full flex flex-row justify-between items-center gap-x-4 mx-auto p-4">
        <Logo />
        {/* <LgNav /> */}
        <Menu active={active} setActive={setIsActive} />
      </header>

      <div className="lg:hidden flex flex-col items-center relative">
        <MobileNav active={active} setActive={setIsActive} />
      </div>
    </section>
  );
};

export default Navbar;
