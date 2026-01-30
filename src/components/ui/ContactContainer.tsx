import { IoMdMail } from "react-icons/io";
import { MdOutlineCall } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";

const ContactContainer = () => {
  const Items = [
    {
      icons: IoMdMail,
      gradient: "bg-gradient-to-r from-[#AD46FF] to-[#9810FA]",
      text1: "Email Support",
      text2: "Get a response within 2 hours",
      contact: "support@eazytranz.com",
      buttonText: "Send Email",
    },
    {
      icons: MdOutlineCall,
      gradient: "bg-gradient-to-r from-[#2B7FFF] to-[#155DFC]",
      text1: "Phone Support",
      text2: "24/7 customer service line",
      contact: "+234 800 123 4567",
      buttonText: "Call Now",
    },
    {
      icons: IoChatbubbleOutline,
      gradient: "bg-gradient-to-r from-[#00C950] to-[#00A63E]",
      text1: "Live Chat",
      text2: "Chat with our support team",
      contact: "Available 24/7",
      buttonText: "Start Chat",
    },
    {
      icons: FiHeadphones,
      gradient: "bg-gradient-to-r from-[#00BBA7] to-[#009689]",
      text1: "WhatsApp",
      text2: "Message us on WhatsApp",
      contact: "Available 24/7",
      buttonText: "Start Chat",
    },
  ];

  return (
    <section className="bg-[#00000000] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
gap-4 sm:gap-6 lg:gap-8 
px-4 sm:px-6 md:px-10 lg:px-0"
        >
          {Items.map((item, index) => (
            <div
              key={index}
              className="bg-[#121216] rounded-xl border border-[#535356] p-4 sm:p-6 flex flex-col text-center items-center sm:items-start"
            >
              <div
                className={`${item.gradient} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3`}
              >
                <item.icons className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>

              <div className="flex flex-col items-center sm:items-start w-full">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                  {item.text1}
                </h3>

                <p className="text-xs sm:text-sm text-[#99A1AF]/80 leading-snug sm:leading-relaxed mb-1 sm:mb-2 text-center sm:text-left">
                  {item.text2}
                </p>

                <h3 className="font-inter font-semibold text-xs sm:text-sm leading-5 sm:leading-6 text-[#C27AFF] mb-2 break-words">
                  {item.contact}
                </h3>

                <button className="w-full sm:w-[180px] lg:w-[220px] h-[36px] sm:h-[38px] rounded-lg border border-[#545457] bg-[#2A2A2E] text-white font-inter text-sm flex items-center justify-center">
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
