"use client";


import EmblaCarousel from "@/components/ui/carousel/carousel-auto-scroll";
import React from "react";

const page = () => {
  const items = Array.from({ length: 10 }, (_, i) => i);

  const items2 = Array.from({ length: 20 }, (_, i) => `Text ${i + 1}`);
  return (
    <section className="">
      <EmblaCarousel slides={items} options={{ loop: true, axis: "x" }} />
    </section>
  );
};

export default page;
