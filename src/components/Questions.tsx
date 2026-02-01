import { FiMusic } from "react-icons/fi";

const Questions = () => {
  return (
    <section
      className="
        w-full
        min-h-screen
        bg-linear-to-b from-[#0A0A10] to-[#0A0A0F]
        flex justify-center
        items-start lg:items-center
        px-3 sm:px-4
        pt-10 sm:pt-14 lg:pt-0
      "
    >
      <div className="w-full max-w-[1200px]">
        <div
          className="
            border border-[#481B62]
            bg-linear-to-br from-[#1B091F] to-[#252736]
            rounded-3xl
            flex flex-col items-center justify-center
            gap-2 sm:gap-3 lg:gap-4
            px-4 py-6
            sm:px-6 sm:py-8
            lg:px-12 lg:py-12
          "
        >
          <div className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] lg:w-16 lg:h-16 mb-0">
            <FiMusic className="w-full h-full text-[#7B0E58]" />
          </div>

          <h2
            className="
              font-inter font-bold text-white text-center
              text-[22px] sm:text-[26px] lg:text-[30px]
              leading-[26px] sm:leading-[30px] lg:leading-9
              max-w-[95%] sm:max-w-[420px] lg:max-w-[312px]
            "
          >
            Still Have Questions?
          </h2>

          <p
            className="
              font-inter font-normal text-[#D1D5DC] text-center
              text-[13px] sm:text-[15px] lg:text-[16px]
              leading-[18px] sm:leading-[22px] lg:leading-6
              max-w-[95%] sm:max-w-[520px] lg:max-w-[619px]
            "
          >
            Can't find what you're looking for? Our support team is ready to
            help you with any questions or concerns.
          </p>

          <div
            className="
              flex flex-col sm:flex-row
              gap-3 lg:gap-4
              mt-2 sm:mt-3 lg:mt-4
              w-full justify-center
            "
          >
            <button className="w-full sm:w-[177.88px] h-[52px] lg:h-[58.21px] rounded-[10px] bg-linear-to-r from-[#953E79] to-[#440830] text-white font-inter font-semibold text-[16px]">
              Start Live Chat
            </button>

            <button className="w-full sm:w-[177.88px] h-[52px] lg:h-[58.21px] bg-[#363544] border border-[#605F6B] rounded-[10px] text-white font-inter font-semibold text-[16px]">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
