// import analytics from "../assets/svg/analytics.svg";
// import financialData from "../assets/svg/financialData.svg";
// import progressTracking from "../assets/svg/progressTracking.svg";
// import { Card, CardContent, CardHeader } from "./ui/card";

import hero1 from "../assets/hero2.png";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <img src={progressTracking}></img>
        </CardHeader>

        <CardContent>
          <span className="text-gray-50">Appraisal</span>{" "}
        </CardContent>
      </Card>

      <Card className="absolute right-[20px] top-0 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img src={analytics} />
        </CardHeader>
      </Card>
      <Card className="absolute right-[100px] top-80 w-60 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img src={financialData} />
        </CardHeader>
      </Card> */}
      <img src={hero1} />
    </div>
  );
};
