"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import elina from "../assets/logo/elina.png";
import aezion from "../assets/logo/aezion.png";
import ibridge from "../assets/logo/ibridge.png";
import knowmadix from "../assets/logo/knowmadix.png";
import number from "../assets/logo/number.png";
import tnasdc from "../assets/logo/tnasdc.png";
import ura from "../assets/logo/ura.png";
import mfi from "../assets/logo/mfi.webp";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

// Sponsor List
const sponsors: SponsorProps[] = [
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44  p-1 rounded-md"
        src={elina}
        alt="Elina"
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44  p-1 rounded-md"
        src={knowmadix}
        alt="Knowmadix"
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44 bg-white p-1 rounded-md"
        src={aezion}
        alt="Aezion"
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44  p-1 rounded-md"
        src={ibridge}
        alt="iBridge"
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44  p-1 rounded-md"
        src={number}
        alt="Number"
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44 bg-white p-1 rounded-md"
        src={tnasdc}
        alt="TNASDC"
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44 bg-white p-1 rounded-md"
        src={ura}
        alt="URA"
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44 bg-white p-1 rounded-md"
        src={mfi}
        alt="MFI"
      />
    ),
    name: "",
  },
];

export const Sponsors = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the sponsor list to create a seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  // Framer Motion Scroll Animation
  const scrollAnimation = {
    animate: {
      x: ["0%", "-50.6%"], // Moves left by half the duplicated content width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
          ...(isPaused ? { duration: 100000 } : {}), // Pause effect
        },
      },
    },
  };

  return (
    <section id="sponsors" className="container pt-16 sm:pt-12 sm:pb-4">
      <h2 className="text-center text-lg sm:text-xl lg:text-3xl font-bold mb-4 text-primary">
        Our Clients
      </h2>

      {/* Scrolling Container */}
      <div
        className="overflow-hidden w-full relative py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 whitespace-nowrap flex-nowrap min-w-[500%] md:min-w-[300%] lg:min-w-[200%]"
          {...scrollAnimation}
        >
          {duplicatedSponsors.map(({ icon }, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
