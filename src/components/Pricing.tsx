// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Check, X } from "lucide-react";

// enum PopularPlanType {
//   NO = 0,
//   YES = 1,
// }

// interface BenefitItem {
//   label: string;
//   status: "✅" | "❌" | "info"; // 'info' means no icon (for plain text like support)
// }

// interface PricingProps {
//   title: string;
//   popular: PopularPlanType;
//   price: number;
//   description: string;
//   buttonText: string;
//   benefitList: BenefitItem[];
// }

// // const pricingList: PricingProps[] = [
// //   {
// //     title: "Free",
// //     popular: 0,
// //     price: 0,
// //     description: "Perfect for individuals or small teams getting started.",
// //     buttonText: "Contact Us",
// //     benefitList: [
// //       "1 Team member",
// //       "2 GB Storage",
// //       "Upto 4 pages",
// //       "Community support",
// //     ],
// //   },
// //   {
// //     title: "Premium",
// //     popular: 1,
// //     price: 5,
// //     description: "Great for growing teams needing more flexibility.",
// //     buttonText: "Contact Us",
// //     benefitList: [
// //       "4 Team member",
// //       "4 GB Storage",
// //       "Upto 6 pages",
// //       "Priority support",
// //     ],
// //   },
// //   {
// //     title: "Enterprise",
// //     popular: 0,
// //     price: 40,
// //     description: "Ideal for businesses needing advanced features.",
// //     buttonText: "Contact Us",
// //     benefitList: [
// //       "10 Team member",
// //       "8 GB Storage",
// //       "Upto 10 pages",
// //       "Priority support",
// //     ],
// //   },
// // ];

// const pricingList: PricingProps[] = [
//   {
//     title: "Free",
//     popular: 0,
//     price: 0,
//     description: "Perfect for individuals or small teams getting started.",
//     buttonText: "Contact Us",
//     benefitList: [
//       { label: "Up to 3 users or 5", status: "info" },
//       { label: "1 Month validity", status: "info" },
//       { label: "Cloud Option (Limited)", status: "✅" },
//       { label: "All Core Modules", status: "✅" },
//       { label: "Timesheets", status: "❌" },
//       { label: "Recruitment Lifecycle", status: "❌" },
//       { label: "Performance (Appraisal)", status: "❌" },
//       { label: "UAM Included", status: "✅" },
//       {
//         label: "Classic Support: Email, Docs, Community",
//         status: "info",
//       },
//     ],
//   },
//   {
//     title: "Pro HR",
//     popular: 1,
//     price: 0,
//     description: "Ideal for growing teams needing robust HR solutions.",
//     buttonText: "Contact Us",
//     benefitList: [
//       { label: "Up to 20 users (extra per user charged)", status: "info" },
//       { label: "1 Month validity", status: "info" },
//       { label: "Full Cloud Option", status: "✅" },
//       { label: "All Core Modules", status: "✅" },
//       { label: "Timesheets", status: "✅" },
//       { label: "Recruitment Lifecycle", status: "✅" },
//       { label: "Performance (Appraisal)", status: "❌" },
//       { label: "UAM Included", status: "✅" },
//       {
//         label: "Premium Support: Setup, Calls, CSV Migration",
//         status: "info",
//       },
//     ],
//   },
//   {
//     title: "Elite HR",
//     popular: 0,
//     price: 0,
//     description: "Best for enterprises with complete HR needs.",
//     buttonText: "Contact Us",
//     benefitList: [
//       { label: "Up to 50 users (extra per user charged)", status: "info" },
//       { label: "1 Month validity", status: "info" },
//       { label: "Full Cloud Option", status: "✅" },
//       { label: "All Core Modules", status: "✅" },
//       { label: "Timesheets", status: "✅" },
//       { label: "Recruitment Lifecycle", status: "✅" },
//       { label: "Performance (Appraisal)", status: "✅" },
//       { label: "UAM Included", status: "✅" },
//       {
//         label:
//           "Enterprise Support: Onboarding, Migration, Dedicated Help, Training",
//         status: "info",
//       },
//     ],
//   },
// ];

// interface SupportPlan {
//   title: string;
//   features: string[];
// }

// const supportPricing: SupportPlan[] = [
//   {
//     title: "Classic Support",
//     features: [
//       "Basic support via email",
//       "Clarification on usage of modules",
//       "Access to documentation & FAQs",
//       "Community support included",
//     ],
//   },
//   {
//     title: "Premium Support",
//     features: [
//       "Initial setup help (modules, roles, data imports)",
//       "Guidance for configuring your organization settings",
//       "Basic maintenance of modules",
//       "Partial data migration (CSV support)",
//       "Limited testing and optimization",
//       "Priority email + scheduled call support (1 call/week)",
//     ],
//   },
//   {
//     title: "Enterprise Support",
//     features: [
//       "Dedicated onboarding team",
//       "Full end-to-end HRMS system setup",
//       "Legacy system data migration",
//       "Advanced JMeter testing and load balancing support",
//       "Dedicated Slack/Teams support with live help",
//       "Continuous improvements, module extensions",
//       "Account manager with 4-hr response time SLA",
//       "Custom training sessions & organization-wide rollouts",
//     ],
//   },
// ];

