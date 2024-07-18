import Hero from "@/components/Hero";
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
      <section>
        <WhyUsSection />
      </section>
    </section>
  );
};

export default page;
