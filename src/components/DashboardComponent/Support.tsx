import { useState } from "react";
import { FaRegQuestionCircle, FaChevronRight } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { FileText } from "lucide-react";
import SupportChat from "./SupportChat";

const Support = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="relative w-full">
      <div className="w-full h-[355px] rounded-[16px] border-[#372358] border-[1.11px] p-[33.11px_33.11px_1.11px_33.11px] flex flex-col gap-[23.99px] bg-gradient-to-b from-[#1A1A2E] to-[#0A0A0F]">
        <div className="flex w-full h-[51.96px] gap-[12px]">
          <div className="w-[47.99px] h-[47.99px] rounded-[14px] flex items-center justify-center bg-gradient-to-b from-[#FF6900] to-[#F0B100]">
            <FaRegQuestionCircle className="text-white text-xl" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-inter text-[24px] text-white">
              Support Center
            </span>
            <span className="font-inter text-[14px] text-[#99A1AF]">
              We're here to help 24/7
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full h-[212.4px] gap-[12px]">
          <div className="flex justify-between items-center w-full h-[71.98px] rounded-[14px] px-[24px] bg-gradient-to-b from-[#953E79] to-[#440830]">
            <div className="flex items-center gap-[12px]">
              <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-white/20">
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
              className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
            >
              <FaChevronRight className="text-white/70" />
            </div>
          </div>

          <div className="flex justify-between items-center w-full h-[58.21px] rounded-[14px] border-[#364153] bg-[#1B1B25] border-[1.11px] px-[24px]">
            <div className="flex items-center gap-[12px]">
              <FileText size={20} className="text-white" />
              <span className="font-inter text-[16px] text-white">
                FAQ & Help Articles
              </span>
            </div>

            <FaChevronRight className="text-white/70" />
          </div>

          <div className="flex justify-between items-center w-full h-[58.21px] rounded-[14px] border-[#364153] bg-[#1B1B25] border-[1.11px] px-[24px]">
            <div className="flex items-center gap-[12px]">
              <RiTelegram2Line size={20} className="text-white" />
              <span className="font-inter text-[16px] text-white">
                Send us an Email
              </span>
            </div>

            <FaChevronRight className="text-white/70" />
          </div>
        </div>
      </div>

      {openChat && <SupportChat onClose={() => setOpenChat(false)} />}
    </div>
  );
};

export default Support;
