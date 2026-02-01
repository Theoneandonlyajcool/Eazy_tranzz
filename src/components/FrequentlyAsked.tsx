import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const faqData = [
  {
    question: "What are your customer support hours?",
    answer:
      "Our customer support team is available 24/7 via phone, email, and live chat to assist you with any inquiries.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Email inquiries are typically responded to within 2 hours during business hours. Phone and live chat support provide immediate assistance.",
  },
  {
    question: "Can I visit your office in person?",
    answer:
      "Yes! We have offices in Lagos, Abuja, and Port Harcourt. Please check our office hours and consider scheduling an appointment for personalized service.",
  },
  {
    question: "What information should I include in my message?",
    answer:
      "Please include your full name, email, phone number, and a detailed description of your inquiry. For transaction-related issues, include your transaction ID.",
  },
  {
    question: "Do you offer support in multiple languages?",
    answer:
      "Yes, we offer support in English, Yoruba, Igbo, and Hausa to better serve our diverse customer base.",
  },
];

const FrequentlyAsked = () => {
  return (
    <section className="w-full bg-linear-to-b from-[#0A0A10] to-[#0A0A0F] flex justify-center">
      <div className="w-full max-w-[1200px] mt-32 sm:mt-20">
        <div className="w-full bg-[linear-gradient(to_bottom,#00000000,#2B7FFF0D,#00000000)] rounded-3xl flex flex-col items-center px-4 py-12 gap-12">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-inter font-bold text-[36px] leading-10 text-white text-center w-full sm:w-[500px]">
              Frequently Asked Questions
            </h1>
            <p className="font-inter font-normal text-[16px] leading-6 text-[#99A1AF] text-center w-full sm:w-[398px]">
              Quick answers to common questions about contacting us
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[900px]">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="w-full rounded-[14px] border border-[#545457] p-[25px] flex flex-col gap-2 bg-[#14161E]"
              >
                <div className="flex items-start gap-2">
                  <IoMdCheckmarkCircleOutline className="text-[#05DF72] w-5 h-6 mt-1" />
                  <h3 className="font-inter font-semibold text-[18px] leading-7 text-white">
                    {faq.question}
                  </h3>
                </div>
                <p className="font-inter font-normal text-[15px] leading-[22.75px] text-[#99A1AF] ml-[27px] whitespace-normal">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAsked;
