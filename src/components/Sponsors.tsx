"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import elina from "../assets/logo/elina.png";
import aezion from "../assets/logo/aezion.jpg";
import ibridge from "../assets/logo/ibridge.png";
import knowmadix from "../assets/logo/knowmadix.png";
import number from "../assets/logo/number.png";
import tnasdc from "../assets/logo/tnasdc.png";
import ura from "../assets/logo/ura.png";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44 bg-white p-3 rounded-md"
        src={elina || "/placeholder.svg"}
        alt="Elina"
        width={200}
        height={100}
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-32 sm:w-36 md:w-44 lg:w-48 bg-white p-3 rounded-md"
        src={knowmadix || "/placeholder.svg"}
        alt="Knowmadix"
        width={200}
        height={100}
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-32 sm:w-36 md:w-44 lg:w-48"
        src={aezion || "/placeholder.svg"}
        alt="Aezion"
        width={200}
        height={100}
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44"
        src={ibridge || "/placeholder.svg"}
        alt="iBridge"
        width={200}
        height={100}
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44"
        src={number || "/placeholder.svg"}
        alt="Number"
        width={200}
        height={100}
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44"
        src={tnasdc || "/placeholder.svg"}
        alt="TNASDC"
        width={200}
        height={100}
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-28 sm:w-32 md:w-40 lg:w-44"
        src={ura || "/placeholder.svg"}
        alt="URA"
        width={200}
        height={100}
      />
    ),
    name: "",
  },
];

export const Sponsors = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Framer Motion Variants for Infinite Scrolling with pause capability
  const scrollAnimation = {
    animate: {
      x: [0, "-20%"],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
          // Pause animation when hovering
          ...(isPaused ? { duration: 100000 } : {}),
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
          className="flex gap-4 sm:gap-6 md:gap-8 whitespace-nowrap flex-nowrap min-w-[150%]"
          {...scrollAnimation}
        >
          {/* Duplicate the sponsors for seamless looping */}
          {[...sponsors, ...sponsors].map(({ icon }, index) => (
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
