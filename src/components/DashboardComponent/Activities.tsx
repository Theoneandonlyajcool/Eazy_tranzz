import { CheckCircle2, Clock } from "lucide-react";

interface Transaction {
  type: string;
  amountFrom: string;
  amountTo?: string;
  platform: string;
  time: string;
  status: "completed" | "pending";
}

const transactions: Transaction[] = [
  {
    type: "USD to NGN Exchange",
    amountFrom: "$500",
    amountTo: "₦825,000",
    platform: "PayPal",
    time: "2 hours ago",
    status: "completed",
  },
  {
    type: "USD to NGN Exchange",
    amountFrom: "$1,000",
    amountTo: "₦1,655,000",
    platform: "Zelle",
    time: "5 hours ago",
    status: "completed",
  },
  {
    type: "USD to NGN Exchange",
    amountFrom: "$250",
    amountTo: "₦411,250",
    platform: "CashApp",
    time: "Yesterday",
    status: "pending",
  },
  {
    type: "Bank Withdrawal",
    amountFrom: "₦500,000",
    platform: "GT Bank",
    time: "2 days ago",
    status: "completed",
  },
];

const Activities = () => {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-[linear-gradient(#1A1A2E,#0A0A0F)] p-6 shadow-lg border border-gray-200 dark:border-gray-800">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-r from-[#FF6900] to-[#F0B100]">
          <Clock className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#222] dark:text-white">
            Transaction History
          </h2>
          <p className="text-sm text-gray-500 dark:text-[#99A1AF]">
            All your past transactions
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {transactions.map((t, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl bg-gray-50 dark:bg-[rgba(255,255,255,0.05)] px-4 py-4 hover:bg-gray-100 dark:hover:bg-[rgba(255,255,255,0.08)] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  t.status === "completed"
                    ? "bg-green-100 dark:bg-green-500/20"
                    : "bg-orange-100 dark:bg-orange-500/20"
                }`}
              >
                {t.status === "completed" ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                ) : (
                  <Clock className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                )}
              </div>
              <div>
                <p className="font-medium text-[#222] dark:text-white">
                  {t.type}
                </p>
                <p className="text-sm text-gray-500 dark:text-[#99A1AF]">
                  {t.amountFrom}
                  {t.amountTo && <span> → </span>}
                  {t.amountTo}
                </p>
                <p className="text-xs text-gray-400 dark:text-[#99A1AF]">
                  {t.platform} • {t.time}
                </p>
              </div>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                t.status === "completed"
                  ? "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400"
                  : "bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400"
              }`}
            >
              {t.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
