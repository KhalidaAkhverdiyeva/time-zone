"use client";
import React, { useEffect, useState } from "react";
import HeroSecText from "./HeroSecText";
import { motion, useAnimation } from "framer-motion";

const HeroSection = () => {
  const [textKey, setTextKey] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      try {
        await controls.start({
          opacity: 0,
          scale: 1.1,
          transition: { duration: 0.5, ease: "easeInOut" },
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await controls.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        });
        await new Promise((resolve) => setTimeout(resolve, 20000));
        setTextKey((prevKey) => prevKey + 1);
      } catch (error) {
        console.error("Animation error:", error);
      }
    };

    animate();

    const intervalId = setInterval(() => {
      animate().catch((error) =>
        console.error("Interval animation error:", error)
      );
    }, 21500);

    return () => {
      clearInterval(intervalId);
    };
  }, [controls]);

  return (
    <div className="bg-[#F0F0F2]  overflow-hidden">
      <div className=" w-full max-w-[1170px] mx-auto flex justify-between items-center">
        <div className="w-[100%] md:w-[64%]">
          <HeroSecText key={textKey} />
        </div>

        <motion.div
          className="hidden  md:mr-[-25px] md:block "
          animate={controls}
          style={{ zIndex: "50" }}
        >
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp"
            alt="Watch"
            className="animate-heartbeat"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
