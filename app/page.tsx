import About from "@/components/About";
import BannerCard from "@/components/BannerCard";
import BinzoRating from "@/components/BinzoRating";
import BinzoUsersPage from "@/components/BinzoUsers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToInstall from "@/components/HowToInstall";
import TopGames from "@/components/TopGames";
import { WhyUsSection } from "@/components/WhyUs";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section>
      <section id="hero">
        <Hero />
      </section>
      <section id="why-us">
        <WhyUsSection />
      </section>
      <section id="top-games">
        <TopGames />
      </section>

      <section>
        <div className="h-12 relative">
          <BannerCard title="Binzo Rating" />
        </div>
        <BinzoRating />
        <BinzoUsersPage />
      </section>
      <section>
        <About/>
      </section>
      <section>
        <HowToInstall/>
      </section>
      <section>
        <FAQ/>
      </section>

      <section>
        <Footer />
      </section>
    </section>
  );
};

export default page;