// export const Pricing = () => {
//   return (
//     <>
//       <section id="pricing" className="container py-24 sm:py-28">
//         <h2 className="text-3xl md:text-4xl font-bold text-center">
//           Get
//           <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//             {" "}
//             Unlimited{" "}
//           </span>
//           Access
//         </h2>
//         <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8 px-10  ">
//           Taloraa is designed for businesses of all sizes. From small startups
//           to large enterprises, our system adapts to your growing workforce
//           needs.
//         </h3>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {pricingList.map((pricing: PricingProps) => (
//             <Card
//               key={pricing.title}
//               className={
//                 pricing.popular === PopularPlanType.YES
//                   ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
//                   : ""
//               }
//             >
//               <CardHeader>
//                 <CardTitle className="flex item-center justify-between">
//                   {pricing.title}
//                   {pricing.popular === PopularPlanType.YES ? (
//                     <Badge variant="secondary" className="text-sm text-primary">
//                       Most popular
//                     </Badge>
//                   ) : null}
//                 </CardTitle>
//                 <div>
//                   <span className="text-3xl font-bold">${pricing.price}</span>
//                   <span className="text-muted-foreground"> /month</span>
//                 </div>

//                 <CardDescription className="h-6">
//                   {pricing.description}
//                 </CardDescription>
//               </CardHeader>

//               <CardContent>
//                 <Button
//                   className="w-full text-base font-bold hover:bg-primary cursor-pointer hover:text-white  "
//                   onClick={() => (window.location.href = "#request-demo")}
//                 >
//                   {pricing.buttonText}
//                 </Button>
//               </CardContent>

//               <hr className="w-4/5 m-auto mb-4" />

//               <CardFooter className="flex">
//                 <div className="space-y-4">
//                   {pricing.benefitList.map(
//                     (benefit: BenefitItem, index: number) => (
//                       <span key={index} className="flex items-start">
//                         {benefit.status === "✅" && (
//                           <Check className="text-green-500 mt-1" />
//                         )}
//                         {benefit.status === "❌" && (
//                           <X className="text-red-500 mt-1" />
//                         )}
//                         <h3 className="ml-2">{benefit.label}</h3>
//                       </span>
//                     )
//                   )}
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
//           {supportPricing.map((plan, index) => (
//             <Card key={index} className="rounded-2xl shadow-lg">
//               <CardHeader>
//                 <h2 className="text-xl font-bold">{plan.title}</h2>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3 list-disc list-inside">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="text-sm text-gray-700 ">
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X, Sparkles, Clock, Users, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface BenefitItem {
  label: string;
  status: "✅" | "❌" | "info"; // 'info' means no icon (for plain text like support)
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: BenefitItem[];
  icon: React.ReactNode;
}

interface SupportPlan {
  title: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description: "Perfect for individuals or small teams getting started.",
    buttonText: "Get Started",
    icon: <Users className="h-6 w-6 text-teal-500" />,
    benefitList: [
      { label: "Up to 3 users or 5", status: "info" },
      { label: "1 Month validity", status: "info" },
      { label: "Cloud Option (Limited)", status: "✅" },
      { label: "All Core Modules", status: "✅" },
      { label: "Timesheets", status: "❌" },
      { label: "Recruitment Lifecycle", status: "❌" },
      { label: "Performance (Appraisal)", status: "❌" },
      { label: "UAM Included", status: "✅" },
      {
        label: "Classic Support: Email, Docs, Community",
        status: "info",
      },
    ],
  },
  {
    title: "Pro HR",
    popular: 1,
    price: 0,
    description: "Ideal for growing teams needing robust HR solutions.",
    buttonText: "Contact Us",
    icon: <Zap className="h-6 w-6 text-purple-500" />,
    benefitList: [
      { label: "Up to 20 users (extra per user charged)", status: "info" },
      { label: "1 Month validity", status: "info" },
      { label: "Full Cloud Option", status: "✅" },
      { label: "All Core Modules", status: "✅" },
      { label: "Timesheets", status: "✅" },
      { label: "Recruitment Lifecycle", status: "✅" },
      { label: "Performance (Appraisal)", status: "❌" },
      { label: "UAM Included", status: "✅" },
      {
        label: "Premium Support: Setup, Calls, CSV Migration",
        status: "info",
      },
    ],
  },
  {
    title: "Elite HR",
    popular: 0,
    price: 0,
    description: "Best for enterprises with complete HR needs.",
    buttonText: "Contact Us",
    icon: <Sparkles className="h-6 w-6 text-amber-500" />,
    benefitList: [
      { label: "Up to 50 users (extra per user charged)", status: "info" },
      { label: "1 Month validity", status: "info" },
      { label: "Full Cloud Option", status: "✅" },
      { label: "All Core Modules", status: "✅" },
      { label: "Timesheets", status: "✅" },
      { label: "Recruitment Lifecycle", status: "✅" },
      { label: "Performance (Appraisal)", status: "✅" },
      { label: "UAM Included", status: "✅" },
      {
        label:
          "Enterprise Support: Onboarding, Migration, Dedicated Help, Training",
        status: "info",
      },
    ],
  },
];

