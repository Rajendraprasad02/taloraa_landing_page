import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r text-7xl from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Taloraa
            </span>{" "}
            <br></br>
            The Future of HR Management
          </h1>{" "}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Say goodbye to manual HR tasks! Taloraa is a smart, intuitive, and
          powerful HRMS designed to streamline workforce management, automate HR
          operations, and enhance employee engagement—all in one seamless
          platform.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <motion.div
            whileHover={{ x: 10 }} // Moves 10px to the right on hover
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              onClick={() =>
                document
                  .getElementById("request-demo")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full md:w-1/3 font-bold text-base text-black"
            >
              Request Demo
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
