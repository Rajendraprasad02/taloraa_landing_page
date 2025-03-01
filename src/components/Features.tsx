import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Employee Management",
    description:
      "Maintain a centralized database for seamless workforce administration.",
    image: image4,
  },
  {
    title: " Attendance & Leave Tracking",
    description: "Automate tracking,  planning, and leave approvals.",
    image: image3,
  },
  {
    title: "Performance Management",
    description:
      "Set employee goals, monitor achievements, and provide 360-degree feedback.",
    image: image,
  },
];

const featureList: string[] = [
  "Employee Management",
  "Attendance & Leave Tracking",
  "Compliance",
  "Performance Management",
  "Recruitment & Onboarding",
  "HR Analytics & Reports",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>
      <p className="text-xl lg:text-lg md:text-center">
        All-in-One HRMS with Powerful Features
      </p>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div
            key={feature}
            className="hover:scale-105 transition-all duration-300"
          >
            <Badge
              variant="secondary"
              className="text-sm hover:bg-primary cursor-default hover:text-black "
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50 group transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto transition-all duration-300 group-hover:brightness-75"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
