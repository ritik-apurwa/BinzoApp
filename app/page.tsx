"use client";

import React from "react";
import { motion } from "framer-motion";
import About from "@/components/About";
import BinzoUsersPage from "@/components/BinzoUsers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToInstall from "@/components/HowToInstall";
import TopGames from "@/components/TopGames";
import { WhyUsSection } from "@/components/WhyUs";
import TestPage from "@/components/TestPage";
// We'll create this component next

const HomePage = () => {
  return (
    <motion.div className="radial-gradient">
      <section id="home">
        <Hero />
      </section>
      <section id="why-binzo">
        <WhyUsSection />
      </section>
      <section id="top-games">
        <TopGames />
      </section>
      <section id="binzo-winners">
        <BinzoUsersPage />
      </section>
      <section id="how-to-install">
        <HowToInstall />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </motion.div>
  );
};

export default HomePage;
