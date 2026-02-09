import { TrendingUp, DollarSign, Shield, Zap, Clock } from "lucide-react";

const stats = [
  {
    title: "Account Balance",
    value: "₦2,450,000",
    subValue: "$1,482.42 USD",
    icon: <DollarSign size={24} className="text-white" />,
    iconBg: "bg-green-500",
    change: "+12.5%",
    changeIcon: <TrendingUp size={16} style={{ color: "#05DF72" }} />,
    changeColor: "text-green-400",
  },
  {
    title: "Total Transactions",
    value: "47",
    subValue: "This month",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21.9937 11.9961H19.5144C19.0775 11.9952 18.6524 12.1374 18.3039 12.401C17.9555 12.6646 17.703 13.035 17.585 13.4557L15.2357 21.8133C15.2205 21.8652 15.189 21.9108 15.1457 21.9433C15.1024 21.9757 15.0498 21.9932 14.9958 21.9932C14.9417 21.9932 14.8891 21.9757 14.8458 21.9433C14.8025 21.9108 14.771 21.8652 14.7558 21.8133L9.23742 2.17897C9.22228 2.12706 9.1907 2.08146 9.14744 2.04901C9.10418 2.01656 9.05156 1.99902 8.99749 1.99902C8.94341 1.99902 8.89079 2.01656 8.84753 2.04901C8.80427 2.08146 8.7727 2.12706 8.75756 2.17897L6.40824 10.5366C6.29073 10.9556 6.03972 11.3248 5.69331 11.5883C5.34689 11.8517 4.92399 11.9949 4.48879 11.9961H1.99951"
          stroke="white"
          stroke-width="1.99942"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    iconBg: "bg-[linear-gradient(#953E79,#440830)]",
    change: "+8",
    changeIcon: <TrendingUp size={16} style={{ color: "#05DF72" }} />,
    changeColor: "text-green-400",
  },
  {
    title: "Pending Transfers",
    value: "2",
    subValue: "Awaiting confirmation",
    icon: <Clock size={24} className="text-white" />,
    iconBg: "bg-orange-500",
    change: "-2",
    changeIcon: null,
    changeColor: "text-green-400",
  },
  {
    title: "KYC Status",
    value: "Verified",
    subValue: "Level 3",
    icon: <Shield size={24} className="text-white" />,
    iconBg: "bg-blue-500",
    change: null,
    changeIcon: null,
    changeColor: "",
  },
];

