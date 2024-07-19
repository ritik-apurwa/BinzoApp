import Image, { StaticImageData } from "next/image";
import React from "react";
import BannerCard from "./BannerCard";
import { WhyUsLanguage, WhyUsNoBot, WhyUsSecure, WhyUsService } from "@/data";
interface WhyCard {
  title: string;
  description: string;
  image: StaticImageData;
}

export const WhyCard = ({ description, image, title }: WhyCard) => {
  return (
    <section className=" w-full items-center justify-center py-2 flex flex-col">
      <div className="size-16  p-1">
        <Image src={image} height={1200} width={1200} alt={title} />
      </div>
      <p className="text-xs text-center w-16 h-fit">
        <span className="italic font-bold"> {title}</span> <br /> {description}
      </p>
    </section>
  );
};

export const WhyUsSection = () => {
  return (
    <section className={`my-4 relative `}>
      <BannerCard title="Why winzo" />

      <div className="grid py-4 max-w-7xl mx-auto lg:px-20 grid-cols-4">
        <WhyCard image={WhyUsNoBot} title="No Bot" description="Certified" />
        <WhyCard image={WhyUsSecure} title="100%" description=" secure" />
        <WhyCard image={WhyUsLanguage} title="6+" description=" Languages" />
        <WhyCard image={WhyUsService} title="24x7" description=" Support" />
      </div>
    </section>
  );
};
