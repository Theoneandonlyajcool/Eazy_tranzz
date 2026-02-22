import { Bot, X, Image, MapPin } from "lucide-react";
import { RiTelegram2Line } from "react-icons/ri";
import { BsArrowsAngleContract } from "react-icons/bs";

type SupportChatProps = {
  onClose: () => void;
};

const SupportChat = ({ onClose }: SupportChatProps) => {
  return (
    <div className=" fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 w-full h-full sm:w-[447.99px] sm:h-[600px] rounded-none sm:rounded-[16px] border border-[#372358]  flex flex-col bg-gradient-to-b from-[#1A1A2E] to-[#0A0A0F] animate-slideIn z-50 ">
      <div className="w-full h-[73px] px-4 sm:px-[15.99px] flex justify-between items-center bg-[linear-gradient(to_bottom_right,#953E79,#440830)]">
        <div className="flex items-center gap-3">
          <div className="relative w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
            <Bot size={20} />
            <div className="absolute bottom-0 right-0 w-[12px] h-[12px] rounded-full bg-[#05DF72] border border-white" />
          </div>

          <div>
            <p className="text-white font-semibold text-[16px]">
              EazyTranz Support
            </p>

            <div className="flex items-center gap-2 text-[12px] text-white">
              <span className="w-[8px] h-[8px] rounded-full bg-[#05DF72]" />
              Online
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center">
            <BsArrowsAngleContract size={20} className="text-white" />
          </div>

          <div
            onClick={onClose}
            className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center cursor-pointer"
          >
            <X size={20} className="text-white" />
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 sm:px-[15.99px] pt-4 sm:pt-[15.99px] bg-[#0A0A0F] overflow-y-auto">
        <div className="flex gap-3 mb-4">
          <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#00C950] to-[#00BC7D] flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>

          <div className="flex flex-col gap-1">
            <div className="w-full max-w-[291px] rounded-[16px] bg-[#222227] px-4 py-4">
              <p className="text-[15px] text-white leading-[20px]">
                Hello ayoradel! 👋 Welcome to EazyTranz support. I'm Sarah, your
                customer support agent. How can I help you today?
              </p>
            </div>
            <span className="text-[12px] text-[#6A7282]">02:09 PM</span>
          </div>
        </div>
      </div>
      {/* QUICK REPLIES */}{" "}
      <div className="border-t border-[#372358] px-4 sm:px-[15.99px] pt-2 sm:pt-[9px] pb-2 bg-[#0A0A0F]">
        <span className="text-[12px] text-[#99A1AF]">Quick replies:</span>

        <div className="flex flex-wrap gap-3 mt-3">
          {[
            "What are your current rates?",
            "How do I start a transaction?",
            "Check transaction status",
            "Payment methods available",
          ].map((q) => (
            <button
              key={q}
              className="border border-[#454549] bg-[#12121B] rounded-full px-4 py-2 text-[12px] text-white"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full border-t border-[#372358] pt-4 sm:pt-[17.1px] px-4 sm:px-[15.99px] bg-[#1A1A2E] flex flex-col gap-2 sm:gap-[7.99px]">
        <div className="w-full flex items-center gap-2 sm:gap-[7.99px]">
          <div className="w-[35.97px] h-[35.97px] rounded-[10px] flex items-center justify-center p-[7.99px]">
            <MapPin className="text-[#99A1AF]" size={18} />
          </div>

          <div className="w-[35.97px] h-[35.97px] rounded-[10px] flex items-center justify-center p-[7.99px]">
            <Image className="text-[#99A1AF]" size={18} />
          </div>

          <input
            placeholder="Type your message..."
            className="flex-1 min-w-0 h-[38px] rounded-[10px] border border-[#364153] bg-[#0A0A0F] px-4 text-white text-[14px] outline-none"
          />

          <div className="w-[35.97px] h-[35.97px] rounded-[10px] flex items-center justify-center p-[7.99px] bg-gradient-to-b from-[#953E79] to-[#440830] opacity-50">
            <RiTelegram2Line size={22} className="text-white" />
          </div>
        </div>

        <div className="text-center text-[12px] text-[#6A7282]">
          Press Enter to send • Shift + Enter for new line
        </div>
      </div>
    </div>
  );
};

export default SupportChat;
