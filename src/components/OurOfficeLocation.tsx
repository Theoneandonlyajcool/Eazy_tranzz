import { FiMapPin } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

const officeData = [
  {
    city: "Lagos",
    address1: "15 Admiralty Way, Lekki Phase 1",
    address2: "Lagos State, Nigeria",
    hours: "Mon - Fri: 8:00 AM - 6:00 PM",
    phone: "+234 1 234 5678",
  },
  {
    city: "Abuja",
    address1: "23 Gimbiya Street, Garki",
    address2: "Federal Capital Territory, Nigeria",
    hours: "Mon - Fri: 8:00 AM - 6:00 PM",
    phone: "+234 9 876 5432",
  },
  {
    city: "Port Harcourt",
    address1: "45 Aba Road, GRA Phase 2",
    address2: "Rivers State, Nigeria",
    hours: "Mon - Fri: 9:00 AM - 5:00 PM",
    phone: "+234 84 123 4567",
  },
];

const OurOfficeLocation = () => {
  return (
    <div className="w-full min-h-screen bg-linear-to-b from-[#0A0A10] to-[#0A0A0F] flex items-center justify-center px-4 sm:px-6">
      <article className="w-full max-w-[1200px] flex flex-col gap-12 md:gap-16 py-12">
        <div className="flex flex-col items-center gap-4 text-center px-2 sm:px-0">
          <h1 className="font-inter font-bold text-[28px] sm:text-[36px] leading-9 sm:leading-10 text-white max-w-full sm:max-w-[364px]">
            Our Office Locations
          </h1>
          <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[17px] leading-5 md:leading-6 text-[#99A1AF] max-w-full sm:max-w-[398px]">
            Visit us in person at any of our offices across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-center">
          {officeData.map((office, idx) => (
            <div
              key={idx}
              className="w-full rounded-[14px] border border-[#545457] p-4 sm:p-6 flex flex-col gap-4 bg-[#16161B]"
            >
              <div className="pl-1 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[14px] flex items-center justify-center bg-linear-to-r from-[#AD46FF33] to-[#2B7FFF33]">
                    <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#C27AFF]" />
                  </div>
                  <h2 className="font-inter font-bold text-[20px] sm:text-[24px] leading-7 sm:leading-8 text-white">
                    {office.city}
                  </h2>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-start sm:items-center gap-2 text-[#99A1AF]">
                    <FiMapPin className="w-4 h-4 text-[#C27AFF] " />
                    <span className="font-inter font-normal text-[13px] sm:text-[15px] leading-5 sm:leading-6">
                      {office.address1}
                      <br />
                      {office.address2}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#99A1AF]">
                    <IoMdTime className="w-4 h-4 text-[#C27AFF]" />
                    <span className="font-inter font-normal text-[13px] sm:text-[15px] leading-5 sm:leading-6">
                      {office.hours}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#99A1AF]">
                    <IoCallOutline className="w-4 h-4 text-[#C27AFF]" />
                    <span className="font-inter font-normal text-[13px] sm:text-[15px] leading-5 sm:leading-6">
                      {office.phone}
                    </span>
                  </div>
                </div>

                <button className="w-full sm:w-auto h-[36px] sm:h-[38px] bg-[#28282B] rounded-[10px] border border-[#525255] text-white font-inter font-semibold text-[14px] sm:text-[16px] flex items-center justify-center">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default OurOfficeLocation;
