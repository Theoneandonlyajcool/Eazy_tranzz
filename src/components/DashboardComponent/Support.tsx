import { useState } from "react";
import { FaRegQuestionCircle, FaChevronRight } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { FileText } from "lucide-react";
import SupportChat from "./SupportChat";

const Support = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="relative w-full">
      <div className="w-full h-[355px] rounded-3xl border border-purple-200 dark:border-[#372358] p-[33.11px_33.11px_1.11px_33.11px] flex flex-col gap-[23.99px] bg-linear-to-b from-purple-50 to-gray-100 dark:from-[#1A1A2E] dark:to-[#0A0A0F]">
        <div className="flex w-full h-[51.96px] gap-3">
          <div className="w-[47.99px] h-[47.99px] rounded-[14px] flex items-center justify-center bg-linear-to-b from-[#FF6900] to-[#F0B100]">
            <FaRegQuestionCircle className="text-white text-xl" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-inter text-[24px] text-[#222] dark:text-white">
              Support Center
            </span>
            <span className="font-inter text-[14px] text-gray-500 dark:text-[#99A1AF]">
              We're here to help 24/7
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full h-[212.4px] gap-3">
          {/* Live Chat - Special gradient card */}
          <div className="flex justify-between items-center w-full h-[71.98px] rounded-[14px] px-6 bg-linear-to-r from-[#953E79] to-[#440830]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center bg-white/20">
                <FaRegQuestionCircle className="text-white" />
              </div>

              <div className="flex flex-col">
                <span className="font-inter text-[16px] text-white">
                  Live Chat
                </span>
                <span className="font-inter text-[12px] text-white/70">
                  Average response time: 2 minutes
                </span>
              </div>
            </div>

            <div
              onClick={() => setOpenChat(true)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-full transition-colors"
            >
              <FaChevronRight className="text-white/70" />
            </div>
          </div>

          {/* FAQ & Help Articles */}
          <div className="flex justify-between items-center w-full h-[58.21px] rounded-[14px] border border-gray-300 dark:border-[#364153] bg-gray-100 dark:bg-[#1B1B25] px-6 hover:bg-gray-200 dark:hover:bg-[#252535] transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-[#222] dark:text-white" />
              <span className="font-inter text-[16px] text-[#222] dark:text-white">
                FAQ & Help Articles
              </span>
            </div>

            <FaChevronRight className="text-gray-500 dark:text-white/70" />
          </div>

          {/* Email Support */}
          <div className="flex justify-between items-center w-full h-[58.21px] rounded-[14px] border border-gray-300 dark:border-[#364153] bg-gray-100 dark:bg-[#1B1B25] px-6 hover:bg-gray-200 dark:hover:bg-[#252535] transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <RiTelegram2Line
                size={20}
                className="text-[#222] dark:text-white"
              />
              <span className="font-inter text-[16px] text-[#222] dark:text-white">
                Send us an Email
              </span>
            </div>

            <FaChevronRight className="text-gray-500 dark:text-white/70" />
          </div>
        </div>
      </div>

      {openChat && <SupportChat onClose={() => setOpenChat(false)} />}
    </div>
  );
};

export default Support;
