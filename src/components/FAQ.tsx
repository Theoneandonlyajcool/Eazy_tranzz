import { Mail, MessageSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    question: "How does the foreign transaction exchange process work?",
    answer:
      "Our process is streamlined for speed and security. Simply select your currencies, verify the current rate, and confirm the transaction. Most exchanges are completed within minutes.",
  },
  {
    question: "Which payment platforms do you support?",
    answer:
      "We support a wide range of global payment platforms including major credit cards, bank transfers, and popular digital wallets.",
  },
  {
    question: "Are there any fees associated with your exchange services?",
    answer:
      "We maintain full transparency with our fee structure. All applicable fees are shown upfront before you confirm any transaction.",
  },
  {
    question: "How long does it take to complete foreign currency exchange?",
    answer:
      "Most transactions are processed instantly. Depending on the payment method and bank, it may take 1-3 business days for funds to reflect in your account.",
  },
  {
    question: "How do I start using your finance analytics platform?",
    answer:
      "Starting is easy! Just create an account, connect your data sources, and our AI-powered engine will begin generating insights for you immediately.",
  },
  {
    question: "Is my money safe with your service?",
    answer:
      "Security is our top priority. We use industry-leading encryption and partner with regulated financial institutions to ensure your funds are always protected.",
  },
  {
    question: "How long have your company been operational?",
    answer:
      "We have been providing reliable financial services for over a decade, serving thousands of customers worldwide.",
  },
  {
    question: "What should I do if i encounter a problem with my transaction?",
    answer:
      "Our support team is available 24/7. You can reach out via live chat or email, and we'll resolve any issues promptly.",
  },
  {
    question: "Do you offer any special rates or discounts for frequent users?",
    answer:
      "Yes, we have a loyalty program for frequent users that provides preferential exchange rates and reduced transaction fees.",
  },
];

export const FAQSection = () => {
  return (
    <section className="bg-[#0A0E1E] text-white relative py-24 px-6 md:px-12 lg:px-24  mx-auto overflow-hidden">
      {/* Decorative accent line */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary/40 rounded-full blur-sm hidden lg:block" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
        {/* Left Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="bg-[#1a1434] inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#462371] text-sm font-medium animate-fade-in">
              <MessageSquare className="w-4 h-4" />
              <span>Answers to Common Queries</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] faq-gradient-text animate-slide-up">
              Frequently asked <br />
              <span className="text-muted-foreground/40">questions</span>
            </h2>
          </div>

          {/* Support Card */}
          <div
            className="border border-gray-600 bg-white/2 shadow-2xl backdrop-blur-3xl p-8 rounded-3xl space-y-6 max-w-md "
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">
                Still have a questions?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Can't find the answer to your question? Send us an email and
                we'll get back to you as soon as possible!
              </p>
            </div>

            <Button className="cursor-pointer group relative h-12 px-8 rounded-xl bg-linear-to-br from-[#953E79] to-[#440830] hover:opacity-90 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-white/10 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12" />
              <div className="flex items-center gap-2 relative">
                <Mail className="w-4 h-4" />
                <span>Send email</span>
              </div>
            </Button>
          </div>
        </div>

        {/* Right Content - Accordion */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Accordion type="single" collapsible className="space-y-4  w-full">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/5 bg-white/2 rounded-2xl px-6 transition-all data-[state=open]:bg-white/5 data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="cursor-pointer text-left py-6 hover:no-underline hover:text-gray-300 transition-colors gap-4">
                  <span className="text-lg md:text-xl font-medium leading-tight">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
