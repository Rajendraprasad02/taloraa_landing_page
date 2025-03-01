import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Taloraa?",
    answer:
      "Taloraa is an all-in-one Human Resource Management System (HRMS) designed to streamline HR operations, automate workflows, and enhance workforce management. It covers recruitment, payroll, leave tracking, performance evaluation, and more.",
    value: "item-1",
  },
  {
    question: "Who can use Taloraa",
    answer:
      "Taloraa is ideal for startups, SMEs, and large enterprises looking to digitalize their HR processes, improve efficiency, and ensure compliance with labor laws.",
    value: "item-2",
  },
  {
    question: "How secure is employee data in Taloraa?",
    answer:
      "We use end-to-end encryption, role-based access controls, and secure cloud storage to protect employee data and ensure GDPR compliance.",
    value: "item-3",
  },
  {
    question: "Does Taloraa support remote work?",
    answer:
      "Yes! With cloud-based access, employees and HR teams can manage HR processes from anywhere, anytime.",
    value: "item-4",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Absolutely! Our 24/7 support team is available via email, chat, and phone to assist you with any queries.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#request-demo"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
