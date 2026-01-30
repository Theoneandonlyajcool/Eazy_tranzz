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
    <div className="h-full w-full bg-gradient-to-b from-[#0A0A10] to-[#0A0A0F] flex items-center justify-center">
      <article className="h-[90%] w-[90%] mt-35 flex flex-col gap-[64px] px-4 md:px-0">
        <div className="flex flex-col items-center gap-[16px] px-4 sm:px-0">
          <h1 className="font-inter font-bold text-[36px] leading-[40px] text-white text-center max-w-full sm:max-w-[364px]">
            Our Office Locations
          </h1>
          <p className="font-inter font-normal text-[16px] md:text-[17px] leading-[24px] text-[#99A1AF] text-center max-w-full sm:max-w-[398px]">
            Visit us in person at any of our offices across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[64px] justify-center">
          {officeData.map((office, idx) => (
            <div
              key={idx}
              className="
                w-full rounded-[14px] border border-[#545457] p-[24px]
                flex flex-col gap-[16px] bg-[#16161B]
                md:last:col-span-2 md:last:max-w-[420px] md:last:mx-auto
                lg:last:col-span-1 lg:last:max-w-none
              "
            >
              <div className="pl-2 flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <div className="w-[56px] h-[56px] rounded-[14px] flex items-center justify-center bg-gradient-to-r from-[#AD46FF33] to-[#2B7FFF33]">
                    <FiMapPin className="w-6 h-6 text-[#C27AFF]" />
                  </div>
                  <h2 className="font-inter font-bold text-[24px] leading-[32px] text-white">
                    {office.city}
                  </h2>
                </div>

                <div className="flex flex-col gap-[12px]">
                  <div className="flex items-center gap-2 text-[#99A1AF]">
                    <FiMapPin className="w-4 h-4 text-[#C27AFF]" />
                    <span className="font-inter font-normal text-[15px] leading-[24px]">
                      {office.address1}
                      <br />
                      {office.address2}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#99A1AF]">
                    <IoMdTime className="w-4 h-4 text-[#C27AFF]" />
                    <span className="font-inter font-normal text-[15px] leading-[24px]">
                      {office.hours}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#99A1AF]">
                    <IoCallOutline className="w-4 h-4 text-[#C27AFF]" />
                    <span className="font-inter font-normal text-[15px] leading-[24px]">
                      {office.phone}
                    </span>
                  </div>
                </div>

                <button className="w-full h-[38.18px] bg-[#28282B] rounded-[10px] border border-[#525255] text-white font-inter font-semibold text-[16px] flex items-center justify-center">
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
