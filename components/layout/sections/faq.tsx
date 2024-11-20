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
    question: "What is Glamr?",
    answer: "Glamr is a mixed reality platform that allows you to virtually try on sneakers and accessories, customize them, and make informed purchase decisions.",
    value: "item-1",
  },
  {
    question: "How does the virtual try-on work?",
    answer: "Using advanced mixed reality technology, our platform overlays digital images of products onto your real-world view, providing a realistic and interactive experience.",
    value: "item-2",
  },
  {
    question: "Where can I try Glamr?",
    answer: "You can experience Glamr at select retail partner locations. Check our store locator for a location near you.",
    value: "item-3",
  },
  {
    question: "Do I need any special equipment?",
    answer: "Our in-store experiences are equipped with all the necessary hardware. Just visit a partner store and enjoy.",
    value: "item-4",
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we prioritize your privacy and use robust security measures to protect your data.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
