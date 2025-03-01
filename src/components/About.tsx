// import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="border rounded-lg py-12 transition-all duration-300 hover:bg-green-600 hover:text-white group hover:scale-105">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="Pilot"
            className="w-[300px] object-contain rounded-lg transition-all duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text group-hover:text-white">
                  About{" "}
                </span>
                <span className="group-hover:text-black">Taloraa</span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4 group-hover:text-white">
                Taloraa is an advanced HRMS designed to streamline HR
                operations, improve efficiency, and enhance workforce
                engagement. Whether you’re a startup, SME, or enterprise,
                Taloraa provides a seamless experience in managing recruitment,
                payroll, attendance, and more.
              </p>
              <p className="text-xl text-muted-foreground mt-4 group-hover:text-white">
                Our goal is to help businesses eliminate complexities in HR
                while ensuring compliance, automation, and data-driven
                decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
