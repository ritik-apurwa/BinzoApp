"use client";
import React, { useState, useEffect } from "react";
import { useScroll, motion } from "framer-motion";

const TestPage: React.FC = () => {
  const items = Array.from({ length: 10 }, (_, i) => i + 1);
  const { scrollY } = useScroll();
  const [scrollAmount, setScrollAmount] = useState<number>(0);

  useEffect(() => {
    const updateScrollAmount = (latest: number) => {
      setScrollAmount(Math.round(latest));
    };

    const unsubscribeY = scrollY.on("change", updateScrollAmount);

    return () => {
      unsubscribeY();
    };
  }, [scrollY]);

  return (
    <motion.section className="max-w-7xl mx-auto h-screen overflow-y-auto max-h-screen flex flex-col">
      <motion.div
        className="fixed top-0 left-0 right-0 bg-red-400 p-2 text-center"
       
      >
        Scroll Amount: {scrollAmount}px
      </motion.div>
      <motion.div  style={{
          scaleX: scrollAmount / (document.documentElement.scrollHeight - window.innerHeight)
        }} className="h-screen w-screen">
        {items.map((item) => (
          <div key={item} className="h-96 border-b border-gray-300 flex items-center justify-center">
            {item}
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TestPage;