const Overview = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div>
        {/* Welcome Section */}
        <div className="bg-[linear-gradient(90deg,#AD46FF1A,#2B7FFF1A,#00B8DB1A)] rounded-2xl p-6 mb-8 shadow-md">
          <div className="flex items-center gap-2">
            <span className="text-gray-300 text-lg">Welcome back, </span>
            <h2 className="text-3xl font-bold text-purple-600">Ayoradel571</h2>
            <span className="text-3xl">👋</span>
          </div>
          <p className="text-gray-500 mt-2">Sunday, January 25, 2026</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`${stat.iconBg} rounded-lg p-3`}>
                  {stat.icon}
                </div>

                {stat.change && (
                  <span
                    className={`${stat.changeColor} text-sm font-semibold flex items-center gap-[5px]`}
                  >
                    {stat.changeIcon && stat.changeIcon}
                    {stat.change}
                  </span>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-2">{stat.title}</p>
              <p className="text-white text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-gray-500 text-xs">{stat.subValue}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-[linear-gradient(90deg,#AD46FF33,#2B7FFF33,#00B8DB33)] flex flex-col rounded-xl p-10 mb-8 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[linear-gradient(#953E79,#440830))] rounded-lg p-4">
              <Zap size={22} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Quick Actions
              </h3>
              <p className="text-[#99A1AF] text-sm">Start trading in seconds</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[linear-gradient(#953E79,#440830))] cursor-pointer text-white px-14 py-4 rounded-lg font-medium transition-colors flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1639_409)">
                    <path
                      d="M10.8936 16.2511C10.9221 16.322 10.9716 16.3826 11.0355 16.4246C11.0993 16.4666 11.1745 16.4881 11.251 16.4861C11.3274 16.4842 11.4014 16.4589 11.4631 16.4136C11.5247 16.3684 11.571 16.3054 11.5958 16.2331L16.4671 1.99408C16.4911 1.92768 16.4956 1.85582 16.4803 1.78691C16.4649 1.718 16.4302 1.65489 16.3803 1.60497C16.3304 1.55504 16.2673 1.52037 16.1984 1.505C16.1295 1.48964 16.0576 1.49422 15.9912 1.5182L1.75218 6.38944C1.67986 6.41424 1.61686 6.46057 1.57163 6.52221C1.5264 6.58386 1.5011 6.65786 1.49915 6.73429C1.49719 6.81072 1.51866 6.88592 1.56067 6.9498C1.60269 7.01368 1.66324 7.06317 1.7342 7.09165L7.67711 9.47481C7.86498 9.55002 8.03567 9.66251 8.17889 9.80547C8.32212 9.94844 8.43491 10.1189 8.51046 10.3067L10.8936 16.2511Z"
                      stroke="white"
                      stroke-width="1.49884"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.3779 1.60938L8.1792 9.8073"
                      stroke="white"
                      stroke-width="1.49884"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1639_409">
                      <rect width="17.9861" height="17.9861" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              New Exchange
            </button>
            <button className="text-white cursor-pointer bg-gradient-to-l from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.11)] px-18 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M2.24829 2.24805V14.2388C2.24829 14.6363 2.4062 15.0175 2.68729 15.2986C2.96838 15.5797 3.34962 15.7376 3.74713 15.7376H15.7379"
                  stroke="white"
                  stroke-width="1.49884"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.2389 6.74414L10.4918 10.4912L7.49411 7.49356L5.24585 9.74183"
                  stroke="white"
                  stroke-width="1.49884"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              View Rates
            </button>
            <button className="text-white bg-gradient-to-l from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.11)] cursor-pointer px-18 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
              <Clock size={18} /> History
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2 bg-[linear-gradient(#1A1A2E,#0A0A0F))]  rounded-xl p-6 shadow-lg border border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white text-lg font-semibold">
                Recent Activities
              </h3>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                View All →
              </a>
            </div>

            <div className="space-y-4">
              {/* Activity Item 1 */}
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-[rgba(0,201,80,0.20)] rounded-lg p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1079_4406)">
                        <path
                          d="M18.1673 8.33357C18.5479 10.2013 18.2767 12.1431 17.3989 13.8351C16.5211 15.527 15.0897 16.8669 13.3436 17.6313C11.5975 18.3957 9.64203 18.5384 7.80342 18.0355C5.96482 17.5327 4.35417 16.4147 3.24007 14.8681C2.12597 13.3214 1.57577 11.4396 1.68123 9.53639C1.78668 7.63318 2.5414 5.82364 3.81955 4.40954C5.09769 2.99545 6.82199 2.06226 8.70489 1.76561C10.5878 1.46897 12.5155 1.82679 14.1665 2.7794"
                          stroke="#05DF72"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.5 9.16732L10 11.6673L18.3333 3.33398"
                          stroke="#05DF72"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1079_4406">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">
                      USD to NGN Exchange
                    </p>
                    <p className="text-white font-semibold">$500 → ₦825,000</p>
                    <p className="text-gray-400 text-sm">
                      PayPal · 2 hours ago
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-green-900 text-green-300 px-3 py-1 rounded text-xs font-semibold mt-1">
                      completed
                    </span>
                  </div>
                </div>
              </div>

              {/* Activity Item 2 */}
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-[rgba(0,201,80,0.20)] rounded-lg p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1079_4406)">
                        <path
                          d="M18.1673 8.33357C18.5479 10.2013 18.2767 12.1431 17.3989 13.8351C16.5211 15.527 15.0897 16.8669 13.3436 17.6313C11.5975 18.3957 9.64203 18.5384 7.80342 18.0355C5.96482 17.5327 4.35417 16.4147 3.24007 14.8681C2.12597 13.3214 1.57577 11.4396 1.68123 9.53639C1.78668 7.63318 2.5414 5.82364 3.81955 4.40954C5.09769 2.99545 6.82199 2.06226 8.70489 1.76561C10.5878 1.46897 12.5155 1.82679 14.1665 2.7794"
                          stroke="#05DF72"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.5 9.16732L10 11.6673L18.3333 3.33398"
                          stroke="#05DF72"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1079_4406">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">
                      USD to NGN Exchange
                    </p>
                    <p className="text-white font-semibold">
                      $1,000 → ₦1,655,000
                    </p>
                    <p className="text-gray-400 text-sm">Zelle · 5 hours ago</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-green-900 text-green-300 px-3 py-1 rounded text-xs font-semibold mt-1">
                      completed
                    </span>
                  </div>
                </div>
              </div>

              {/* Activity Item 3 */}
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-[rgba(255,105,0,0.20)] rounded-lg p-3">
                    <Clock className="w-6 h-6 text-[#FF8904]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">
                      USD to NGN Exchange
                    </p>
                    <p className="text-white font-semibold">$250 → ₦411,250</p>
                    <p className="text-gray-400 text-sm">CashApp · Yesterday</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-orange-900 text-orange-300 px-3 py-1 rounded text-xs font-semibold mt-1">
                      pending
                    </span>
                  </div>
                </div>
              </div>

              {/* Activity Item 4 */}
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="bg-[rgba(0,201,80,0.20)] rounded-lg p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1079_4406)">
                        <path
                          d="M18.1673 8.33357C18.5479 10.2013 18.2767 12.1431 17.3989 13.8351C16.5211 15.527 15.0897 16.8669 13.3436 17.6313C11.5975 18.3957 9.64203 18.5384 7.80342 18.0355C5.96482 17.5327 4.35417 16.4147 3.24007 14.8681C2.12597 13.3214 1.57577 11.4396 1.68123 9.53639C1.78668 7.63318 2.5414 5.82364 3.81955 4.40954C5.09769 2.99545 6.82199 2.06226 8.70489 1.76561C10.5878 1.46897 12.5155 1.82679 14.1665 2.7794"
                          stroke="#05DF72"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.5 9.16732L10 11.6673L18.3333 3.33398"
                          stroke="#05DF72"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1079_4406">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">Bank Withdrawal</p>
                    <p className="text-white font-semibold">₦500,000</p>
                    <p className="text-gray-400 text-sm">
                      GT Bank · 2 days ago
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-green-900 text-green-300 px-3 py-1 rounded text-xs font-semibold mt-1">
                      completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Market Summary */}
            <div className="bg-[linear-gradient(#1A1A2E,#0A0A0F)] rounded-xl p-8 shadow-lg border border-slate-700">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white text-lg font-semibold">
                  Market Summary
                </h3>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm mb-1">Best Buy Rate</p>
                  <p className="text-[#05DF72] text-[18px] font-bold">₦1,655</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm mb-1">Best Sell Rate</p>
                  <p className="text-[#51A2FF] text-[18px] font-bold">₦1,685</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm mb-1">Market Trend</p>
                  <p className="text-green-400 text-sm font-semibold flex items-center gap-[5px]">
                    <TrendingUp size={16} />
                    +2.3%
                  </p>
                </div>
              </div>

              <button className="w-full bg-[linear-gradient(#AD46FF33,#2B7FFF33)] cursor-pointer text-white py-2 rounded-lg font-medium mt-4 transition-colors flex items-center justify-center gap-2">
                <TrendingUp size={18} /> View Full Board
              </button>
            </div>

            {/* Premium Member */}
            <div className="bg-[linear-gradient(#F0B10033,#FF690033,#FB2C3633)] rounded-xl p-8 shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-500 rounded-2xl p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M20.6337 17.1855L22.6535 28.5523C22.6761 28.6862 22.6573 28.8237 22.5997 28.9466C22.542 29.0695 22.4482 29.1718 22.3308 29.24C22.2134 29.3081 22.0779 29.3388 21.9426 29.3278C21.8073 29.3169 21.6786 29.265 21.5736 29.1789L16.8008 25.5966C16.5704 25.4245 16.2905 25.3315 16.0029 25.3315C15.7153 25.3315 15.4354 25.4245 15.205 25.5966L10.4242 29.1776C10.3193 29.2635 10.1907 29.3154 10.0555 29.3263C9.92038 29.3372 9.78512 29.3067 9.66778 29.2387C9.55045 29.1708 9.45662 29.0687 9.39882 28.946C9.34102 28.8234 9.32199 28.6861 9.34427 28.5523L11.3627 17.1855"
                      stroke="white"
                      stroke-width="2.66638"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.9982 18.6643C20.416 18.6643 23.9973 15.0829 23.9973 10.6651C23.9973 6.24735 20.416 2.66602 15.9982 2.66602C11.5804 2.66602 7.99902 6.24735 7.99902 10.6651C7.99902 15.0829 11.5804 18.6643 15.9982 18.6643Z"
                      stroke="white"
                      stroke-width="2.66638"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-center text-white text-lg font-semibold mb-2">
                Premium Member
              </h3>
              <p className="text-center text-[#99A1AF] text-sm mb-4">
                You're in the top 5% of traders
              </p>
              <div className="flex items-center justify-center gap-2 text-[#99A1AF] text-xs">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
                Member since Jan 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
