import Image from "next/image";
import React from "react";

import { bannersvg, bannersvg2 } from "@/data";

const BannerCard = ({ title }: { title?: string }) => {
  return (
    <div className="relative h-20">
      <div className="h-14">
        <Image src={bannersvg2} width={1200} height={1400} alt="banner-svg2" />
      </div>
      <div className="absolute flex justify-center items-center pl-10 top-0 left-0 h-full">
        <h1 className="h-full flex items-center">
         {title}
        </h1>
      </div>
    </div>
  );
};

export default BannerCard;
