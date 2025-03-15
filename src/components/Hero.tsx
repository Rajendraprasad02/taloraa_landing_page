import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-1 place-items-center text-center py-20 md:pt-40 md:pb-28 gap-6">
      <div className="space-y-6">
        <div className="inline bg-gradient-to-r text-6xl md:text-8xl from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text font-bold">
          Taloraa
        </div>
        <h1 className="text-5xl md:text-6xl font-bold">
          Simplify your <span className="text-blue-600">HR management</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Streamline your HR processes with our intuitive, all-in-one human
          resource management system.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              onClick={() =>
                document
                  .getElementById("request-demo")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-lg text-lg border transition-all 
              bg-blue-600 text-white border-blue-600 hover:bg-transparent hover:text-blue-600
              dark:bg-blue dark:text-white hover:dark:border-white dark:hover:bg-transparent dark:hover:text-white"
            >
              Book a demo
            </Button>
          </motion.div>
        </div>
      </div>
      {/* <div className="shadow"></div> */}
    </section>
  );
};
