import { Button } from "./ui/button";
import { motion } from "framer-motion";
import man from "../assets/man.png";
import abstract from "../assets/abstract.png";
export const Hero = () => {
  const text = "Empowering HR,"; // The text to animate

  return (
    <>
      <div
        style={{ backgroundImage: `url(${abstract})` }}
        className="flex justify-center w-full p-0 m-0"
      >
        <section
          className={`container flex place-items-center  gap-6 lg:mx-0 lg:py-0 w-full md:py-32 py-20`}
        >
          <div className="space-y-6 w-full lg:text-left text-center">
            <motion.div
              className="inline bg-gradient-to-r text-5xl md:text-7xl from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text font-bold"
              initial={{ opacity: 1 }}
            >
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }} // Each letter appears after a short delay
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <h1 className="text-5xl font-bold">
              {/* Simplify your <span className="text-primary">HR management</span> */}
              Simplifying Management
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Streamline your HR processes with our intuitive, all-in-one human
              resource management system.
            </p>
            <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  onClick={() =>
                    document
                      .getElementById("request-demo")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="p-6 rounded-lg text-lg border transition-all 
              bg-primary text-white border-primary  hover:text-primary
              dark:bg-blue dark:text-white hover:dark:border-white hover:bg-transparent dark:hover:text-white"
                >
                  Book a demo
                </Button>
              </motion.div>
            </div>
          </div>
          <div className=" justify-center w-full hidden lg:flex">
            <div className="">
              <img src={man} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
