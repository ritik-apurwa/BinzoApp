import React from "react";
import CustomBtn from "./CustomBtn";
import Image from "next/image";
import { heroBanner1, homebg } from "@/data";

const Hero = () => {
  return (
    <section>
      <div className="">
        <div className="">
          <div>
            <Image
              className=" overflow-hidden object-contain w-screen object-center"
              src={heroBanner1}
              alt="hero iamge"
              height={1200}
              width={1200}
            />
          </div>
        </div>
        {/* <div className="bg-gradient-morphism animate-morphism min-h-screen flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">INDIA'S NO.1 GAMING</h1>
          <h2 className="text-3xl font-semibold mb-8">CROSS WALL GAMING</h2>
          <button className="bg-accentn hover:bg-highlightn text-white font-bold py-2 px-4 rounded">
            JOIN NOW
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
