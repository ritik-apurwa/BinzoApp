import Image from "next/image";
import React from "react";

import { bannersvg } from "@/data";

const BannerCard = ({ title }: { title?: string }) => {
  return (
    <section className=" w-full relative flex justify-center items-center h-auto py-10  ">
      <div className="w-full h-full flex justify-center items-center flex-col relative">
        <Image src={bannersvg} height={1200} width={1200} alt="banner" />
      </div>
      <div className="absolute w-full  mt-4  flex justify-center items-center   inset-0">
        <h1 className="italic font-bold text-3xl radial-gradient-text text-indigo-800">{title}</h1>
      </div>
    </section>
  );
};

export default BannerCard;
