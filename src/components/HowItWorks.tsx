import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Set Up Your Company",
    description:
      "Configure company policies, roles, and workflows effortlessly.",
  },
  {
    icon: <MapIcon />,
    title: "Onboard Employees",
    description:
      "Digitalize employee records, documents, and induction processes.",
  },
  {
    icon: <PlaneIcon />,
    title: "Manage Attendance & Leaves",
    description:
      "Track time, approve leave requests, and manage with accuracy.",
  },
  {
    icon: <GiftIcon />,
    title: "Optimize Performance",
    description: "Set KPIs, conduct appraisals, and track career growth.",
  },
  // {
  //   icon: <GiftIcon />,
  //   title: "Leverage HR Analytics",
  //   description: "Make data-driven HR decisions with real-time reports.",
  // },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        How{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Taloraa{" "}
        </span>
        Works Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Effortless HR Management in Just a Few Steps!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 group"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <span className="transition-all duration-300 group-hover:scale-110 ">
                  {icon}
                </span>
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
