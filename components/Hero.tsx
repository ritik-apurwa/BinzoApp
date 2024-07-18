import React from "react";
import CustomBtn from "./CustomBtn";
import Image from "next/image";
import { homebg } from "@/data";

const Hero = () => {
  return (
    <section>
      <div className="min-h-[60vh] w-screen ">
        <div className="h-[60vh] max-h-[60vh] overflow-hidden font-bold text-center relative  items-center flex  justify-center">
          <div>
            <Image
              className="w-full overflow-hidden object-cover object-center"
              src={homebg}
              alt="hero iamge"
              height={1200}
              width={1200}
            />
          </div>

          <div className="absolute bottom-0 w-full h-20">
            <CustomBtn title="Downlaod the game" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
