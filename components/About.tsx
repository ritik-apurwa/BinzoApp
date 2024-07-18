"use client";

import { aboutbg } from "@/data"; // Ensure aboutbg is the correct import for your background image
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative">
      <div className="min-w-full min-h-[70vh] overflow-hidden">
        <Image
          src={aboutbg} // Replace with your actual background image source
          alt="About background image"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute h-full w-full  flex-col text-white inset-0 items-center justify-center flex"
      >

          <h1 className="text-4xl text-cente  font-bold mb-4">About Us</h1>
          <p className="text-base px-6">
            Your go-to destination for online puzzle games like carrom, ludo,
            and bubble shooter. We specialize in money games with a commitment
            to the best gaming policies.
          </p>
    
      </motion.div>
    </section>
  );
};

export default About;