const supportPricing: SupportPlan[] = [
  {
    title: "Classic Support",
    icon: <Clock className="h-6 w-6" />,
    color: "bg-teal-50 dark:bg-teal-950/30",
    features: [
      "Basic support via email",
      "Clarification on usage of modules",
      "Access to documentation & FAQs",
      "Community support included",
    ],
  },
  {
    title: "Premium Support",
    icon: <Shield className="h-6 w-6" />,
    color: "bg-purple-50 dark:bg-purple-950/30",
    features: [
      "Initial setup help (modules, roles, data imports)",
      "Guidance for configuring your organization settings",
      "Basic maintenance of modules",
      "Partial data migration (CSV support)",
      "Limited testing and optimization",
      "Priority email + scheduled call support (1 call/week)",
    ],
  },
  {
    title: "Enterprise Support",
    icon: <Sparkles className="h-6 w-6" />,
    color: "bg-amber-50 dark:bg-amber-950/30",
    features: [
      "Dedicated onboarding team",
      "Full end-to-end HRMS system setup",
      "Legacy system data migration",
      "Advanced JMeter testing and load balancing support",
      "Dedicated Slack/Teams support with live help",
      "Continuous improvements, module extensions",
      "Account manager with 4-hr response time SLA",
      "Custom training sessions & organization-wide rollouts",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Get
          <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
            {" "}
            Unlimited{" "}
          </span>
          Access
        </h2>
        <p className="text-lg text-muted-foreground mb-16">
          Taloraa is designed for businesses of all sizes. From small startups
          to large enterprises, our system adapts to your growing workforce
          needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {pricingList.map((pricing: PricingProps, index) => (
          <Card
            key={pricing.title}
            className={cn(
              "relative overflow-hidden transition-all duration-300 hover:shadow-xl",
              pricing.popular === PopularPlanType.YES
                ? "border-primary shadow-lg dark:shadow-primary/20"
                : ""
            )}
          >
            {pricing.popular === PopularPlanType.YES && (
              <div className="absolute top-0 right-0">
                <div className="text-xs font-semibold bg-primary text-primary-foreground py-1 px-3 rounded-bl-md">
                  MOST POPULAR
                </div>
              </div>
            )}
            <CardHeader className="pb-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-full bg-muted">{pricing.icon}</div>
                <CardTitle className="text-xl">{pricing.title}</CardTitle>
              </div>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold">
                  {pricing.price === 0 ? "Custom" : `$${pricing.price}`}
                </span>
                {pricing.price > 0 && (
                  <span className="text-muted-foreground ml-1">/month</span>
                )}
              </div>
              <CardDescription className="min-h-[50px]">
                {pricing.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              <Button
                className={cn(
                  "w-full text-base font-medium transition-all",
                  pricing.popular === PopularPlanType.YES
                    ? "bg-gradient-to-r from-primary to-purple-600 hover:bg-primary/90"
                    : "bg-primary hover:bg-primary/90"
                )}
                onClick={() => (window.location.href = "#request-demo")}
              >
                {pricing.buttonText}
              </Button>
            </CardContent>

            <div className="px-6">
              <div className="h-px bg-border" />
            </div>

            <CardFooter className="flex flex-col items-start pt-6">
              <p className="font-medium text-sm mb-4">What's included:</p>
              <div className="space-y-4 w-full">
                {pricing.benefitList.map((benefit: BenefitItem, i: number) => (
                  <div key={i} className="flex items-start gap-2">
                    {benefit.status === "✅" ? (
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    ) : benefit.status === "❌" ? (
                      <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    ) : (
                      <div className="w-5" />
                    )}
                    <span className="text-sm text-muted-foreground">
                      {benefit.label}
                    </span>
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Support Plans */}
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Support Plans
        </h2>
        <p className="text-muted-foreground mt-4">
          Choose the right level of support for your organization's needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {supportPricing.map((plan, index) => (
          <Card
            key={index}
            className="border rounded-xl overflow-hidden h-full transition-all hover:shadow-md"
          >
            <div className={cn("p-6 h-full", plan.color)}>
              <div className="flex items-center gap-3 mb-4">
                {plan.icon}
                <h3 className="text-xl font-semibold">{plan.title}</h3>
              </div>
              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 shrink-0 mt-1" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-24 text-center bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our team can create a tailored HR solution that perfectly fits your
          organization's unique requirements.
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90"
          onClick={() => (window.location.href = "#request-demo")}
        >
          Schedule a Consultation
        </Button>
      </div>
    </section>
  );
};
