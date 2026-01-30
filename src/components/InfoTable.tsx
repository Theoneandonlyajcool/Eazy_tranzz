import React from "react";
import { TbWorld } from "react-icons/tb";
import {
  FiClock,
  FiMail,
  FiPhone,
  FiSend,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

const InfoTable = () => {
  return (
    <section className="w-full flex justify-center py-10 bg-gradient-to-b from-[#000000] via-[#0A0A10] via-[#120D1B] to-[#0A0A0F]">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        <article className="w-full rounded-[16px] p-[33px] flex flex-col gap-3 border border-[#37363D] bg-gradient-to-b from-[#16161B] via-[#191522] to-[#211F28]">
          <h1 className="font-inter font-bold text-[26px] sm:text-[30px] text-white">
            Send Us a Message
          </h1>

          <p className="font-inter text-[15px] sm:text-[16px] text-[#99A1AF] max-w-[420px]">
            Fill out the form below and we'll get back to you
          </p>

          <div className="flex flex-col gap-6 mt-2">
            {[
              { label: "Full Name", type: "text", placeholder: "John Doe" },
              {
                label: "Email Address",
                type: "email",
                placeholder: "john@example.com",
              },
              {
                label: "Phone Number",
                type: "tel",
                placeholder: "+234 800 123 4567",
              },
              { label: "Subject", type: "text", placeholder: "" },
            ].map((f, i) => (
              <div key={i} className="flex flex-col">
                <label className="text-sm text-white mb-2">
                  {f.label} <span className="text-[#FF6467]">*</span>
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full h-[50px] px-4 rounded-[10px] border border-[#545457] bg-[#201D26] text-white focus:outline-none"
                />
              </div>
            ))}

            <div className="flex flex-col">
              <label className="text-sm text-white mb-2">
                Message <span className="text-[#FF6467]">*</span>
              </label>
              <textarea
                placeholder="Tell us how we can help you..."
                className="w-full h-[160px] px-4 py-3 rounded-[10px] border border-[#545457] bg-[#201D26] text-white resize-none focus:outline-none"
              />
            </div>

            <button className="w-full h-[50px] bg-gradient-to-r from-[#953E79] to-[#440830] rounded-[10px] text-white font-bold flex items-center justify-center gap-2">
              <FiSend className="w-5 h-5" />
              Send Message
            </button>
          </div>
        </article>

        <aside className="w-full flex flex-col gap-6">
          <div className="rounded-[16px] border border-[#37363D] p-[33px] bg-[#16161B]">
            <h2 className="font-bold text-[22px] text-white mb-4">
              Quick Information
            </h2>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <FiClock className="text-[#C27AFF] w-6 h-6" />,
                  title: "Support Hours",
                  a: "24/7 - Always Available",
                  b: "Mon-Fri, 8AM-6PM",
                },
                {
                  icon: <FiMail className="text-[#C27AFF] w-6 h-6" />,
                  title: "Email Us",
                  a: "support@eazytranz.com",
                  b: "Response within 2 hours",
                },
                {
                  icon: <FiPhone className="text-[#C27AFF] w-6 h-6" />,
                  title: "Call Us",
                  a: "+234 800 123 4567",
                  b: "Toll-free within Nigeria",
                },
              ].map((i, x) => (
                <div key={x} className="flex gap-4">
                  <div className="w-[50px] h-[50px] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-[#AD46FF33] to-[#2B7FFF33]">
                    {i.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{i.title}</p>
                    <p className="text-[#99A1AF] text-sm">{i.a}</p>
                    <p className="text-[#99A1AF] text-sm">{i.b}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <div className="w-[50px] h-[50px] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-[#AD46FF33] to-[#2B7FFF33]">
                  <TbWorld className="text-[#C27AFF] w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-semibold">Languages</p>
                  <p className="text-[#99A1AF] text-sm">
                    English, Yoruba, Igbo, Hausa
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[16px] border border-[#37363D] p-[33px] bg-[#1B1622]">
            <p className="font-bold text-[22px] text-white mb-2">
              Connect With Us
            </p>
            <p className="text-[#99A1AF] mb-4">
              Follow us on social media for updates and support
            </p>

            <div className="flex gap-3 flex-wrap">
              {[FiTwitter, FiFacebook, FiInstagram, FiLinkedin].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-[48px] h-[48px] rounded-[10px] flex items-center justify-center bg-[#2D2B33] border border-[#57555C]"
                  >
                    <Icon className="text-white w-5 h-5" />
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="rounded-[16px] border border-[#481219] p-[33px] bg-gradient-to-b from-[#FB2C361A] to-[#FB2C360D]">
            <p className="font-bold text-[18px] text-[#FF6467]">
              Emergency Support
            </p>
            <p className="text-[#99A1AF] text-sm mb-4">
              For urgent transaction issues or security concerns
            </p>
            <button className="w-full h-[50px] rounded-[10px] border border-[#A11F28] bg-[#FB2C3633] text-white font-semibold">
              Contact Emergency Line
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default InfoTable;
