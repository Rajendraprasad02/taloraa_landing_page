import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const RequestDemo = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Demo Requested!");
  };

  return (
    <section id="request-demo">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Request a Free{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Demo
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Get a personalized demo of our HRMS platform.
        </p>

        <form
          className="flex flex-col w-full md:w-6/12 lg:w-4/12 mx-auto gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Your Name"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="name"
            required
          />
          <Input
            placeholder="Your Email"
            type="email"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
            required
          />
          <Input
            placeholder="Company Name"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="company"
          />
          <Input
            placeholder="Tell us about your requirements..."
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="message"
            required
          />
          <Button type="submit">Request Demo</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
