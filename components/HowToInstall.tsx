import React from "react";
import Image from "next/image";
import { howToInsallSteps } from "@/data";
import BannerCard from "./BannerCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HowToInstallCard = ({
  description,
  id,
  imageUrl,
  title,
}: howToInsallSteps) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center justify-between h-full p-4"
    >
      <div className="w-full h-full relative">
          <Image
            src={imageUrl}
            alt={title}
            height={600}
            width={600}
            className="rounded-lg object-contain w-full h-96"
          />
        </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2 text-purple-800">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const HowToInstall = () => {
  return (
    <section className="flex flex-col gap-10">
      <BannerCard title="How to Install" />
      
      <div className="max-w-7xl mx-auto w-full px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {howToInsallSteps.map((item, index) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <HowToInstallCard
                  description={item.description}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  title={item.title}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default HowToInstall;