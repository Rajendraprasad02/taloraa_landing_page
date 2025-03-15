// import { Radar } from "lucide-react";
import { motion } from "framer-motion";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: (
      <img
        className="w-44"
        src="https://cdn.prod.website-files.com/640f5800de684d58190e2a44/67aa324813c902ed9bf9012a_Group%202584%20(1).png"
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-44"
        src="https://nsweb.knomadixapp.com/logo.b64d89f2.png"
      />
    ),
    name: "",
  },
  {
    icon: (
      <img
        className="w-32"
        src="https://elinaservices.com/static/media/7.56320326eea8347f0334.png"
      />
    ),
    name: "",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Investors and founders
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 bg-green-600 p-6">
        {sponsors.map(({ icon, name }: SponsorProps, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-1 text-muted-foreground/60"
            whileHover={{ scale: 1.2 }} // Zoom effect on hover
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span>{icon}</span>
            <h3 className="text-xl font-bold">{name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
