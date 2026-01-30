import "../../App.css";
import image from "../../assets/21bd915876ef4f1cef017ccdff67f05d2debf0b4.jpg";

interface Boxes {
  icon: React.ReactNode;
  text: string;
  sentence: string;
}

const FirstHero = () => {
  const boxes: Boxes[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M21.3309 27.9969V25.3306C21.3309 23.9162 20.7691 22.5598 19.769 21.5597C18.7689 20.5596 17.4125 19.9978 15.9981 19.9978H7.99901C6.58468 19.9978 5.22827 20.5596 4.22819 21.5597C3.2281 22.5598 2.66626 23.9162 2.66626 25.3306V27.9969"
            stroke="#953E79"
            strokeWidth="2.66638"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.3311 4.17017C22.4746 4.46663 23.4873 5.13441 24.2103 6.06871C24.9333 7.00301 25.3256 8.15092 25.3256 9.33227C25.3256 10.5136 24.9333 11.6615 24.2103 12.5958C23.4873 13.5301 22.4746 14.1979 21.3311 14.4944"
            stroke="#953E79"
            strokeWidth="2.66638"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.3301 27.997V25.3306C29.3293 24.149 28.936 23.0012 28.2121 22.0674C27.4882 21.1335 26.4746 20.4665 25.3306 20.1711"
            stroke="#953E79"
            strokeWidth="2.66638"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9988 14.665C14.944 14.665 17.3315 12.2775 17.3315 9.33227C17.3315 6.38707 14.944 3.99951 11.9988 3.99951C9.05357 3.99951 6.66602 6.38707 6.66602 9.33227C6.66602 12.2775 9.05357 14.665 11.9988 14.665Z"
            stroke="#953E79"
            strokeWidth="2.66638"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "50K+",
      sentence: "Happy Customers",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M21.3311 9.33228H29.3302V17.3314"
            stroke="#953E79"
            strokeWidth="2.66638"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.33 9.33228L17.9979 20.6644L11.332 13.9984L2.66626 22.6642"
            stroke="#953E79"
            strokeWidth="2.66638"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "$500M+",
      sentence: "Transaction Volume",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M14.6651 27.997C22.0281 27.997 29.3302 22.0281 29.3302 15.9981C29.3302 8.63515 23.3613 2.66626 15.9983 2.66626C8.63527 2.66626 2.66638 8.63515 2.66638 15.9981C2.66638 22.0281 8.63527 27.997 15.9983 27.997Z"
            stroke="#953E79"
            strokeWidth="2.66638"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "99.9%",
      sentence: "Uptime Guarantee",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M15.9983 29.33C23.3613 29.33 29.3302 23.3611 29.3302 15.9981C29.3302 8.63515 23.3613 2.66626 15.9983 2.66626C8.63527 2.66626 2.66638 8.63515 2.66638 15.9981C2.66638 23.3611 8.63527 29.33 15.9983 29.33Z"
            stroke="#953E79"
            strokeWidth="2.66638"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.9983 2.66626C12.575 6.26074 10.6655 11.0343 10.6655 15.9981C10.6655 20.962 12.575 25.7356 15.9983 29.33C19.4216 25.7356 21.331 20.962 21.331 15.9981C21.331 11.0343 19.4216 6.26074 15.9983 2.66626Z"
            stroke="#953E79"
            strokeWidth="2.66638"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66638 15.9983H29.3302"
            stroke="#953E79"
            strokeWidth="2.66638"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "150+",
      sentence: "Countries Served",
    },
  ];

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-slate-900 to-slate-800"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="overlay relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row w-auto h-auto px-4 sm:px-6 py-3 sm:py-3 mt-10 sm:mt-12 lg:mt-20 justify-center items-center flex-shrink-0 rounded-full border border-[rgba(173,70,255,0.5)] bg-gradient-to-r from-[rgba(173,70,255,0.2)] to-[rgba(43,127,255,0.2)]">
          <p className="text-center text-white text-sm sm:text-base">
            About EazyTranz
          </p>
        </div>

        <h1 className="boldText text-bold text-3xl sm:text-4xl lg:text-6xl text-white text-center mt-6 sm:mt-8 font-bold">
          Transforming Currency Exchange
        </h1>

        <h3
          className="text-center boldText text-2xl sm:text-3xl lg:text-5xl font-bold mt-2 sm:mt-4
               bg-gradient-to-br from-[#953E79] to-[#440830] 
               bg-clip-text text-transparent"
        >
          One Transaction at a Time
        </h3>

        <p className="text-[#99A1AF] text-center text-sm sm:text-base lg:text-lg w-full sm:w-4/5 lg:w-1/2 mb-8 sm:mb-12 lg:mb-16 mt-4 sm:mt-6">
          We're on a mission to make international currency exchange fast,
          secure, and accessible to everyone. Since 2018, we've helped thousands
          of customers get the best rates with zero hassle.
        </p>

        <div className="w-full sm:w-4/5 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {boxes.map((item, index) => (
            <div
              key={index}
              className="rounded-lg sm:rounded-2xl bg-gradient-to-l from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.11)] p-6 sm:p-8 flex flex-col items-center justify-center gap-2 backdrop-blur-sm"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-xl sm:text-2xl text-center">
                {item.text}
              </h3>
              <p className="text-[#99A1AF] text-xs sm:text-sm text-center">
                {item.sentence}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstHero;
