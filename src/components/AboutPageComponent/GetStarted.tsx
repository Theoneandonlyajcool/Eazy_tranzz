const GetStarted = () => {
  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-auto min-h-[300px] sm:min-h-[300px] md:h-[60%] mb-10 sm:mb-16 md:mb-20 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-[#0D0106] to-[#252525] flex flex-col gap-4 sm:gap-5 md:gap-6 items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 64 64"
        fill="none"
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
      >
        <path
          d="M39.9957 37.329C40.529 34.6627 41.8622 32.7962 43.9953 30.6631C46.6616 28.2634 47.9948 24.7971 47.9948 21.3308C47.9948 17.0878 46.3093 13.0186 43.309 10.0183C40.3088 7.01805 36.2396 5.33252 31.9966 5.33252C27.7536 5.33252 23.6843 7.01805 20.6841 10.0183C17.6838 13.0186 15.9983 17.0878 15.9983 21.3308C15.9983 23.9972 16.5316 27.1968 19.9979 30.6631C21.8643 32.5296 23.4641 34.6627 23.9974 37.329"
          stroke="#7B0E58"
          strokeWidth="5.33276"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.9973 47.9946H39.9956"
          stroke="#7B0E58"
          strokeWidth="5.33276"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.6638 58.6602H37.3293"
          stroke="#7B0E58"
          strokeWidth="5.33276"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-[30px] text-center">
        Ready to Get Started?
      </h2>
      <p className="text-[#D1D5DC] w-full sm:w-[85%] md:w-[75%] lg:w-[70%] text-center text-sm sm:text-base md:text-lg">
        Join thousands of satisfied customers who trust EazyTranz for their
        currency exchange needs. Experience the difference today.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center items-center mt-2 sm:mt-0">
        <button className="w-full cursor-pointer sm:w-auto px-6 py-3 sm:py-[14px] rounded-[10px] text-white bg-gradient-to-r from-[#953E79] to-[#440830] text-sm sm:text-base font-medium">
          Create Free Account
        </button>
        <button className="w-full cursor-pointer sm:w-auto px-6 py-3 sm:py-[14px] bg-[rgba(255,255,255,0.10)] rounded-[10px] text-white text-sm sm:text-base font-medium">
          Back Home
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
