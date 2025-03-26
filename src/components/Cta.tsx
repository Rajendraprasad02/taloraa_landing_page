import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-24 my-16 sm:my-24">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-5xl font-bold ">
            All Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              HR Processes & Workforce{" "}
            </span>
            in One Powerful Platform
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Taloraa brings all your HR operations into a single, intuitive
            platform. From recruitment and onboarding to payroll, performance
            management, and analytics, our all-in-one solution simplifies
            workforce management, enhances efficiency, and ensures a seamless HR
            experience.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button
            id="request-demo-btn"
            onClick={() =>
              document
                .getElementById("request-demo")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full text-base md:text-lg md:mr-4 md:w-auto hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 font-bold"
          >
            Request a Demo
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            className="w-full text-base md:text-lg md:w-auto transition-all duration-300 hover:scale-105 font-bold"
          >
            View all features
          </Button>
        </div>
      </div>
    </section>
  );
};
