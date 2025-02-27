import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
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
          <Button className="w-full md:mr-4 md:w-auto">Request a Demo</Button>
          <Button variant="outline" className="w-full md:w-auto">
            View all features
          </Button>
        </div>
      </div>
    </section>
  );
};
