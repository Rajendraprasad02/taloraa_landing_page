import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Customizable to Your Business Needs",
    description:
      "Taloraa adapts to your unique HR requirements with flexible workflows, making it the perfect fit for businesses across different industries, whether small startups or large enterprises.",
    icon: <ChartIcon />,
  },
  {
    title: " 24/7 Support & Assistance",
    description:
      " Our dedicated support team is always available to assist you, ensuring a smooth and hassle-free experience. Whether it’s implementation, troubleshooting, or general queries, we’ve got you covered.",
    icon: <WalletIcon />,
  },
  {
    title: "Scalable & Secure",
    description:
      "Built on a robust, cloud-based infrastructure, Taloraa ensures your HR data is always secure and accessible. As your business grows, Taloraa scales with you, handling an increasing workforce without compromising performance or security.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32"> 
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Why Choose Taloraa?
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card
                key={title}
                className="bg-muted/50 group transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
              >
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  {/* Icon Wrapper */}
                  <div className="mt-1 p-1 rounded-2xl transition-all duration-300 bg-primary/20 group-hover:bg-black">
                    <span className="transition-all duration-300 group-hover:fill-white">
                      {icon}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <CardTitle className=" group-hover:text-black">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-md mt-2 group-hover:text-white">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
