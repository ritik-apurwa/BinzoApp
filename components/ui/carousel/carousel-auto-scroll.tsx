"use client";

import React, { useCallback, useEffect, useState, ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { PauseCircle, PlayCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type SlideType = {
  id: number;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
  showControls: boolean;
  children: ReactNode;
};

const EmblaCarousel: React.FC<PropType> = ({
  slides,
  options,
  showControls,
  children,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  const AutoScrollControls = () => {
    const hoveredKey = hovered === true ? 1 : 0;
    return (
      <AnimatePresence>
        <motion.div
          key={hoveredKey}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: hovered ? 1 : 0, height: "auto" }}
          transition={{ duration: 0.4 }}
          exit={{
            transition: {
              duration: 0.3,
            },
            height: 0,
            opacity: 0,
          }}
          className="absolute bottom-10 flex w-full justify-center"
        >
          <div className="bg-black/20 px-4 py-3 rounded-md flex items-center justify-center w-fit h-fit ">
            <button
              onClick={toggleAutoplay}
              className="flex items-center gap-2 text-white"
            >
              {isPlaying ? (
                <PauseCircle className="w-8 h-8" />
              ) : (
                <PlayCircle className="w-8 h-8" />
              )}
              {isPlaying ? "Stop" : "Start"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div
      className="relative max-w-6xl lg:pt-5 mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {React.Children.map(children, (child, index) => (
            <div
              className="w-full flex-shrink-0 flex-grow-0"
              key={slides[index].id}
            >
              <div className="h-auto max-h-60 lg:max-h-[500px] w-full p-10 flex justify-center items-center">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>
      {showControls && <AutoScrollControls />}
    </div>
  );
};

export default EmblaCarousel;
