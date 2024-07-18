import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { NextButton, PrevButton, usePrevNextButtons } from "./carousel-btn";
import { DotButton, useDotButton } from "./carousel-dot-button";
import Image from "next/image";
import { motion } from "framer-motion";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="max-w-6xl mx-auto lg:pt-10 relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((index) => (
            <div className="w-full flex-shrink-0 flex-grow-0" key={index}>
              <div className="h-auto max-h-60 lg:max-h-[500px] w-full p-10 flex justify-center items-center">
                <Image
                  height={1200}
                  width={1200}
                  className="w-full h-full object-cover rounded-md"
                  src={`https://picsum.photos/600/350?v=${index}`}
                  alt="Carousel image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white transition-colors"
        />
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="w-10 h-10 rounded-full bg-white/80 disabled:bg-gray-100/30 disabled:text-gray-600 shadow-md flex items-center justify-center hover:bg-white transition-colors"
        />
      </div>

      <div className="absolute bg-black/20 px-2 rounded-full lg:bottom-4 bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
        {scrollSnaps.map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            <DotButton
              onClick={() => onDotButtonClick(index)}
              className={`w-3 h-3 rounded-full  ${
                index === selectedIndex
                  ? "bg-white shadow-md"
                  : "bg-white/50 hover:bg-white/80"
              } transition-colors`}
            />
          </motion.div>
        ))}
      </div>





    </div>
  );
};

export default EmblaCarousel;
