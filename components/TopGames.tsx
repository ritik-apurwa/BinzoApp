import React from "react";
import BannerCard from "./BannerCard";
import EmblaCarousel from "./ui/carousel/carousel-auto-scroll";
import { topGames } from "@/data";
import Image, { StaticImageData } from "next/image";

interface TopGame {
  id: string;
  name: string;
  image: StaticImageData;
  description: string;
}

const TopGames = () => {
  return (
    <section id="Top Games">
      <div className="relative pb-10">
        <BannerCard title="Top Games" />
      </div>
      <section className="h-auto w-full">
        <EmblaCarousel
          showControls={false}
          slides={topGames}
          options={{ loop: true, axis: "x" }}
        >
          {topGames.map((item) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              key={item.id}
            >
              <div className="relative  w-full overflow-hidden">
                <Image
                  height={600}
                  width={600}
                  src={item.image.src}
                  alt={item.name}
                  className="object-cover rounded-xl object-center h-full w-full"
                />
                <div className="absolute rounded-xl flex flex-col inset-0  items-center justify-center bg-black/50">
                  <p className="text-white text-xl font-bold  p-2 rounded">
                    {item.name}
                  </p>
                  <p className="text-white text-xs font-bold px-6 rounded">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </EmblaCarousel>
      </section>
    </section>
  );
};

export default TopGames;
